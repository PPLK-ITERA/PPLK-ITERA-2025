import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ArrowRight } from 'lucide-react';

export default function InfoSection() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "Apa itu PPLK?",
      answer: "Program Pengenalan Lingkungan Kampus atau biasa disebut dengan singkatan PPLK, adalah kegiatan yang rutin diadakan setiap tahun oleh perguruan tinggi untuk membantu mahasiswa baru beradaptasi dengan lingkungan kampus, mengenal fasilitas-fasilitas yang ada, serta memahami aturan dan budaya kampus untuk dapat membantu Mahasiswa Baru beradaptasi dengan lingkungan kampus ITERA.  PPLK juga merupakan sebuah Program Pengenalan Lingkungan Kampus (PPLK) bagi mahasiswa baru, yang diselenggarakan melalui Keluarga Mahasiswa ITERA (KM-ITERA)"
    },
    {
      question: "Apa tujuan dari diadakannya PPLK?",
      answer: "Program Pengenalan Lingkungan Kampus (PPLK) ini bertujuan untuk memperkenalkan mahasiswa baru terhadap lingkungan kampus, mulai dari kegiatan akademik, fasilitas dan lingkungan kampus, hingga kegiatan kemahasiswaan."
    },
    {
      question: "Bagaimana cara mengedit informasi media sosial di profil saya?",
      answer: "Kamu cukup mengisi kolom LinkedIn dan Instagram pada bagian “Edit Sosial Media”, lalu tekan tombol 'Simpan' di bawahnya agar perubahan tersimpan."
    },
    {
      question: "Apa fungsi dari QR Code di halaman profil?",
      answer: "QR Code digunakan untuk presensi kegiatan PPLK. Kamu bisa menunjukkannya saat diminta panitia atau mengunduhnya dengan menekan tombol 'Download QR Code'."
    },
    {
      question: "Apa bentuk dukungan fakultas terhadap mahasiswa yang ingin meneliti dan membuat inovasi baru?",
      answer: "Fakultas menyediakan berbagai dukungan seperti akses ke laboratorium, pendampingan dari dosen pembimbing, serta pendanaan atau fasilitasi program untuk mahasiswa yang ingin mengembangkan riset atau menciptakan inovasi di bidangnya."
    }
  ];

  const navigationItems = [
    { label: "Visit FAQ", icon: ArrowRight, href: "/faq" },
    { label: "Visit Dokumentasi", icon: ArrowRight, href: "/dokumentasi" },
    { label: "Visit Ketentuan Atribut", icon: ArrowRight, href: "/ketentuan-atribut" }
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Title and Navigation */}
          <div className="lg:col-span-1">
            <h1 className="text-4xl md:text-5xl font-bold font-greek text-[#581D00] mb-8 tracking-wide">
              FREQUENTLY
              <br />
              ASKED
              <br />
              QUESTIONS
            </h1>
            
            {/* Blue accent line */}
            <div className="w-16 h-1 bg-blue-300 mb-8"></div>
            
            {/* Navigation Buttons */}
            <div className="space-y-4">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="w-full bg-[#FFDAD6] hover:bg-orange-300 transition-colors duration-200 p-4 rounded-lg flex items-center justify-between group"
                >
                  <span className="text-gray-800 font-medium">{item.label}</span>
                  <item.icon className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Section - FAQ Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className={`w-full p-4 md:p-6 text-left flex items-center justify-between transition-colors duration-200 ${
                      index === 0 
                        ? 'bg-[#da5b1c] text-white hover:bg-amber-900' 
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                  >
                    <span className="font-medium text-sm md:text-base pr-4">
                      {item.question}
                    </span>
                    {openItems[index] ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems[index] && (
                    <div className="p-4 md:p-6 bg-white animate-in slide-in-from-top-2 duration-200">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}