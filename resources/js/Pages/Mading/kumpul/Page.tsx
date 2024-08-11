import React from "react";

import { Link } from "@inertiajs/react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

import clockImage from "!assets/clock.png";

// Make sure to use the correct path to your image

const TaskSubmission = () => {
  const tasks = [
    {
      id: 1,
      title: "Tugas 1",
      deadline: "10 Agustus 2024, 11:59 PM",
      isGroup: false,
    },
    {
      id: 2,
      title: "Tugas 2",
      deadline: "10 Agustus 2024, 11:59 PM",
      isGroup: false,
    },
    {
      id: 3,
      title: "Tugas Kelompok",
      deadline: "10 Agustus 2024, 11:59 PM",
      isGroup: true,
    },
  ];

  return (
    <div>
      <Navbar isSolid={true} isFixed={true} />
      <div className="bg-pattern-white pt-28 flex flex-col items-center min-h-screen pb-20">
        <div className="flex flex-col items-center">
          <Link
            className="text-jaffa-800 font-montserrat self-start mb-4 ml-8 text-lg font-bold"
            href={route("mading")}
          >
            &lt; Kembali
          </Link>
          <h2 className="font-avigea text-[36px] text-jaffa-800 text-center">
            Pengumpulan Tugas Day-1
          </h2>
          <p className="text-moccaccino-950 mt-2 mb-8 text-center">
            Pastikan Anda mengumpulkan tugas Anda dengan cermat dan teliti untuk
            memastikan semuanya sesuai dengan ketentuan yang diberikan.
          </p>
          {/* <img src={clockImage} alt="Clock" className="w-16 mb-8" /> */}
        </div>
        <div className="w-full max-w-4xl px-8">
          {tasks.map((task) => (
            <div key={task.id} className="mb-8">
              <h3 className="text-moccaccino-950 mb-2 text-lg font-bold">
                {task.title}
              </h3>
              {task.isGroup && (
                <p className="mb-2 text-sm text-gray-500">
                  hanya dikumpulkan oleh perwakilan kelompok
                </p>
              )}
              <input
                type="text"
                placeholder="Link Google Drive"
                className="text-jaffa-950 border-jaffa-600 bg-jaffa-100 w-full px-4 py-2 mb-4 border rounded-md"
              />
              <div className="flex items-center justify-center w-full h-48 mb-2 bg-gray-200 border border-black rounded-md">
                <p className="text-gray-500">Drive Thumbnail Preview</p>
              </div>
              <p className="text-sm font-bold text-red-600">
                Deadline: {task.deadline}
              </p>
            </div>
          ))}
          <button className="w-full bg-gradient-to-b from-[#B9822F] to-[#A6680C] text-white py-2 rounded-lg shadow-xl">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TaskSubmission;
