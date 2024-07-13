import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import clsx from "clsx";
import { motion } from "framer-motion";

import { useState } from "react";
import React from "react";

import { Head } from "@inertiajs/react";

import { ArrowRight } from "lucide-react";

import { Button } from "@/Components/dashboard/ui/button";
import { useToast } from "@/Components/dashboard/ui/use-toast";
import { QuizSkeleton } from "@/Components/fragments/QuizSkeleton";
import { Progress } from "@/Components/ui/progress";

export default function Dashboard({ auth }) {
    const { toast } = useToast();

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswerId, setSelectedAnswerId] = useState(null);

    const onAnswerClick = (answerId) => {
        setSelectedAnswerId(answerId);
    };

    function submitAnswer() {
        toast({
            variant: "default",
            title: "hehehe",
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`mx-auto flex h-full max-w-3xl flex-col place-content-center items-center justify-center gap-4 overflow-y-auto px-8 text-start`}
            >
                <h1>test</h1>
            </motion.div>
        </AuthenticatedLayout>
    );
}
