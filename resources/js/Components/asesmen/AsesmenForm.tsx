"use client";

import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Toast } from "../ui/toast";
import { Toaster } from "../ui/toaster";
import clsx from "clsx";
import { motion } from "framer-motion";

import React, { useEffect, useState } from "react";

import { router } from "@inertiajs/react";

import { ArrowRight, Flag } from "lucide-react";

import { QuizSkeleton } from "@/Components/fragments/QuizSkeleton";
import { Button } from "@/Components/ui/button";
import { Progress } from "@/Components/ui/progress";
import { useToast } from "@/Components/ui/use-toast";

import { Question } from "@/lib/types/Question";

export default function AsesmenForm() {
  const { toast } = useToast();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [sendingAnswer, setSendingAnswer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const [csrfToken, setCsrfToken] = useState("");

  async function mGetQuestions() {
    setLoading(true);
    const response = await fetch(route("asesmen.question"))
      .then((response) => response.json())
      .then((json) => {
        setQuestions(json.data.questions);
        setLoading(false);
      });
  }

  useEffect(() => {
    // Fungsi untuk mendapatkan token CSRF dari API
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch(route("csrf"));
        const data = await response.json();
        setCsrfToken(data.csrfToken);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };

    fetchCsrfToken();
    // if (!token) {
    //     router.push("/");
    //     return;
    // }
    mGetQuestions();
  }, []);

  const onAnswerClick = (answerId: number) => {
    setSelectedAnswerId(answerId);
  };

  async function submitAnswer() {
    if (selectedAnswerId === null) return;
    try {
      setSendingAnswer(true);
      await fetch(
        route("asesmen.answer", {
          question_id: questions[currentQuestion].id,
          answer_id: selectedAnswerId,
        }),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": csrfToken,
          },
        },
      );
      setSendingAnswer(false);
      if (currentQuestion === questions.length - 1) {
        router.get(route("asesmen.result"));
        return;
      }
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswerId(null);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Gagal mengirim jawaban, mohon coba lagi hehe",
      });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`mt-20 mx-auto px-8 flex flex-col items-center justify-center h-full max-w-3xl text-start place-content-center text-white gap-4 overflow-y-auto font-montserrat`}
    >
      {loading ? (
        <QuizSkeleton className="w-full" />
      ) : (
        <div className="relative flex flex-col w-full gap-4">
          <span className="md:text-xl text-moccaccino-950 w-full text-sm font-semibold">
            Pertanyaan {currentQuestion + 1}/{questions.length}
          </span>

          <Progress value={((currentQuestion + 1) * 100) / questions.length} />

          <ScrollArea className="md:min-h-48 bg-jaffa-950/25 backdrop-blur-md w-full h-40 p-4 overflow-y-auto rounded-lg shadow-inner">
            <h2 className="max-md:text-sm text-start font-semibold text-black">
              {questions[currentQuestion].teks_pertanyaan}
            </h2>

            <ScrollBar orientation="vertical" className="text-jaffa-950" />
          </ScrollArea>

          <ul className="md:mt-8 flex flex-col w-full gap-2 mt-2">
            {questions[currentQuestion].answers.map((ans) => (
              <li key={ans.id}>
                <Button
                  disabled={sendingAnswer}
                  onClick={() => onAnswerClick(ans.id)}
                  className={clsx(
                    {
                      " text-candlelight-800 hover:bg-jaffa-100 ring-1 ring-black/5 ":
                        ans.id !== selectedAnswerId,
                      " bg-gradient-to-r from-candlelight-800 to-candlelight-950":
                        ans.id === selectedAnswerId,
                    },
                    "bg-white transition duration-400 w-full h-full font-medium text-wrap py-2 max-md:text-[12px]",
                  )}
                >
                  {ans.teks_jawaban}
                </Button>
              </li>
            ))}
          </ul>

          <Button
            onClick={submitAnswer}
            disabled={selectedAnswerId === null || sendingAnswer}
            className="bg-jaffa-900 md:my-8 hover:bg-jaffa-900/80 w-full mb-4"
          >
            {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
            {currentQuestion < questions.length - 1 ? (
              <ArrowRight className="ml-2" />
            ) : (
              <svg
                className="ml-2"
                width="11"
                height="13"
                viewBox="0 0 11 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 1.62503C0.500012 1.54192 0.516601 1.45964 0.548796 1.38302C0.580991 1.30639 0.628146 1.23696 0.6875 1.17878C1.36865 0.511053 2.27866 0.127987 3.23229 0.107551C4.18592 0.0871153 5.11149 0.430846 5.82063 1.06878L6.04 1.27378C6.49589 1.67322 7.08138 1.89342 7.6875 1.89342C8.29363 1.89342 8.87911 1.67322 9.335 1.27378L9.49063 1.1319C9.87188 0.83003 10.445 1.07128 10.4969 1.5544L10.5 1.62503V7.25003C10.5 7.33314 10.4834 7.41542 10.4512 7.49204C10.419 7.56867 10.3719 7.6381 10.3125 7.69628C9.63135 8.36401 8.72134 8.74707 7.76772 8.76751C6.81409 8.78794 5.88851 8.44421 5.17938 7.80628L4.96 7.60128C4.51846 7.21441 3.95486 6.99526 3.36795 6.98223C2.78104 6.9692 2.20827 7.16313 1.75 7.53003V11.625C1.74982 11.7843 1.68883 11.9376 1.57947 12.0534C1.47011 12.1692 1.32065 12.2389 1.16163 12.2483C1.0026 12.2576 0.846013 12.2059 0.723855 12.1036C0.601697 12.0014 0.52319 11.8563 0.504375 11.6982L0.5 11.625V1.62503Z"
                  fill="white"
                />
              </svg>
            )}
          </Button>
        </div>
      )}
      <Toaster />
    </motion.div>
  );
}
