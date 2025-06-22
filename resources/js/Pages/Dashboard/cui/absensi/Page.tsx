import QRScanner from "./QRScanner";
import { IDetectedBarcode, Scanner, outline } from "@yudiel/react-qr-scanner";

import React, { useEffect, useState } from "react";

import { router, useForm } from "@inertiajs/react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { Button } from "@/Components/ui/button";

// import { Scanner as ScannerComp, IScannerProps, outline, boundingBox, centerText, useDevices } from '@yudiel/react-qr-scanner'

function Page({ auth }) {
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { data, setData, post, processing } = useForm({
    qr_code: "",
  });

  const handleScan = (data: string) => {
    if (data) {
      setData("qr_code", data);
      setError("");
    }
  };

  useEffect(() => {
    if (data.qr_code) {
      post(route("cui.scan"));
    }
  }, [data.qr_code]);

  const handleError = (err: Error) => {
    setError(err.message);
  };

  return (
    <DashboardLayout user={auth.user}>
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="md:w-[100%] w-[75vw] h-[70vh] items-center justify-center">
          {/* <QRScanner
                        onScan={handleScan}
                        onError={handleError}
                        scanDelay={3000}
                        onBack={() => {
                            router.get(
                                route("dashboard.cui", { tab: "presensi" }),
                            );
                        }}
                        pause={processing}
                    /> */}
          <h1></h1>

          {loading ? (
            <div className="flex items-center justify-center h-full w-full border-b-purple-900">
              LOADING
            </div>
          ) : (
            <div className="w-full flex justify-center items-center">
              <div className="md:w-64">
                <Scanner
                  onScan={function (detectedCodes: IDetectedBarcode[]): void {
                    //  //console.log(detectedCodes.at(-1)?.rawValue);
                    handleScan(detectedCodes.at(-1)?.rawValue || "");
                    //  //console.log(detectedCodes);
                  }}
                  components={{
                    finder: true,
                    tracker: outline,
                    zoom: true,
                  }}
                  allowMultiple={true}
                  scanDelay={2000}
                  paused={loading}
                  styles={{
                    container: {
                      width: "100%",
                    },
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <Button
          onClick={() =>
            router.get(route("dashboard.cui", { tab: "presensi" }))
          }
        >
          Absensi Manual
        </Button>

        {result && <p className="hidden md:block">Scanned Result: {result}</p>}
      </div>
    </DashboardLayout>
  );
}

export default Page;
