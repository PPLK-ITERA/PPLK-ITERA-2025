import React from "react";

export default function Panduan() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-20 lg:flex-row">
            <div className="flex w-full flex-col items-center justify-center text-left lg:w-1/2 lg:items-start">
                <h2 className="bg-gradient-to-t from-[#A6680C] to-[#B9822F] bg-clip-text font-avigea text-4xl text-transparent">
                    Panduan
                </h2>

                <p className="mt-5 max-w-[70%] text-center font-montserrat text-2xl font-normal lg:text-start">
                    Panduan PPLK berfungsi untuk menyajikan informasi terbaru
                    seputar PPLK ITERA khusus untuk teman-teman Mahasiswa Baru.
                    Jangan sampai ketinggalan informasi terbaru ya!
                </p>
            </div>

            <div className="mt-10 flex w-full flex-wrap justify-center gap-5 lg:mt-0 lg:w-1/2 lg:justify-start">
                <div className="flex h-[280px] w-[280px] flex-col items-center justify-center rounded-[24px] bg-jaffa-400 shadow-2xl">
                    <div className="rounded-full bg-gradient-to-r from-jaffa-700 to-jaffa-800 p-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="#ffffff"
                            className="icon icon-tabler icons-tabler-filled icon-tabler-shirt"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14.883 3.007l.095 -.007l.112 .004l.113 .017l.113 .03l6 2a1 1 0 0 1 .677 .833l.007 .116v5a1 1 0 0 1 -.883 .993l-.117 .007h-2v7a2 2 0 0 1 -1.85 1.995l-.15 .005h-10a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-5a1 1 0 0 1 .576 -.906l.108 -.043l6 -2a1 1 0 0 1 1.316 .949a2 2 0 0 0 3.995 .15l.009 -.24l.017 -.113l.037 -.134l.044 -.103l.05 -.092l.068 -.093l.069 -.08c.056 -.054 .113 -.1 .175 -.14l.096 -.053l.103 -.044l.108 -.032l.112 -.02z" />
                        </svg>
                    </div>
                    <p className="mt-2 font-avigea text-4xl">Atribut</p>
                </div>

                <div className="flex h-[280px] w-[280px] flex-col items-center justify-center rounded-[24px] bg-gradient-to-r from-jaffa-700 to-jaffa-800 shadow-2xl">
                    <div className="rounded-full bg-jaffa-400 p-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="#ffffff"
                            stroke="#000000"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-book-2"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
                            <path d="M19 16h-12a2 2 0 0 0 -2 2" />
                            <path d="M9 8h6" />
                        </svg>
                    </div>
                    <p className="mt-2 font-avigea text-4xl text-white">
                        Booklet
                    </p>
                </div>

                <div className="flex h-[280px] w-[280px] flex-col items-center rounded-[24px] bg-gradient-to-r from-jaffa-700 to-jaffa-800 py-14 shadow-2xl">
                    <div className="rounded-full bg-jaffa-400 p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="#ffffff"
                            stroke="#b54419"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                    </div>
                    <p className="mt-2 text-center font-avigea text-4xl text-white">
                        Relasi & Jaringan
                    </p>
                </div>

                <div className="flex h-[280px] w-[280px] flex-col items-center justify-center rounded-[24px] bg-jaffa-400 shadow-2xl">
                    <div className="rounded-full bg-gradient-to-r from-jaffa-700 to-jaffa-800 p-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-question-mark"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                            <path d="M12 19l0 .01" />
                        </svg>
                    </div>
                    <p className="mt-10 font-avigea text-4xl">FAQ</p>
                </div>
            </div>
        </div>
    );
}
