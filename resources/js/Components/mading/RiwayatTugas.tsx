import React from "react";

const TaskHistory = () => {
    const tasks = [
        {
            title: 'Tugas KTI "Artificial Intelligence Era industri"',
            status: "Ditolak",
            note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis sapien enim, ac euismod tortor gravida non.",
        },
        {
            title: 'Tugas KTI "Artificial Intelligence Era industri"',
            status: "Disetujui",
            note: "",
        },
        {
            title: 'Tugas KTI "Artificial Intelligence Era industri"',
            status: "Disetujui",
            note: "",
        },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-2xl max-w-full md:max-w-[1152px] mx-auto mt-24">
            <h2 className="text-[20px] md:text-[25px] font-bold text-black mb-4">
                Riwayat Tugas
            </h2>
            {tasks.map((task, index) => (
                <div key={index} className="mb-6">
                    <div className="md:flex-row md:items-center flex flex-col items-start justify-between">
                        <div className="md:mb-0 mb-2">
                            <h3 className="text-[18px] md:text-[20px] text-moccaccino-950">
                                {task.title}
                            </h3>
                            {task.note && (
                                <div className="p-3 mt-2 bg-gray-100 rounded-lg shadow-inner">
                                    <strong className="block mb-1">
                                        Catatan
                                    </strong>
                                    <p className="text-[14px] md:text-[16px]">
                                        {task.note}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div
                            className={`text-white px-4 py-2 rounded-full ${
                                task.status === "Ditolak"
                                    ? "bg-red-600"
                                    : "bg-green-600"
                            }`}
                        >
                            {task.status}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskHistory;
