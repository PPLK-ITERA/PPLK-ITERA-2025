import React, { useState, useEffect, useRef } from 'react';
import DefaultLayout from "@/Layouts/DefaultLayout";
import bg_1 from "!assets/tesla/bg-1.png";
import axios from 'axios';
import { Head } from '@inertiajs/react';

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
    const [isPetunjukModalOpen, setIsPetunjukModalOpen] = useState(false);
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
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
    const [history, setHistory] = useState<{
        time: number;
        percentage: number;
        answered: number;
        total: number;
        date: string;
        score?: number; // Tambah score di tipe history
    }[]>([]);

    const answerInputRef = useRef<HTMLInputElement>(null);

    const bg = bg_1;

    // Tambah state untuk menyimpan initial clues/grid
    const [initialClues, setInitialClues] = useState<{ across: Clue[]; down: Clue[] }>({ across: [], down: [] });
    const [initialGrid, setInitialGrid] = useState<Cell[][]>([]);

    // Fetch clues/grid sekali saat mount, simpan ke initialClues/initialGrid
    useEffect(() => {
        const fetchInitial = async () => {
            setLoading(true);
            try {
                const res = await axios.get('/api/admin/tesla/');
                const arr = res.data.data;
                let maxRow = 0;
                let maxCol = 0;
                arr.forEach((c: any) => {
                    if (c.tipe === 'mendatar') {
                        maxRow = Math.max(maxRow, c.start_row);
                        maxCol = Math.max(maxCol, c.start_col + (c.jawaban?.length || 0) - 1);
                    } else if (c.tipe === 'menurun') {
                        maxRow = Math.max(maxRow, c.start_row + (c.jawaban?.length || 0) - 1);
                        maxCol = Math.max(maxCol, c.start_col);
                    }
                });
                const size = Math.max(maxRow + 1, maxCol + 1, 10);
                const across = arr.filter((c: any) => c.tipe === 'mendatar').map((c: any) => ({
                    number: c.nomor,
                    clue: c.pertanyaan,
                    answer: c.jawaban,
                    direction: 'across',
                    startRow: c.start_row,
                    startCol: c.start_col,
                    isAnswered: false,
                }));
                const down = arr.filter((c: any) => c.tipe === 'menurun').map((c: any) => ({
                    number: c.nomor,
                    clue: c.pertanyaan,
                    answer: c.jawaban,
                    direction: 'down',
                    startRow: c.start_row,
                    startCol: c.start_col,
                    isAnswered: false,
                }));
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
                setInitialClues({ across, down });
                setInitialGrid(newGrid);
            } catch {
                setInitialClues({ across: [], down: [] });
                setInitialGrid([]);
            }
            setLoading(false);
        };
        fetchInitial();
    }, []);

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

    // Ubah fetchClues agar menerima data dari initialClues/initialGrid
    const fetchClues = () => {
        setLoading(true);
        setClues({
            across: initialClues.across.map(c => ({ ...c, isAnswered: false })),
            down: initialClues.down.map(c => ({ ...c, isAnswered: false })),
        });
        setGrid(initialGrid.map(row => row.map(cell => ({
            ...cell,
            letter: '',
            isSelected: false,
            isHighlighted: false,
            isCorrect: false,
            isWrong: false,
        }))));
        setLoading(false);
    };

    // Fungsi untuk menghapus semua jawaban salah dari board (termasuk valuenya)
    const clearAllWrongAnswers = () => {
        const newGrid = grid.map(row => row.map(cell => {
            if (cell.isWrong) {
                return {
                    ...cell,
                    letter: '' // Hapus value huruf yang salah
                };
            }
            return cell;
        }));
        setGrid(newGrid);
        setTempWrongAnswers({});
    };

    const handleQuestionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedQuestion(value);
        setUserAnswer('');

        // Hapus semua jawaban salah dari board saat pindah soal
        clearAllWrongAnswers();

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

    // Highlight clue cells, tapi jangan reset isCorrect (biar hijau tetap muncul jika benar)
    const highlightClueCells = (clue: Clue) => {
        // Reset semua isHighlighted, isSelected, dan isWrong
        const newGrid = grid.map(rowArr =>
            rowArr.map(cell => ({
                ...cell,
                isHighlighted: false,
                isSelected: false,
                isWrong: false, // <-- reset merah setiap pindah soal
                // JANGAN reset isCorrect di sini!
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
            const newSize = Math.max(
                selectedClue.direction === 'across'
                    ? selectedClue.startCol + selectedClue.answer.length
                    : size,
                selectedClue.direction === 'down'
                    ? selectedClue.startRow + selectedClue.answer.length
                    : size,
                size + 1
            );
            const emptyCell = () => ({
                letter: '',
                isBlack: false,
                isSelected: false,
                isHighlighted: false,
                isCorrect: false,
                isWrong: false,
            });
            while (newGrid.length < newSize) {
                newGrid.push(Array(newSize).fill(null).map(emptyCell));
            }
            for (let i = 0; i < newGrid.length; i++) {
                while (newGrid[i].length < newSize) {
                    newGrid[i].push(emptyCell());
                }
            }
            size = newSize;
        }

        // Reset previous isWrong for this clue, but do NOT reset isCorrect or letter if already correct
        if (selectedClue.direction === 'across') {
            for (let i = 0; i < selectedClue.answer.length; i++) {
                const col = selectedClue.startCol + i;
                if (col >= newGrid[selectedClue.startRow].length) continue;
                if (!newGrid[selectedClue.startRow][col].isCorrect) {
                    newGrid[selectedClue.startRow][col].isWrong = false;
                    if (hasil === 'salah') {
                        newGrid[selectedClue.startRow][col].letter = '';
                    }
                }
            }
        } else {
            for (let i = 0; i < selectedClue.answer.length; i++) {
                const row = selectedClue.startRow + i;
                if (row >= newGrid.length) continue;
                if (!newGrid[row][selectedClue.startCol].isCorrect) {
                    newGrid[row][selectedClue.startCol].isWrong = false;
                    if (hasil === 'salah') {
                        newGrid[row][selectedClue.startCol].letter = '';
                    }
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
                    // Salah: hanya kasih background merah jika belum hijau, letter tetap kosong
                    if (!newGrid[selectedClue.startRow][col].isCorrect) {
                        newGrid[selectedClue.startRow][col].letter = '';
                        newGrid[selectedClue.startRow][col].isWrong = true;
                    }
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
                    if (!newGrid[row][selectedClue.startCol].isCorrect) {
                        newGrid[row][selectedClue.startCol].letter = '';
                        newGrid[row][selectedClue.startCol].isWrong = true;
                    }
                }
            }
        }

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

        setTempWrongAnswers(prev => {
            const key = selectedQuestion;
            if (hasil === 'salah') {
                return { ...prev, [key]: '' }; // Tidak perlu simpan jawaban salah
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

                // Reset previous states: hanya reset isWrong, jangan reset isCorrect
                for (let i = 0; i < answer.length; i++) {
                    const row = clue.direction === 'across' ? clue.startRow : clue.startRow + i;
                    const col = clue.direction === 'across' ? clue.startCol + i : clue.startCol;

                    if (row >= newGrid.length || col >= newGrid[0].length) continue;
                    if (!newGrid[row][col].isCorrect) {
                        newGrid[row][col].isWrong = false;
                    }
                }

                // Check new answer
                for (let i = 0; i < answer.length; i++) {
                    const row = clue.direction === 'across' ? clue.startRow : clue.startRow + i;
                    const col = clue.direction === 'across' ? clue.startCol + i : clue.startCol;

                    if (row >= newGrid.length || col >= newGrid[0].length) continue;

                    if (newGrid[row][col].letter !== answer[i]) {
                        if (!newGrid[row][col].isCorrect) {
                            newGrid[row][col].isWrong = true;
                        }
                        isCorrect = false;
                    } else {
                        newGrid[row][col].isCorrect = true;
                        newGrid[row][col].isWrong = false;
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

    // Reset puzzle dan hapus semua progress (jawaban, benar/salah, dsb)
    const resetPuzzle = () => {
        setClues({
            across: initialClues.across.map(c => ({ ...c, isAnswered: false })),
            down: initialClues.down.map(c => ({ ...c, isAnswered: false })),
        });
        setGrid(initialGrid.map(row => row.map(cell => ({
            ...cell,
            letter: '',
            isSelected: false,
            isHighlighted: false,
            isCorrect: false,
            isWrong: false,
        }))));
        setSelectedCell(null);
        setSelectedClue(null);
        setSelectedQuestion('');
        setUserAnswer('');
        setTime(0);
        setIsPlaying(true);
        setStarted(true);
        setTempWrongAnswers({});
        setResult({ correct: 0, wrong: 0 });
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
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 pt-[15vh]">
                <div className="bg-white w-full max-w-md mx-auto rounded-lg overflow-hidden">
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

    // Helper: get first clue (across > down)
    const getFirstClue = () => {
        if (initialClues.across.length > 0) return { clue: initialClues.across[0], key: `across-${initialClues.across[0].number}` };
        if (initialClues.down.length > 0) return { clue: initialClues.down[0], key: `down-${initialClues.down[0].number}` };
        return null;
    };

    // Fungsi untuk simpan progres ke localStorage
    const handleSaveProgress = async () => {
        const newEntry = {
            time,
            percentage: progress.percentage,
            answered: progress.answered,
            total: progress.total,
            date: new Date().toLocaleString(),
            score: progress.answered * 10,
        };
        // Ambil history dari localStorage
        let historyArr: typeof history = [];
        try {
            const raw = localStorage.getItem('tesla_progress_history');
            if (raw) {
                historyArr = JSON.parse(raw);
            }
        } catch { }
        // Tambahkan entry baru di depan, max 6
        historyArr = [newEntry, ...historyArr].slice(0, 6);
        localStorage.setItem('tesla_progress_history', JSON.stringify(historyArr));
        setHistory(historyArr);

        setStarted(false);
        setTime(0);
        setIsPlaying(true);
        setSelectedCell(null);
        setSelectedClue(null);
        setSelectedQuestion('');
        setUserAnswer('');
        setGrid([]);
        setClues({ across: [], down: [] });
        setTempWrongAnswers({});
    };

    // Fungsi untuk ambil riwayat progres dari localStorage
    const fetchProgresHistory = async () => {
        let historyArr: typeof history = [];
        try {
            const raw = localStorage.getItem('tesla_progress_history');
            if (raw) {
                historyArr = JSON.parse(raw);
            }
        } catch { }
        setHistory(historyArr);
    };

    const boardMaxWidth = 640 + 420 + 32; // 640px (dropdown max) + 420px (progress max) + gap

    // Hapus state dan ref terkait popup custom soal
    // const [isQuestionPopupOpen, setIsQuestionPopup] = useState(false);
    // const questionButtonRef = useRef<HTMLButtonElement>(null);


    const handleQuestionSelectPopup = (clue: Clue) => {
        setSelectedQuestion(`${clue.direction}-${clue.number}`);
        setSelectedClue(clue);
        setUserAnswer('');
        highlightClueCells(clue);
        setTimeout(() => {
            if (answerInputRef.current) answerInputRef.current.focus();
        }, 0);
    };

    // Helper: get next clue (urut, skip yang sudah dijawab)
    const getNextClue = (currentClue: Clue | null): Clue | null => {
        if (!currentClue) return null;
        const allClues = [...clues.across, ...clues.down];
        const sorted = allClues.sort((a, b) => a.number - b.number);
        const idx = sorted.findIndex(c => c.direction === currentClue.direction && c.number === currentClue.number);
        // Cari berikutnya yang belum dijawab
        for (let i = idx + 1; i < sorted.length; i++) {
            if (!sorted[i].isAnswered) return sorted[i];
        }
        // Kalau sudah di akhir, cari clue pertama yang belum dijawab
        for (let i = 0; i < sorted.length; i++) {
            if (!sorted[i].isAnswered) return sorted[i];
        }
        // Kalau semua sudah dijawab, balik ke pertama
        return sorted[0] || null;
    };

    const [dayLabel, setDayLabel] = useState<string>('DAY ?');

    // Fetch day label from API
    useEffect(() => {
        axios.get('/api/day/')
            .then(res => {
                // Cek berbagai kemungkinan struktur respons
                if (typeof res.data === 'string') {
                    setDayLabel(res.data);
                } else if (res.data?.day) {
                    setDayLabel(res.data.day);
                } else if (res.data?.data?.change_day) {
                    setDayLabel(res.data.data.change_day);
                }
            })
            .catch(() => setDayLabel('DAY 1'));
    }, []);

    // Tambahkan deklarasi berikut sebelum return
    const [isQuestionDropdownOpen, setIsQuestionDropdownOpen] = useState(false);
    const questionDropdownRef = useRef<HTMLDivElement>(null);

    // Tutup dropdown jika klik di luar
    useEffect(() => {
        if (!isQuestionDropdownOpen) return;
        const handler = (e: MouseEvent) => {
            if (
                questionDropdownRef.current &&
                !questionDropdownRef.current.contains(e.target as Node)
            ) {
                setIsQuestionDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [isQuestionDropdownOpen]);

    return (
        <>
            <Head title="Tesla" />
            <DefaultLayout>
                {/* Tambahkan style global untuk mencegah scroll horizontal */}
                <style>{`
                html, body {
                    overflow-x: hidden !important;
                    width: 100% !important;
                    max-width: 100vw !important;
                    position: relative;
                }
                #app, #root {
                    width: 100% !important;
                    max-width: 100vw !important;
                    overflow-x: hidden !important;
                }
            `}</style>
                {/* Fixed background image and overlay */}
                <div
                    className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat overflow-x-hidden"
                    style={{
                        backgroundImage: `url(${bg})`,
                        width: "100vw",
                        maxWidth: "100vw",
                        left: 0,
                        right: 0,
                    }}
                >
                    <div className="absolute inset-0 bg-[#BF400099] mix-blend-multiply pointer-events-none"></div>
                </div>
                {/* Content */}
                <div
                    className="relative z-10 my-4 md:my-40 md:mx-auto w-full overflow-x-hidden"
                    style={{ maxWidth: 1092, marginLeft: "auto", marginRight: "auto" }}
                >
                    {/* Header & Progress Row */}
                    <div
                        className="bg-[#b84c19] w-full text-white p-3 md:p-4 md:mt-0 mt-32 rounded-lg mb-4 relative"
                        style={{
                            maxWidth: 1092,
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                            {/* Stats cards - Fixed position on mobile */}
                            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 w-full">
                                {/* Stats Row */}
                                <div
                                    className="flex flex-row flex-wrap items-center justify-between w-full md:w-auto md:justify-start md:space-x-8 gap-y-2"
                                    style={{
                                        position: 'relative',
                                        top: 0,
                                        left: 0
                                    }}
                                >
                                    <div className="flex flex-col items-center justify-center w-24">
                                        <div className="text-2xl md:text-3xl font-bold leading-tight">{dayLabel}</div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-24">
                                        <div className="text-2xl md:text-3xl font-bold leading-tight">{progress.answered * 10}</div>
                                        <div className="text-xs md:text-sm">Skor</div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-24">
                                        <div className="text-2xl md:text-3xl font-bold leading-tight">{formatTime(time)}</div>
                                        <div className="text-xs md:text-sm">Waktu</div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-24">
                                        <div className="text-2xl md:text-3xl font-bold leading-tight">{progress.answered}/{progress.total}</div>
                                        <div className="text-xs md:text-sm">Pertanyaan</div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-24">
                                        <div className="text-2xl md:text-3xl font-bold leading-tight">{progress.percentage}%</div>
                                        <div className="text-xs md:text-sm">Selesai</div>
                                    </div>
                                </div>
                                {/* Button Row */}
                                <div className="flex flex-row flex-wrap items-center justify-center md:justify-end gap-2 md:space-x-5 mt-4 md:mt-0 w-full md:w-auto">
                                    <button
                                        onClick={started ? checkAllAnswers : undefined}
                                        className={`bg-white shadow-lg text-orange-600 px-4 py-2 rounded text-xs md:text-sm font-medium transition-all duration-150
                                        ${started ? 'hover:scale-105 hover:bg-orange-100' : 'opacity-50 cursor-not-allowed'}
                                    `}
                                        style={{ minWidth: 110, minHeight: 40 }}
                                        disabled={!started}
                                    >
                                        Cek Jawaban
                                    </button>
                                    <button
                                        onClick={() => setIsPetunjukModalOpen(true)}
                                        className="bg-white shadow-lg text-orange-600 px-4 py-2 rounded text-xs md:text-sm font-medium transition-all duration-150 hover:scale-105 hover:bg-orange-100"
                                        style={{ minWidth: 110, minHeight: 40 }}
                                    >
                                        Petunjuk
                                    </button>
                                    <button
                                        onClick={() => {
                                            fetchProgresHistory();
                                            setIsHistoryModalOpen(true);
                                        }}
                                        className="bg-white shadow-lg text-orange-600 px-4 py-2 rounded text-xs md:text-sm font-medium transition-all duration-150 hover:scale-105 hover:bg-orange-100"
                                        style={{ minWidth: 110, minHeight: 40 }}
                                    >
                                        Riwayat
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Game Area */}
                    <div className="flex flex-col md:flex-row gap-4 w-full max-w-full overflow-x-hidden">
                        {/* Game Area */}
                        <div className="flex-1 order-2 md:order-1 mx-auto max-w-5xl md:w-full w-full overflow-x-hidden">
                            <div className="p-2 md:p-4 rounded-lg mb-4 w-full max-w-full overflow-x-hidden">
                                {/* Show both Question Selection and Board together when started */}
                                {started && (
                                    <div
                                        className="w-full max-w-full overflow-x-hidden"
                                        style={{
                                            maxWidth: 1092,
                                            marginLeft: "auto",
                                            marginRight: "auto"
                                        }}
                                    >
                                        {/* Soal Dropdown - Responsive */}
                                        <div
                                            className="mb-4 bg-white p-4 rounded-lg shadow w-full"
                                            style={{ maxWidth: '100%' }}
                                        >
                                            <div className="flex flex-col md:flex-row gap-4">
                                                <div className="flex-1 min-w-[220px] w-full" style={{ maxWidth: '100%', position: 'relative' }}>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Pilih Soal</label>
                                                    {/* Custom Dropdown */}
                                                    <div className="relative" ref={questionDropdownRef}>
                                                        <button
                                                            type="button"
                                                            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-left focus:outline-none focus:ring-2 focus:ring-orange-500 flex justify-between items-center"
                                                            onClick={() => setIsQuestionDropdownOpen(v => !v)}
                                                        >
                                                            <span>
                                                                {selectedQuestion
                                                                    ? (() => {
                                                                        const [direction, numberStr] = selectedQuestion.split('-');
                                                                        const number = parseInt(numberStr);
                                                                        const clueList = direction === 'across' ? clues.across : clues.down;
                                                                        const clue = clueList.find(c => c.number === number);
                                                                        return clue
                                                                            ? `${clue.number}. ${clue.clue} (${clue.answer.length} huruf)`
                                                                            : '-- Pilih Soal --';
                                                                    })()
                                                                    : '-- Pilih Soal --'}
                                                            </span>
                                                            <svg className={`w-4 h-4 ml-2 transition-transform ${isQuestionDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        </button>
                                                        {isQuestionDropdownOpen && (
                                                            <div
                                                                className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-30 max-h-72 overflow-y-auto animate-dropdown"
                                                                style={{
                                                                    minWidth: 220,
                                                                    boxShadow: '0 8px 24px 0 rgba(191,64,0,0.10)'
                                                                }}
                                                            >
                                                                <div className="py-1">
                                                                    <div className="px-3 py-1 text-xs font-semibold text-orange-700 bg-orange-50 rounded-t">Mendatar</div>
                                                                    {clues.across.length === 0 && (
                                                                        <div className="px-4 py-2 text-gray-400 text-sm">Tidak ada soal mendatar</div>
                                                                    )}
                                                                    {clues.across.map(clue => (
                                                                        <button
                                                                            key={`across-${clue.number}`}
                                                                            className={`w-full text-left px-4 py-2 text-sm hover:bg-orange-100 transition rounded ${selectedQuestion === `across-${clue.number}` ? 'bg-orange-50 font-semibold text-orange-700' : ''
                                                                                }`}
                                                                            onClick={() => {
                                                                                setSelectedQuestion(`across-${clue.number}`);
                                                                                setSelectedClue(clue);
                                                                                setInputDirection('across');
                                                                                setUserAnswer('');
                                                                                clearAllWrongAnswers();
                                                                                highlightClueCells(clue);
                                                                                setIsQuestionDropdownOpen(false);
                                                                                setTimeout(() => {
                                                                                    if (answerInputRef.current) answerInputRef.current.focus();
                                                                                }, 0);
                                                                            }}
                                                                        >
                                                                            {clue.number}. {clue.clue} <span className="text-gray-400">({clue.answer.length} huruf)</span>
                                                                        </button>
                                                                    ))}
                                                                    <div className="px-3 py-1 text-xs font-semibold text-orange-700 bg-orange-50 mt-2 rounded-t">Menurun</div>
                                                                    {clues.down.length === 0 && (
                                                                        <div className="px-4 py-2 text-gray-400 text-sm">Tidak ada soal menurun</div>
                                                                    )}
                                                                    {clues.down.map(clue => (
                                                                        <button
                                                                            key={`down-${clue.number}`}
                                                                            className={`w-full text-left px-4 py-2 text-sm hover:bg-orange-100 transition rounded ${selectedQuestion === `down-${clue.number}` ? 'bg-orange-50 font-semibold text-orange-700' : ''
                                                                                }`}
                                                                            onClick={() => {
                                                                                setSelectedQuestion(`down-${clue.number}`);
                                                                                setSelectedClue(clue);
                                                                                setInputDirection('down');
                                                                                setUserAnswer('');
                                                                                clearAllWrongAnswers();
                                                                                highlightClueCells(clue);
                                                                                setIsQuestionDropdownOpen(false);
                                                                                setTimeout(() => {
                                                                                    if (answerInputRef.current) answerInputRef.current.focus();
                                                                                }, 0);
                                                                            }}
                                                                        >
                                                                            {clue.number}. {clue.clue} <span className="text-gray-400">({clue.answer.length} huruf)</span>
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                        {/* Animasi dropdown */}
                                                        <style>{`
                                                        @keyframes dropdown {
                                                            0% { opacity: 0; transform: translateY(-10px);}
                                                            100% { opacity: 1; transform: translateY(0);}
                                                        }
                                                        .animate-dropdown {
                                                            animation: dropdown 0.18s cubic-bezier(.4,0,.2,1);
                                                        }
                                                    `}</style>
                                                    </div>
                                                </div>
                                                {selectedQuestion && selectedClue && (
                                                    <div className="flex-1 min-w-[180px] w-full">
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
                                                                onKeyDown={async e => {
                                                                    if (
                                                                        e.key === 'Enter' &&
                                                                        userAnswer.length === selectedClue.answer.length
                                                                    ) {
                                                                        // Submit dan cek hasil
                                                                        let hasil = 'salah';
                                                                        try {
                                                                            const res = await axios.post(`/api/admin/tesla/${selectedClue.number}`, { jawaban: userAnswer });
                                                                            hasil = res.data.hasil;
                                                                        } catch {
                                                                            hasil = 'salah';
                                                                        }
                                                                        await handleAnswerSubmit();
                                                                        if (hasil === 'benar') {
                                                                            const nextClue = getNextClue(selectedClue);
                                                                            if (nextClue) {
                                                                                setSelectedQuestion(`${nextClue.direction}-${nextClue.number}`);
                                                                                setSelectedClue(nextClue);
                                                                                setUserAnswer('');
                                                                                highlightClueCells(nextClue);
                                                                                setTimeout(() => {
                                                                                    if (answerInputRef.current) answerInputRef.current.focus();
                                                                                }, 0);
                                                                            }
                                                                        } else {
                                                                            // Pastikan tetap di nomor currentnya
                                                                            setSelectedQuestion(`${selectedClue.direction}-${selectedClue.number}`);
                                                                            setSelectedClue(selectedClue);
                                                                            setTimeout(() => {
                                                                                if (answerInputRef.current) answerInputRef.current.focus();
                                                                            }, 0);
                                                                        }
                                                                    }
                                                                }}
                                                            />
                                                            <button
                                                                onClick={async () => {
                                                                    // Submit dan cek hasil
                                                                    let hasil = 'salah';
                                                                    try {
                                                                        const res = await axios.post(`/api/admin/tesla/${selectedClue.number}`, { jawaban: userAnswer });
                                                                        hasil = res.data.hasil;
                                                                    } catch {
                                                                        hasil = 'salah';
                                                                    }
                                                                    await handleAnswerSubmit();
                                                                    if (hasil === 'benar') {
                                                                        const nextClue = getNextClue(selectedClue);
                                                                        if (nextClue) {
                                                                            setSelectedQuestion(`${nextClue.direction}-${nextClue.number}`);
                                                                            setSelectedClue(nextClue);
                                                                            setUserAnswer('');
                                                                            highlightClueCells(nextClue);
                                                                            setTimeout(() => {
                                                                                if (answerInputRef.current) answerInputRef.current.focus();
                                                                            }, 0);
                                                                        }
                                                                    } else {
                                                                        // Pastikan tetap di nomor currentnya
                                                                        setSelectedQuestion(`${selectedClue.direction}-${selectedClue.number}`);
                                                                        setSelectedClue(selectedClue);
                                                                        setTimeout(() => {
                                                                            if (answerInputRef.current) answerInputRef.current.focus();
                                                                        }, 0);
                                                                    }
                                                                }}
                                                                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-all duration-150"
                                                            >
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {/* Board */}
                                        {!loading && (
                                            <div
                                                className="bg-white rounded-lg shadow w-full max-w-full overflow-x-auto"
                                                style={{
                                                    border: '1px solid #e5e7eb',
                                                    display: 'block',
                                                    minWidth: 0,
                                                    width: '100%',
                                                    padding: 0,
                                                    maxWidth: '100%',
                                                    WebkitOverflowScrolling: 'touch',
                                                    overflowX: 'auto',
                                                }}
                                                // HAPUS kode auto-scroll ke tengah:
                                                // ref={el => {
                                                //     if (el && grid.length > 0) {
                                                //         el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
                                                //     }
                                                // }}
                                                // Drag-to-scroll handlers
                                                onMouseDown={e => {
                                                    const el = e.currentTarget;
                                                    let startX = e.pageX - el.offsetLeft;
                                                    let scrollLeft = el.scrollLeft;
                                                    const onMouseMove = (ev: MouseEvent) => {
                                                        const x = ev.pageX - el.offsetLeft;
                                                        el.scrollLeft = scrollLeft - (x - startX);
                                                    };
                                                    const onMouseUp = () => {
                                                        window.removeEventListener('mousemove', onMouseMove);
                                                        window.removeEventListener('mouseup', onMouseUp);
                                                    };
                                                    window.addEventListener('mousemove', onMouseMove);
                                                    window.addEventListener('mouseup', onMouseUp);
                                                }}
                                                onTouchStart={e => {
                                                    const el = e.currentTarget;
                                                    const touch = e.touches[0];
                                                    let startX = touch.pageX - el.offsetLeft;
                                                    let scrollLeft = el.scrollLeft;
                                                    const onTouchMove = (ev: TouchEvent) => {
                                                        const t = ev.touches[0];
                                                        const x = t.pageX - el.offsetLeft;
                                                        el.scrollLeft = scrollLeft - (x - startX);
                                                    };
                                                    const onTouchEnd = () => {
                                                        window.removeEventListener('touchmove', onTouchMove);
                                                        window.removeEventListener('touchend', onTouchEnd);
                                                    };
                                                    window.addEventListener('touchmove', onTouchMove);
                                                    window.addEventListener('touchend', onTouchEnd);
                                                }}
                                            >
                                                <div
                                                    className="grid gap-0"
                                                    style={{
                                                        gridTemplateColumns:
                                                            grid[0]?.length
                                                                ? `repeat(${grid[0].length}, 1fr)`
                                                                : undefined,
                                                        width: "100%",
                                                        maxWidth: "100%",
                                                    }}
                                                >
                                                    {(grid.length > 0 ? grid : []).map((row, rowIndex) => (
                                                        <React.Fragment key={rowIndex}>
                                                            {(row ? row : []).map((cell, colIndex) => (
                                                                <div
                                                                    key={`${rowIndex}-${colIndex}`}
                                                                    className={`
                                                                    border border-gray-400
                                                                    flex items-center justify-center relative
                                                                    text-xs md:text-base
                                                                    transition-all
                                                                    ${cell?.isBlack ? 'bg-black' : ''}
                                                                    ${cell?.isCorrect ? 'bg-green-200' : cell?.isWrong ? 'bg-red-200' : cell?.isSelected ? 'bg-yellow-200' : cell?.isHighlighted ? 'bg-yellow-100' : 'bg-gray-50'}
                                                                    ${cell?.letter ? 'font-bold' : ''}
                                                                    select-none
                                                                `}
                                                                    style={{
                                                                        width: "100%",
                                                                        aspectRatio: "1 / 1",
                                                                        minWidth: 32,
                                                                        minHeight: 32,
                                                                        maxWidth: "100%",
                                                                        maxHeight: "100%",
                                                                        padding: 0,
                                                                        boxSizing: 'border-box',
                                                                        cursor: cell?.number ? 'pointer' : 'default',
                                                                        borderRadius: 4,
                                                                        borderWidth: 1,
                                                                        borderColor: cell?.isCorrect
                                                                            ? '#22c55e'
                                                                            : cell?.isWrong
                                                                                ? '#ef4444'
                                                                                : '#a3a3a3',
                                                                        backgroundColor: cell?.isBlack ? '#000' :
                                                                            cell?.isCorrect ? '#bbf7d0' :
                                                                                cell?.isWrong ? '#fecaca' :
                                                                                    cell?.isSelected ? '#fef08a' :
                                                                                        cell?.isHighlighted ? '#fef9c3' :
                                                                                            '#f9fafb',
                                                                    }}
                                                                >
                                                                    {cell?.number && (
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
                                                                        className={`${cell?.isSelected ? 'text-black font-bold' : 'text-gray-800'}`}
                                                                        style={{
                                                                            zIndex: 1,
                                                                            width: '100%',
                                                                            textAlign: 'center',
                                                                            fontSize: '1rem',
                                                                            lineHeight: '1.5rem',
                                                                            position: 'relative',
                                                                        }}
                                                                    >
                                                                        {cell?.letter || ''}
                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                                {/* Hide scrollbar for Chrome/Safari/Opera */}
                                                <style>
                                                    {`
                                                .grid::-webkit-scrollbar {
                                                    display: none !important;
                                                    width: 0 !important;
                                                    height: 0 !important;
                                                    background: transparent !important;
                                                }
                                                /* Hide scrollbar for the board container */
                                                .bg-white.rounded-lg.shadow::-webkit-scrollbar {
                                                    display: none !important;
                                                    width: 0 !important;
                                                    height: 0 !important;
                                                    background: transparent !important;
                                                }
                                                .bg-white.rounded-lg.shadow {
                                                    -ms-overflow-style: none;  /* IE and Edge */
                                                    scrollbar-width: none;     /* Firefox */
                                                }
                                                `}
                                                </style>
                                            </div>
                                        )}
                                        {/* Saat loading, board tidak tampil sama sekali (tanpa padding) */}
                                    </div>
                                )}
                            </div>
                            {/* Bottom Buttons */}
                            {/* --- Start: Always inline, wrap if needed --- */}
                            <div className="flex flex-row flex-wrap gap-2 justify-center items-center">
                                {!started ? (
                                    <button
                                        onClick={() => {
                                            if (loading) return;
                                            setClues({
                                                across: initialClues.across.map(c => ({ ...c, isAnswered: false })),
                                                down: initialClues.down.map(c => ({ ...c, isAnswered: false })),
                                            });
                                            setGrid(initialGrid.map(row => row.map(cell => ({
                                                ...cell,
                                                letter: '',
                                                isSelected: false,
                                                isHighlighted: false,
                                                isCorrect: false,
                                                isWrong: false,
                                            }))));
                                            setStarted(true);
                                            setTime(0);
                                            setIsPlaying(true);
                                            setSelectedCell(null);
                                            setSelectedClue(null);
                                            setUserAnswer('');
                                            // Pilih soal pertama otomatis
                                            const first = getFirstClue();
                                            if (first) {
                                                setSelectedQuestion(first.key);
                                                setSelectedClue(first.clue);
                                                setTimeout(() => {
                                                    highlightClueCells(first.clue);
                                                }, 0);
                                            } else {
                                                setSelectedQuestion('');
                                                setSelectedClue(null);
                                            }
                                        }}
                                        className={`bg-gradient-to-r from-orange-500 to-[#b84c19] text-white font-bold text-lg rounded-xl shadow-lg px-10 py-3 transition-all duration-200 hover:scale-105 hover:from-orange-600 hover:to-[#a03c15] focus:outline-none${loading ? ' opacity-50 cursor-not-allowed' : ''}`}
                                        style={{
                                            minWidth: 180,
                                            minHeight: 56,
                                            letterSpacing: 1,
                                            margin: '0 auto',
                                            display: 'block'
                                        }}
                                        disabled={loading}
                                    >
                                        Mulai
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            resetPuzzle();
                                            // Otomatis pindah ke nomor 1 (soal pertama)
                                            const first = getFirstClue();
                                            if (first) {
                                                setSelectedQuestion(first.key);
                                                setSelectedClue(first.clue);
                                                setTimeout(() => {
                                                    highlightClueCells(first.clue);
                                                    if (answerInputRef.current) answerInputRef.current.focus();
                                                }, 0);
                                            } else {
                                                setSelectedQuestion('');
                                                setSelectedClue(null);
                                            }
                                        }}
                                        className="bg-white shadow-lg text-orange-600 px-4 py-2 rounded text-xs md:text-sm font-medium transition-all duration-150 hover:scale-105 hover:bg-orange-100"
                                        style={{
                                            minWidth: 110,
                                            minHeight: 40,
                                            transition: 'transform 0.15s',
                                            fontWeight: 500,
                                            boxShadow: '0 2px 8px 0 rgba(191,64,0,0.08)'
                                        }}
                                    >
                                        Mulai Dari Awal
                                    </button>
                                )}
                                {started && (
                                    <>
                                        <button
                                            onClick={togglePause}
                                            className="bg-white shadow-lg text-orange-600 px-4 py-2 rounded text-xs md:text-sm font-medium transition-all duration-150 hover:scale-105 hover:bg-orange-100"
                                            style={{
                                                minWidth: 110,
                                                minHeight: 40,
                                                transition: 'transform 0.15s',
                                                fontWeight: 500,
                                                boxShadow: '0 2px 8px 0 rgba(191,64,0,0.08)'
                                            }}
                                        >
                                            {isPlaying ? 'Pause' : 'Lanjutkan'}
                                        </button>
                                        <button
                                            onClick={handleSaveProgress}
                                            className="bg-white shadow-lg text-orange-600 px-4 py-2 rounded text-xs md:text-sm font-medium transition-all duration-150 hover:scale-105 hover:bg-orange-100"
                                            style={{
                                                minWidth: 110,
                                                minHeight: 40,
                                                transition: 'transform 0.15s',
                                                fontWeight: 500,
                                                boxShadow: '0 2px 8px 0 rgba(191,64,0,0.08)'
                                            }}
                                        >
                                            Simpan Progres
                                        </button>
                                    </>
                                )}
                            </div>
                            {/* --- End: Always inline, wrap if needed --- */}
                        </div>
                    </div>
                    {/* Progress Bar - Desktop Only */}
                </div>


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

                {/* Petunjuk Bermain Modal */}
                {isPetunjukModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 pt-[15vh]">
                        <div className="bg-white w-full max-w-md mx-auto rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between p-4 bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white">
                                <h3 className="font-medium">Petunjuk Bermain</h3>
                                <button
                                    onClick={() => setIsPetunjukModalOpen(false)}
                                    className="text-white text-xl font-bold"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="p-6">
                                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
                                    <li>Pilih soal dari dropdown atau daftar soal</li>
                                    <li>Masukkan jawaban pada kolom input</li>
                                    <li>Tekan Submit untuk mengisi jawaban</li>
                                    <li>Jawaban benar akan berwarna hijau</li>
                                    <li>Jawaban salah akan berwarna merah</li>
                                    <li>Tekan "Check Jawaban" untuk memeriksa semua jawaban</li>
                                    <li>Tekan "Simpan Progres" untuk menyimpan progres permainan</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                )}

                {/* History Progress Modal */}
                {isHistoryModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 pt-[15vh]">
                        <div className="bg-white w-full max-w-md mx-auto rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between p-4 bg-gradient-to-b from-[#BF4000] to-[#591E00] text-white">
                                <h3 className="font-medium">Riwayat Progres</h3>
                                <button
                                    onClick={() => setIsHistoryModalOpen(false)}
                                    className="text-white text-xl font-bold"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="p-6">
                                {history.length > 0 ? (
                                    <div
                                        className="overflow-y-auto"
                                        style={{
                                            maxHeight: 320,
                                            overflowX: 'auto'
                                        }}
                                    >
                                        <table className="min-w-full text-sm text-gray-700 table-auto" style={{ width: '100%' }}>
                                            <thead>
                                                <tr>
                                                    <th className="px-2 py-1 text-left whitespace-nowrap">Tanggal</th>
                                                    <th className="px-2 py-1 text-left whitespace-nowrap">Waktu</th>
                                                    <th className="px-2 py-1 text-left whitespace-nowrap">Selesai</th>
                                                    <th className="px-2 py-1 text-left whitespace-nowrap">Jawaban</th>
                                                    <th className="px-2 py-1 text-left whitespace-nowrap">Skor</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {history.map((h, idx) => (
                                                    <tr key={idx} className="border-t">
                                                        <td className="px-2 py-1 break-words" data-label="Tanggal">{h.date}</td>
                                                        <td className="px-2 py-1 break-words" data-label="Waktu">{formatTime(h.time)}</td>
                                                        <td className="px-2 py-1 break-words" data-label="Selesai">{h.percentage}%</td>
                                                        <td className="px-2 py-1 break-words" data-label="Jawaban">{h.answered}/{h.total}</td>
                                                        <td className="px-2 py-1 break-words" data-label="Skor">{typeof h.score === 'number' ? h.score : (h.answered * 10)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <style>{`
            @media (max-width: 640px) {
                table, thead, tbody, th, td, tr {
                    display: block;
                    width: 100%;
                }
                thead {
                    display: none;
                }
                tbody tr {
                    margin-bottom: 12px;
                    border: none;
                    background: #fff;
                    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
                    border-radius: 8px;
                    padding: 8px 0;
                }
                td {
                    padding: 8px 12px;
                    border: none;
                    position: relative;
                    min-width: 0;
                    word-break: break-word;
                }
                td[data-label]:before {
                    content: attr(data-label) ": ";
                    font-weight: 600;
                    color: #b84c19;
                    display: inline;
                    margin-right: 4px;
                    font-size: 0.95em;
                }
            }
        `}</style>
                                    </div>
                                ) : (
                                    <div className="text-center text-gray-500">Belum ada history progress.</div>
                                )}
                            </div>                    </div>
                    </div>
                )}
            </DefaultLayout>
        </>
    );
}
