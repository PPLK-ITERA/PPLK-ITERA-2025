import React, { useState, useEffect, useRef } from 'react';
import DefaultLayout from "@/Layouts/DefaultLayout";
import bg_1 from "!assets/tesla/bg-1.png";
import axios from 'axios';

type Cell = {
    letter: string;
    isBlack: boolean;
    number?: number;
    isSelected: boolean;
    isHighlighted: boolean;
    isCorrect: boolean;
    isWrong: boolean;
};

type Clue = {
    number: number;
    clue: string;
    answer: string;
    direction: 'across' | 'down';
    startRow: number;
    startCol: number;
    isAnswered: boolean;
};

export default function Page() {
    const [currentTab, setCurrentTab] = useState<'Petunjuk Soal' | 'Mendatar' | 'Menurun'>('Petunjuk Soal');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
    const [isResultModalOpen, setIsResultModalOpen] = useState(false);
    const [selectedCell, setSelectedCell] = useState<{ row: number, col: number } | null>(null);
    const [selectedClue, setSelectedClue] = useState<Clue | null>(null);
    const [inputDirection, setInputDirection] = useState<'across' | 'down'>('across');
    const [clues, setClues] = useState<{
        across: Clue[];
        down: Clue[];
    }>({ across: [], down: [] });
    const [grid, setGrid] = useState<Cell[][]>([]);
    const [time, setTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [selectedQuestion, setSelectedQuestion] = useState<string>('');
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [result, setResult] = useState({ correct: 0, wrong: 0 });
    const [loading, setLoading] = useState(true);
    const [started, setStarted] = useState(false);
    const [tempWrongAnswers, setTempWrongAnswers] = useState<{ [key: string]: string }>({});
    const answerInputRef = useRef<HTMLInputElement>(null);

    const bg = bg_1;

    // Fetch clues from API and initialize grid
    useEffect(() => {
        if (started) {
            fetchClues();
            setIsPlaying(true);
            setTime(0);
        }
        // eslint-disable-next-line
    }, [started]);

    useEffect(() => {
        if (!started) return;
        const timer = setInterval(() => {
            if (isPlaying) setTime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [isPlaying, started]);

    // Hapus initializeCrossword, gunakan hanya fetchClues
    const fetchClues = async () => {
        setLoading(true);
        try {
            const res = await axios.get('/api/admin/tesla/');
            const arr = res.data.data;
            setClues({
                across: arr.filter((c: any) => c.tipe === 'mendatar').map((c: any) => ({
                    number: c.nomor,
                    clue: c.pertanyaan,
                    answer: c.jawaban,
                    direction: 'across',
                    startRow: c.start_row,
                    startCol: c.start_col,
                    isAnswered: false,
                })),
                down: arr.filter((c: any) => c.tipe === 'menurun').map((c: any) => ({
                    number: c.nomor,
                    clue: c.pertanyaan,
                    answer: c.jawaban,
                    direction: 'down',
                    startRow: c.start_row,
                    startCol: c.start_col,
                    isAnswered: false,
                })),
            });
            // Build grid
            const size = 15;
            const newGrid: Cell[][] = Array(size).fill(null).map(() =>
                Array(size).fill(null).map(() => ({
                    letter: '',
                    isBlack: false,
                    isSelected: false,
                    isHighlighted: false,
                    isCorrect: false,
                    isWrong: false,
                }))
            );
            arr.forEach((c: any) => {
                if (
                    c.start_row >= 0 && c.start_row < size &&
                    c.start_col >= 0 && c.start_col < size
                ) {
                    newGrid[c.start_row][c.start_col].number = c.nomor;
                }
            });
            setGrid(newGrid);
        } catch (e) {
            setClues({ across: [], down: [] });
            setGrid([]);
        }
        setLoading(false);
    };

    const initializeCrossword = () => {
        const size = 15;
        const newGrid: Cell[][] = Array(size).fill(null).map(() =>
            Array(size).fill(null).map(() => ({
                letter: '',
                isBlack: false,
                isSelected: false,
                isHighlighted: false,
                isCorrect: false,
                isWrong: false,
            }))
        );

        // Define clues and answers
        const acrossClues: Clue[] = [
            {
                number: 1,
                clue: "Ibu kota Indonesia",
                answer: "JAKARTA",
                direction: 'across',
                startRow: 1,
                startCol: 1,
                isAnswered: false
            },
            {
                number: 4,
                clue: "Planet terdekat dari matahari",
                answer: "MERKURIUS",
                direction: 'across',
                startRow: 3,
                startCol: 2,
                isAnswered: false
            },
            {
                number: 6,
                clue: "Binatang yang dikenal sebagai raja hutan",
                answer: "SINGA",
                direction: 'across',
                startRow: 5,
                startCol: 4,
                isAnswered: false
            },
            {
                number: 7,
                clue: "Warna daun",
                answer: "HIJAU",
                direction: 'across',
                startRow: 7,
                startCol: 6,
                isAnswered: false
            },
            {
                number: 9,
                clue: "Negara dengan menara Eiffel",
                answer: "PERANCIS",
                direction: 'across',
                startRow: 9,
                startCol: 8,
                isAnswered: false
            }
        ];

        const downClues: Clue[] = [
            {
                number: 2,
                clue: "Buah dengan kulit berduri",
                answer: "DURIAN",
                direction: 'down',
                startRow: 1,
                startCol: 3,
                isAnswered: false
            },
            {
                number: 3,
                clue: "Sungai terpanjang di dunia",
                answer: "NIL",
                direction: 'down',
                startRow: 2,
                startCol: 5,
                isAnswered: false
            },
            {
                number: 5,
                clue: "Lambang kimia untuk emas",
                answer: "AU",
                direction: 'down',
                startRow: 4,
                startCol: 7,
                isAnswered: false
            },
            {
                number: 8,
                clue: "Ibu kota Jepang",
                answer: "TOKYO",
                direction: 'down',
                startRow: 6,
                startCol: 9,
                isAnswered: false
            },
            {
                number: 10,
                clue: "Satelit alami bumi",
                answer: "BULAN",
                direction: 'down',
                startRow: 8,
                startCol: 11,
                isAnswered: false
            }
        ];

        // Assign numbers to cells and update grid
        const allClues = [...acrossClues, ...downClues];
        allClues.forEach(clue => {
            if (!newGrid[clue.startRow][clue.startCol].isBlack) {
                newGrid[clue.startRow][clue.startCol].number = clue.number;
            }
        });

        setGrid(newGrid);
        setClues({
            across: acrossClues,
            down: downClues
        });
    };

    const handleQuestionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedQuestion(value);
        setUserAnswer('');

        // Hapus jawaban salah sementara dari grid jika ada
        if (selectedClue && selectedQuestion) {
            clearTempWrongAnswer(selectedClue, selectedQuestion);
        }

        if (value) {
            const [direction, numberStr] = value.split('-');
            const number = parseInt(numberStr);

            const clueList = direction === 'across' ? clues.across : clues.down;
            const clue = clueList.find(c => c.number === number);

            if (clue) {
                setInputDirection(direction as 'across' | 'down');
                highlightClueCells(clue);
                setTimeout(() => {
                    if (answerInputRef.current) {
                        answerInputRef.current.focus();
                    }
                }, 0);
            }
        }
    };

    // Fungsi untuk menghapus jawaban salah sementara dari grid
    const clearTempWrongAnswer = (clue: Clue, questionKey: string) => {
        if (!tempWrongAnswers[questionKey]) return;
        const answer = tempWrongAnswers[questionKey];
        const newGrid = [...grid.map(row => [...row])];
        if (clue.direction === 'across') {
            for (let i = 0; i < clue.answer.length; i++) {
                const col = clue.startCol + i;
                if (col >= newGrid[clue.startRow].length) continue;
                // Hanya hapus jika cell bukan jawaban benar
                if (!newGrid[clue.startRow][col].isCorrect) {
                    newGrid[clue.startRow][col].letter = '';
                    newGrid[clue.startRow][col].isWrong = false;
                }
            }
        } else {
            for (let i = 0; i < clue.answer.length; i++) {
                const row = clue.startRow + i;
                if (row >= newGrid.length) continue;
                if (!newGrid[row][clue.startCol].isCorrect) {
                    newGrid[row][clue.startCol].letter = '';
                    newGrid[row][clue.startCol].isWrong = false;
                }
            }
        }
        setGrid(newGrid);
        setTempWrongAnswers(prev => {
            const copy = { ...prev };
            delete copy[questionKey];
            return copy;
        });
    };

    const highlightClueCells = (clue: Clue) => {
        const newGrid = grid.map(rowArr =>
            rowArr.map(cell => ({
                ...cell,
                isHighlighted: false,
                isSelected: false,
                isCorrect: false,
                isWrong: false
            }))
        );

        if (clue.direction === 'across') {
            for (let c = clue.startCol; c < clue.startCol + clue.answer.length; c++) {
                if (c < newGrid[clue.startRow].length) {
                    newGrid[clue.startRow][c].isHighlighted = true;
                }
            }
            newGrid[clue.startRow][clue.startCol].isSelected = true;
            setSelectedCell({ row: clue.startRow, col: clue.startCol });
        } else {
            for (let r = clue.startRow; r < clue.startRow + clue.answer.length; r++) {
                if (r < newGrid.length) {
                    newGrid[r][clue.startCol].isHighlighted = true;
                }
            }
            newGrid[clue.startRow][clue.startCol].isSelected = true;
            setSelectedCell({ row: clue.startRow, col: clue.startCol });
        }

        setSelectedClue(clue);
        setGrid(newGrid);
    };

    // Submit answer to API
    // Ubah handleAnswerSubmit agar jika jawaban benar dan grid tidak cukup, grid otomatis diperbesar
    const handleAnswerSubmit = async () => {
        if (!selectedQuestion || !userAnswer || !selectedClue) return;
        const answer = userAnswer.toUpperCase();
        // Validate answer length
        if (answer.length !== selectedClue.answer.length) {
            // ...bisa pakai toast/modal, tidak pakai alert
            return;
        }

        // Cek ke backend
        let hasil = 'salah';
        try {
            const res = await axios.post(`/api/admin/tesla/${selectedClue.number}`, { jawaban: userAnswer });
            hasil = res.data.hasil;
        } catch {
            hasil = 'salah';
        }

        // Cek apakah grid cukup, jika tidak, resize grid
        let newGrid = [...grid.map(row => [...row])];
        let size = newGrid.length;
        let needResize = false;
        if (selectedClue.direction === 'across') {
            const lastCol = selectedClue.startCol + selectedClue.answer.length - 1;
            if (lastCol >= size) {
                needResize = true;
            }
        } else {
            const lastRow = selectedClue.startRow + selectedClue.answer.length - 1;
            if (lastRow >= size) {
                needResize = true;
            }
        }
        if (hasil === 'benar' && needResize) {
            // Resize grid (tambah baris/kolom agar jawaban muat)
            const newSize = Math.max(
                selectedClue.direction === 'across'
                    ? selectedClue.startCol + selectedClue.answer.length
                    : size,
                selectedClue.direction === 'down'
                    ? selectedClue.startRow + selectedClue.answer.length
                    : size,
                size + 1 // minimal tambah 1
            );
            const emptyCell = () => ({
                letter: '',
                isBlack: false,
                isSelected: false,
                isHighlighted: false,
                isCorrect: false,
                isWrong: false,
            });
            // Tambah baris jika perlu
            while (newGrid.length < newSize) {
                newGrid.push(Array(newSize).fill(null).map(emptyCell));
            }
            // Tambah kolom di setiap baris jika perlu
            for (let i = 0; i < newGrid.length; i++) {
                while (newGrid[i].length < newSize) {
                    newGrid[i].push(emptyCell());
                }
            }
            size = newSize;
        }

        // Reset previous correct/wrong states for this clue
        if (selectedClue.direction === 'across') {
            for (let i = 0; i < selectedClue.answer.length; i++) {
                const col = selectedClue.startCol + i;
                if (col >= newGrid[selectedClue.startRow].length) continue;
                newGrid[selectedClue.startRow][col].isCorrect = false;
                newGrid[selectedClue.startRow][col].isWrong = false;
                // Jika jawaban salah, hapus huruf sebelumnya (agar tidak menumpuk)
                if (hasil === 'salah') {
                    newGrid[selectedClue.startRow][col].letter = '';
                }
            }
        } else {
            for (let i = 0; i < selectedClue.answer.length; i++) {
                const row = selectedClue.startRow + i;
                if (row >= newGrid.length) continue;
                newGrid[row][selectedClue.startCol].isCorrect = false;
                newGrid[row][selectedClue.startCol].isWrong = false;
                if (hasil === 'salah') {
                    newGrid[row][selectedClue.startCol].letter = '';
                }
            }
        }

        // Update grid visual
        if (selectedClue.direction === 'across') {
            for (let i = 0; i < selectedClue.answer.length; i++) {
                const col = selectedClue.startCol + i;
                if (col >= newGrid[selectedClue.startRow].length) continue;
                if (hasil === 'benar') {
                    newGrid[selectedClue.startRow][col].letter = answer[i] || '';
                    newGrid[selectedClue.startRow][col].isCorrect = true;
                    newGrid[selectedClue.startRow][col].isWrong = false;
                } else {
                    newGrid[selectedClue.startRow][col].letter = answer[i] || '';
                    newGrid[selectedClue.startRow][col].isCorrect = false;
                    newGrid[selectedClue.startRow][col].isWrong = true;
                }
            }
        } else {
            for (let i = 0; i < selectedClue.answer.length; i++) {
                const row = selectedClue.startRow + i;
                if (row >= newGrid.length) continue;
                if (hasil === 'benar') {
                    newGrid[row][selectedClue.startCol].letter = answer[i] || '';
                    newGrid[row][selectedClue.startCol].isCorrect = true;
                    newGrid[row][selectedClue.startCol].isWrong = false;
                } else {
                    newGrid[row][selectedClue.startCol].letter = answer[i] || '';
                    newGrid[row][selectedClue.startCol].isCorrect = false;
                    newGrid[row][selectedClue.startCol].isWrong = true;
                }
            }
        }

        // Update clue status
        setClues(prev => {
            if (selectedClue.direction === 'across') {
                return {
                    ...prev,
                    across: prev.across.map(c =>
                        c.number === selectedClue.number ? { ...c, isAnswered: hasil === 'benar' } : c
                    )
                };
            } else {
                return {
                    ...prev,
                    down: prev.down.map(c =>
                        c.number === selectedClue.number ? { ...c, isAnswered: hasil === 'benar' } : c
                    )
                };
            }
        });

        setGrid(newGrid);

        // Jika salah, simpan jawaban sementara, jika benar hapus
        setTempWrongAnswers(prev => {
            const key = selectedQuestion;
            if (hasil === 'salah') {
                return { ...prev, [key]: answer };
            } else {
                const copy = { ...prev };
                delete copy[key];
                return copy;
            }
        });

        setUserAnswer('');
        setSelectedQuestion('');
        setSelectedClue(null);
    };

    const checkAllAnswers = () => {
        const newGrid = [...grid];
        let correctCount = 0;
        let wrongCount = 0;

        // Check all clues
        const newClues = { ...clues };

        for (const clueType of ['across', 'down'] as const) {
            newClues[clueType] = newClues[clueType].map(clue => {
                let isCorrect = true;
                const answer = clue.answer;

                // Reset previous states
                for (let i = 0; i < answer.length; i++) {
                    const row = clue.direction === 'across' ? clue.startRow : clue.startRow + i;
                    const col = clue.direction === 'across' ? clue.startCol + i : clue.startCol;

                    if (row >= newGrid.length || col >= newGrid[0].length) continue;
                    newGrid[row][col].isCorrect = false;
                    newGrid[row][col].isWrong = false;
                }

                // Check new answer
                for (let i = 0; i < answer.length; i++) {
                    const row = clue.direction === 'across' ? clue.startRow : clue.startRow + i;
                    const col = clue.direction === 'across' ? clue.startCol + i : clue.startCol;

                    if (row >= newGrid.length || col >= newGrid[0].length) continue;

                    if (newGrid[row][col].letter !== answer[i]) {
                        newGrid[row][col].isWrong = true;
                        isCorrect = false;
                    } else {
                        newGrid[row][col].isCorrect = true;
                    }
                }

                if (isCorrect) {
                    correctCount++;
                } else {
                    wrongCount++;
                }

                return { ...clue, isAnswered: isCorrect };
            });
        }

        setGrid(newGrid);
        setClues(newClues);
        setResult({ correct: correctCount, wrong: wrongCount });
        setIsResultModalOpen(true);
    };

    const resetPuzzle = () => {
        fetchClues();
        setSelectedCell(null);
        setSelectedClue(null);
        setSelectedQuestion('');
        setUserAnswer('');
        setTime(0);
        setIsPlaying(true);
        setStarted(true);
    };

    const togglePause = () => {
        setIsPlaying(prev => !prev);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Calculate progress, always return 0% if not started or total is 0
    const calculateProgress = () => {
        const totalClues = clues.across.length + clues.down.length;
        if (!started || totalClues === 0) {
            return {
                percentage: 0,
                answered: 0,
                total: totalClues
            };
        }
        const answeredClues = [...clues.across, ...clues.down].filter(clue => {
            // Check if all letters in the answer are correct
            const answer = clue.answer;
            let allCorrect = true;
            for (let i = 0; i < answer.length; i++) {
                const row = clue.direction === 'across' ? clue.startRow : clue.startRow + i;
                const col = clue.direction === 'across' ? clue.startCol + i : clue.startCol;
                if (row >= grid.length || col >= grid[0].length) continue;
                if (grid[row][col].letter !== answer[i]) {
                    allCorrect = false;
                    break;
                }
            }
            return allCorrect;
        }).length;
        return {
            percentage: Math.round((answeredClues / totalClues) * 100),
            answered: answeredClues,
            total: totalClues
        };
    };

    const progress = calculateProgress();

    // Mobile Modal Component for Petunjuk
    const MobileModal = ({ isOpen, onClose, children, title }: {
        isOpen: boolean;
        onClose: () => void;
        children: React.ReactNode;
        title: string;
    }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end md:hidden">
                <div className="bg-white w-full max-h-[80vh] rounded-t-lg overflow-hidden">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white">
                        <h3 className="font-medium ">{title}</h3>
                        <button
                            onClick={onClose}
                            className="text-white text-xl font-bold"
                        >
                            ×
                        </button>
                    </div>
                    <div className="max-h-[70vh] overflow-y-auto">{children}</div>
                </div>
            </div>
        );
    };

    // Progress Modal Component
    const ProgressModal = ({ isOpen, onClose }: {
        isOpen: boolean;
        onClose: () => void;
    }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 md:hidden">
                <div className="bg-white w-full max-w-sm rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white">
                        <h3 className="font-medium">Progress</h3>
                        <button
                            onClick={onClose}
                            className="text-white text-xl font-bold"
                        >
                            ×
                        </button>
                    </div>
                    <div className="p-4">
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                            <div
                                className="bg-orange-500 h-2 rounded-full"
                                style={{ width: `${progress.percentage}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                            <div className="text-center">
                                <div className="font-bold text-gray-800">{formatTime(time)}</div>
                                <div>Waktu</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-gray-800">{progress.percentage}%</div>
                                <div>Selesai</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-gray-800">{progress.answered}/{progress.total}</div>
                                <div>Pertanyaan</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Result Modal Component
    const ResultModal = ({ isOpen, onClose, correct, wrong }: {
        isOpen: boolean;
        onClose: () => void;
        correct: number;
        wrong: number;
    }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white w-full max-w-sm rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white">
                        <h3 className="font-medium">Hasil Pemeriksaan</h3>
                        <button
                            onClick={onClose}
                            className="text-white text-xl font-bold"
                        >
                            ×
                        </button>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between mb-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600">{correct}</div>
                                <div className="text-sm text-gray-600">Benar</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-red-600">{wrong}</div>
                                <div className="text-sm text-gray-600">Salah</div>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <div className="text-lg font-medium text-gray-800">
                                {correct === progress.total ?
                                    "Selamat! Anda telah menyelesaikan semua soal dengan benar!" :
                                    correct > wrong ?
                                        "Bagus! Tingkatkan lagi jawaban yang salah!" :
                                        "Coba periksa kembali jawaban Anda!"}
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="mt-6 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    // Helper: get clue by position
    const getClueByPosition = (row: number, col: number): Clue | null => {
        // Cari clue yang startRow/startCol sama
        let clue = clues.across.find(c => c.startRow === row && c.startCol === col);
        if (clue) return clue;
        clue = clues.down.find(c => c.startRow === row && c.startCol === col);
        return clue || null;
    };

    return (
        <DefaultLayout>
            {/* Fixed background image and overlay */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${bg})`,
                }}
            >
                <div className="absolute inset-0 bg-[#BF4000] mix-blend-multiply pointer-events-none"></div>
            </div>
            {/* Content */}
            <div className="relative z-10 my-4 md:my-40 md:max-w-5xl md:mx-auto">
                {/* Header */}
                <div className="bg-[#b84c19] w-full md:max-w-lg text-white p-3 md:p-4 md:mt-0 mt-32 rounded-lg mb-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 md:space-x-8">
                            <div className="text-center">
                                <div className="text-xl md:text-3xl font-bold">{progress.answered * 10}</div>
                                <div className="text-xs md:text-sm">Skor</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-3xl font-bold">{formatTime(time)}</div>
                                <div className="text-xs md:text-sm">Waktu</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-3xl font-bold">DAY</div>
                                <div className="text-xs md:text-sm">1</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1 md:space-y-2">
                            <button
                                onClick={started ? checkAllAnswers : undefined}
                                className={`bg-white shadow-lg text-orange-600 px-2 md:px-4 py-1 rounded text-xs md:text-sm font-medium ${!started ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!started}
                            >
                                Cek Jawaban
                            </button>
                            <button
                                onClick={started ? () => setIsMobileMenuOpen(true) : undefined}
                                className={`bg-white shadow-lg text-orange-600 px-2 md:px-4 py-1 rounded text-xs md:text-sm font-medium md:hidden ${!started ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!started}
                            >
                                Petunjuk
                            </button>
                            <button
                                onClick={started ? () => setCurrentTab('Petunjuk Soal') : undefined}
                                className={`bg-white shadow-lg text-orange-600 px-2 md:px-4 py-1 rounded text-xs md:text-sm font-medium hidden md:block ${!started ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!started}
                            >
                                Petunjuk
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    {/* Game Area */}
                    <div className="flex-1 order-2 md:order-1 mx-auto max-w-5xl md:w-full">
                        <div className="p-2 md:p-4 rounded-lg mb-4">
                            {/* Show both Question Selection and Board together when started */}
                            {started && (
                                <div>
                                    {/* Soal Dropdown */}
                                    <div
                                        className="hidden md:block mb-4 bg-white p-4 rounded-lg shadow"
                                        style={{ maxWidth: '100%', width: '100%' }}
                                    >
                                        <div className="flex flex-col md:flex-row gap-4">
                                            <div
                                                className="flex-1 min-w-[320px] w-full"
                                                style={{ maxWidth: '640px' }}
                                            >
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Pilih Soal</label>
                                                <select
                                                    value={selectedQuestion}
                                                    onChange={handleQuestionSelect}
                                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white"
                                                    style={{
                                                        paddingRight: '2.5rem',
                                                        backgroundPosition: 'right 0.75rem center',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: '1.25em 1.25em',
                                                        zIndex: 10,
                                                    }}
                                                >
                                                    <option value="">-- Pilih Soal --</option>
                                                    <optgroup label="Mendatar">
                                                        {clues.across.map(clue => (
                                                            <option key={`across-${clue.number}`} value={`across-${clue.number}`}>
                                                                {clue.number}. {clue.clue} ({clue.answer.length} huruf)
                                                            </option>
                                                        ))}
                                                    </optgroup>
                                                    <optgroup label="Menurun">
                                                        {clues.down.map(clue => (
                                                            <option key={`down-${clue.number}`} value={`down-${clue.number}`}>
                                                                {clue.number}. {clue.clue} ({clue.answer.length} huruf)
                                                            </option>
                                                        ))}
                                                    </optgroup>
                                                </select>
                                            </div>
                                            {selectedQuestion && selectedClue && (
                                                <div className="flex-1 min-w-[220px] w-full">
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Jawaban ({selectedClue.answer.length} huruf)
                                                    </label>
                                                    <div className="flex gap-2">
                                                        <input
                                                            ref={answerInputRef}
                                                            type="text"
                                                            value={userAnswer}
                                                            onChange={(e) => setUserAnswer(e.target.value.toUpperCase())}
                                                            maxLength={selectedClue.answer.length}
                                                            className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 uppercase bg-white"
                                                            placeholder={`Masukkan ${selectedClue.answer.length} huruf`}
                                                        />
                                                        <button
                                                            onClick={handleAnswerSubmit}
                                                            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* Board */}
                                    <div
                                        className="inline-block overflow-x-auto bg-white p-4 rounded-lg shadow"
                                        style={{
                                            maxWidth: '100%',
                                            minWidth: 320,
                                            border: '1px solid #e5e7eb',
                                        }}
                                    >
                                        <div
                                            className="grid gap-0"
                                            style={{
                                                gridTemplateColumns: `repeat(${grid.length}, minmax(1.5rem, 2rem))`,
                                            }}
                                        >
                                            {grid.map((row, rowIndex) => (
                                                <React.Fragment key={rowIndex}>
                                                    {row.map((cell, colIndex) => (
                                                        <div
                                                            key={`${rowIndex}-${colIndex}`}
                                                            className={`
                                                                border border-gray-400
                                                                w-6 h-6 md:w-8 md:h-8
                                                                flex items-center justify-center relative
                                                                text-xs md:text-base
                                                                transition-all
                                                                ${cell.isBlack ? 'bg-black' : ''}
                                                                ${cell.isCorrect ? 'bg-green-200' : cell.isWrong ? 'bg-red-200' : cell.isSelected ? 'bg-yellow-200' : cell.isHighlighted ? 'bg-yellow-100' : 'bg-gray-50'}
                                                                ${cell.letter ? 'font-bold' : ''}
                                                                select-none
                                                            `}
                                                            style={{
                                                                minWidth: 24,
                                                                minHeight: 24,
                                                                maxWidth: 32,
                                                                maxHeight: 32,
                                                                padding: 0,
                                                                boxSizing: 'border-box',
                                                                cursor: cell.number ? 'pointer' : 'default',
                                                                borderRadius: 4,
                                                                borderWidth: 1,
                                                                borderColor: cell.isCorrect
                                                                    ? '#22c55e'
                                                                    : cell.isWrong
                                                                        ? '#ef4444'
                                                                        : '#a3a3a3',
                                                            }}
                                                        >
                                                            {cell.number && (
                                                                <span
                                                                    className="absolute top-0 left-0 text-[10px] text-gray-800 pl-0.5 pt-0.5 leading-none cursor-pointer select-none"
                                                                    style={{
                                                                        zIndex: 2,
                                                                        background: 'rgba(255,255,255,0.7)',
                                                                        borderRadius: 2,
                                                                        minWidth: 12,
                                                                        textAlign: 'left',
                                                                        pointerEvents: 'auto',
                                                                    }}
                                                                    onClick={() => {
                                                                        if (!started) return;
                                                                        const clue = getClueByPosition(rowIndex, colIndex);
                                                                        if (clue) {
                                                                            setSelectedQuestion(`${clue.direction}-${clue.number}`);
                                                                            highlightClueCells(clue);
                                                                        }
                                                                    }}
                                                                >
                                                                    {cell.number}
                                                                </span>
                                                            )}
                                                            <span
                                                                className={`${cell.isSelected ? 'text-black font-bold' : 'text-gray-800'}`}
                                                                style={{
                                                                    zIndex: 1,
                                                                    width: '100%',
                                                                    textAlign: 'center',
                                                                    fontSize: '1rem',
                                                                    lineHeight: '1.5rem',
                                                                    position: 'relative',
                                                                }}
                                                            >
                                                                {cell.letter}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Bottom Buttons */}
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                            {!started ? (
                                <button
                                    onClick={() => setStarted(true)}
                                    className="bg-white border border-gray-300 px-4 md:px-6 py-2 rounded text-[#FF6B20] hover:bg-gray-50 text-sm md:text-base"
                                >
                                    Mulai
                                </button>
                            ) : (
                                <button
                                    onClick={resetPuzzle}
                                    className="bg-white border border-gray-300 px-4 md:px-6 py-2 rounded text-[#FF6B20] hover:bg-gray-50 text-sm md:text-base"
                                >
                                    Mulai Dari Awal
                                </button>
                            )}
                            {started && (
                                <>
                                    <button
                                        onClick={togglePause}
                                        className="bg-white border border-gray-300 px-4 md:px-6 py-2 rounded text-[#FF6B20] hover:bg-gray-50 text-sm md:text-base"
                                    >
                                        {isPlaying ? 'Pause' : 'Lanjutkan'}
                                    </button>
                                    <button className="bg-white border border-gray-300 px-4 md:px-6 py-2 rounded text-[#FF6B20] hover:bg-gray-50 text-sm md:text-base">
                                        Simpan Progress
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Right Sidebar - Hidden on mobile, shown in modal */}
                    <div className="hidden md:block w-80 order-1 md:order-2">
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                            {/* Tabs */}
                            <div className="flex">
                                <button
                                    onClick={() => setCurrentTab('Petunjuk Soal')}
                                    className={`flex-1 py-3 px-4 text-sm font-medium ${currentTab === 'Petunjuk Soal'
                                        ? 'bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    Petunjuk Soal
                                </button>
                            </div>

                            {/* Sub tabs */}
                            <div className="flex border-b">
                                <button
                                    onClick={started ? () => setCurrentTab('Mendatar') : undefined}
                                    className={`flex-1 py-2 px-4 text-sm ${currentTab === 'Mendatar'
                                        ? 'bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white'
                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                        } ${!started ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={!started}
                                >
                                    Mendatar
                                </button>
                                <button
                                    onClick={started ? () => setCurrentTab('Menurun') : undefined}
                                    className={`flex-1 py-2 px-4 text-sm ${currentTab === 'Menurun'
                                        ? 'bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white'
                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                        } ${!started ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={!started}
                                >
                                    Menurun
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-4 max-h-80 overflow-y-auto">
                                {currentTab === 'Mendatar' && (
                                    <div>
                                        <h3 className="font-bold mb-2">Mendatar</h3>
                                        <ul className="space-y-3">
                                            {clues.across.map((clue) => (
                                                <li
                                                    key={clue.number}
                                                    className={`p-2 rounded cursor-pointer ${selectedClue?.number === clue.number && selectedClue?.direction === 'across' ? 'bg-yellow-100' : ''}`}
                                                    onClick={() => {
                                                        setSelectedQuestion(`across-${clue.number}`);
                                                        highlightClueCells(clue);
                                                    }}
                                                >
                                                    <span className="font-bold">{clue.number}.</span> {clue.clue}
                                                    {clue.isAnswered && (
                                                        <span className="ml-2 text-green-600">✓</span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {currentTab === 'Menurun' && (
                                    <div>
                                        <h3 className="font-bold mb-2">Menurun</h3>
                                        <ul className="space-y-3">
                                            {clues.down.map((clue) => (
                                                <li
                                                    key={clue.number}
                                                    className={`p-2 rounded cursor-pointer ${selectedClue?.number === clue.number && selectedClue?.direction === 'down' ? 'bg-yellow-100' : ''}`}
                                                    onClick={() => {
                                                        setSelectedQuestion(`down-${clue.number}`);
                                                        highlightClueCells(clue);
                                                    }}
                                                >
                                                    <span className="font-bold">{clue.number}.</span> {clue.clue}
                                                    {clue.isAnswered && (
                                                        <span className="ml-2 text-green-600">✓</span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {currentTab === 'Petunjuk Soal' && (
                                    <div>
                                        <h3 className="font-bold mb-2">Petunjuk Bermain</h3>
                                        <ol className="list-decimal pl-5 space-y-2 text-sm">
                                            <li>Pilih soal dari dropdown atau daftar soal</li>
                                            <li>Masukkan jawaban pada kolom input</li>
                                            <li>Tekan Submit untuk mengisi jawaban</li>
                                            <li>Jawaban benar akan berwarna hijau</li>
                                            <li>Jawaban salah akan berwarna merah</li>
                                            <li>Tekan "Check Jawaban" untuk memeriksa semua jawaban</li>
                                        </ol>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Quick Actions */}
                    <div className="flex md:hidden space-x-2 order-1 md:order-2 mb-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="flex-1 bg-white border border-gray-300 px-3 py-2 rounded text-[#FF6B20] hover:bg-gray-50 text-sm"
                        >
                            📝 Petunjuk
                        </button>
                        <button
                            onClick={() => setIsProgressModalOpen(true)}
                            className="flex-1 bg-white border border-gray-300 px-3 py-2 rounded text-[#FF6B20] hover:bg-gray-50 text-sm"
                        >
                            📊 Progress
                        </button>
                    </div>
                </div>

                {/* Progress Bar - Desktop Only */}
                {started && (
                    <div className="hidden md:block mt-6 bg-white border border-gray-200 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">Progress</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                            <div
                                className="bg-orange-500 h-2 rounded-full"
                                style={{ width: `${progress.percentage}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                            <div className="text-center">
                                <div className="font-bold text-gray-800">{formatTime(time)}</div>
                                <div>Waktu</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-gray-800">{progress.percentage}%</div>
                                <div>Selesai</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-gray-800">{progress.answered}/{progress.total}</div>
                                <div>Pertanyaan</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Modal for Petunjuk */}
            <MobileModal
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                title="Petunjuk Soal"
            >
                {/* Sub tabs */}
                <div className="flex border-b">
                    <button
                        onClick={started ? () => setCurrentTab('Mendatar') : undefined}
                        className={`flex-1 py-3 px-4 text-sm ${currentTab === 'Mendatar'
                            ? 'bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white'
                            : 'bg-gray-50 text-gray-600'
                            } ${!started ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!started}
                    >
                        Mendatar
                    </button>
                    <button
                        onClick={started ? () => setCurrentTab('Menurun') : undefined}
                        className={`flex-1 py-3 px-4 text-sm ${currentTab === 'Menurun'
                            ? 'bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white'
                            : 'bg-gray-50 text-gray-600'
                            } ${!started ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!started}
                    >
                        Menurun
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 max-h-60 overflow-y-auto">
                    {currentTab === 'Mendatar' && (
                        <div>
                            <h3 className="font-bold mb-2">Mendatar</h3>
                            <ul className="space-y-3">
                                {clues.across.map((clue) => (
                                    <li
                                        key={clue.number}
                                        className={`p-2 rounded cursor-pointer ${selectedClue?.number === clue.number && selectedClue?.direction === 'across' ? 'bg-yellow-100' : ''}`}
                                        onClick={() => {
                                            setSelectedQuestion(`across-${clue.number}`);
                                            highlightClueCells(clue);
                                            setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        <span className="font-bold">{clue.number}.</span> {clue.clue}
                                        {clue.isAnswered && (
                                            <span className="ml-2 text-green-600">✓</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {currentTab === 'Menurun' && (
                        <div>
                            <h3 className="font-bold mb-2">Menurun</h3>
                            <ul className="space-y-3">
                                {clues.down.map((clue) => (
                                    <li
                                        key={clue.number}
                                        className={`p-2 rounded cursor-pointer ${selectedClue?.number === clue.number && selectedClue?.direction === 'down' ? 'bg-yellow-100' : ''}`}
                                        onClick={() => {
                                            setSelectedQuestion(`down-${clue.number}`);
                                            highlightClueCells(clue);
                                            setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        <span className="font-bold">{clue.number}.</span> {clue.clue}
                                        {clue.isAnswered && (
                                            <span className="ml-2 text-green-600">✓</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {currentTab === 'Petunjuk Soal' && (
                        <div>
                            <h3 className="font-bold mb-2">Petunjuk Bermain</h3>
                            <ol className="list-decimal pl-5 space-y-2 text-sm">
                                <li>Pilih soal dari dropdown atau daftar soal</li>
                                <li>Masukkan jawaban pada kolom input</li>
                                <li>Tekan Submit untuk mengisi jawaban</li>
                                <li>Jawaban benar akan berwarna hijau</li>
                                <li>Jawaban salah akan berwarna merah</li>
                                <li>Tekan "Check Jawaban" untuk memeriksa semua jawaban</li>
                            </ol>
                        </div>
                    )}
                </div>
            </MobileModal>

            {/* Progress Modal */}
            <ProgressModal
                isOpen={isProgressModalOpen}
                onClose={() => setIsProgressModalOpen(false)}
            />

            {/* Result Modal */}
            <ResultModal
                isOpen={isResultModalOpen}
                onClose={() => setIsResultModalOpen(false)}
                correct={result.correct}
                wrong={result.wrong}
            />
        </DefaultLayout>
    );
}
