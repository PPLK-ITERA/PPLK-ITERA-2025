import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import beep from '!assets/music/beep.mp3';
import { Button } from '@/Components/ui/button';
import NotFoundException from '@zxing/library/esm/core/NotFoundException';

interface QRScannerProps {
    onScan: (result: string) => void;
    onError: (error: Error) => void;
    onBack: () => void;
    scanDelay: number;
    pause: boolean;
}

const QRScanner: React.FC<QRScannerProps> = ({
    onScan,
    onError,
    scanDelay,
    onBack,
    pause,
}) => {
    const webcamRef = useRef<Webcam>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [codeReader, setCodeReader] = useState<any>(null);
    const [scanning, setScanning] = useState(true);
    const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
    const [selectedDeviceId, setSelectedDeviceId] = useState<
        string | undefined
    >(undefined);

    useEffect(() => {
        const loadCodeReader = async () => {
            const { BrowserMultiFormatReader } = await import('@zxing/library');
            setCodeReader(new BrowserMultiFormatReader());
        };

        loadCodeReader();
    }, []);

    useEffect(() => {
        const getDevices = async () => {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter(
                (device) => device.kind === "videoinput",
            );
            setDevices(videoDevices);
            const savedDeviceId = localStorage.getItem("selectedDeviceId");
            if (
                savedDeviceId &&
                videoDevices.some((device) => device.deviceId === savedDeviceId)
            ) {
                setSelectedDeviceId(savedDeviceId);
            } else if (videoDevices.length > 0) {
                setSelectedDeviceId(videoDevices[0].deviceId);
            }
        };

        getDevices();
    }, []);

    useEffect(() => {
        const capture = async () => {
            if (scanning && webcamRef.current && codeReader && !pause) {
                const imageSrc = webcamRef.current.getScreenshot();
                if (imageSrc) {
                    try {
                        const result = await codeReader.decodeFromImage(
                            undefined,
                            imageSrc,
                        );
                        if (audioRef.current) {
                            audioRef.current.play();
                        }
                        onScan(result.getText());
                        setScanning(false);
                        setTimeout(() => setScanning(true), scanDelay);
                    } catch (err) {
                        if (err instanceof NotFoundException) {
                            onError(new Error('No QR code found.'));
                        } else if (err instanceof Error) {
                            onError(err);
                        } else {
                            onError(new Error("Unknown error occurred."));
                        }
                    }
                }
            }
        };

        const interval = setInterval(capture, 500);
        return () => clearInterval(interval);
    }, [codeReader, onScan, onError, scanning, scanDelay]);

    const handleDeviceChange = (deviceId: string) => {
        setSelectedDeviceId(deviceId);
        localStorage.setItem("selectedDeviceId", deviceId);
    };

    return (
        <div className="relative flex flex-col items-center h-full">
            {devices.length > 1 && (
                <select
                    onChange={(e) => handleDeviceChange(e.target.value)}
                    value={selectedDeviceId}
                    className="md:block hidden mb-4"
                >
                    {devices.map((device, index) => (
                        <option
                            className="md:block hidden"
                            key={index}
                            value={device.deviceId}
                        >
                            {device.label || `Camera ${index + 1}`}
                        </option>
                    ))}
                </select>
            )}
            <div className="md:w-full relative w-screen h-full px-2">
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{ deviceId: selectedDeviceId }}
                    className="w-screen brightness-50 h-[calc(100vh-120px)] md:h-auto border-2 border-black object-cover  md:object-contain"
                />
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="flex flex-col items-center gap-1 mt-2 font-bold text-white">
                        <h1>ABSEN C.U.I</h1>
                        <h2>ini deskripsi</h2>
                    </div>
                    <div className="bg-gradient-to-t from-white/50 to-transparent animate-scan absolute top-0 left-0 w-full h-full"></div>
                    <Button
                        onClick={onBack}
                        className="bottom-5 left-1/2 absolute -translate-x-1/2"
                    >
                        Absensi Manual
                    </Button>
                </div>
            </div>
            <audio ref={audioRef} src={beep} />
        </div>
    );
};

export default QRScanner;
