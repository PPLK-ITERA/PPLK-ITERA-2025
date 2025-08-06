import bariq from "!assets/dev-team/albariq.png";
import ebentua from "!assets/dev-team/ebentua.png";
import ginda from "!assets/dev-team/ginda.png";
import garis from "!assets/dev-team/garis.png";
import anisah_saidah from "!assets/dev-team/anisah_saidah.png";
import ahmad from "!assets/dev-team/ahmad.png";
import alfharidz from "!assets/dev-team/alfharidz.png";
import sekar from "!assets/dev-team/sekar.png";
import choirunnisa from "!assets/dev-team/choirunnisa.png";
import edu from "!assets/dev-team/edu.png";
import anisah from "!assets/dev-team/anisah_octa.png";
import rifat from "!assets/dev-team/rifat.png";
import jeremi from "!assets/dev-team/jeremi.png";
import reyhan from "!assets/dev-team/reyhan.png";
import abel from "!assets/dev-team/abel.png";
import aditya from "!assets/dev-team/aditya.png";
import refi from "!assets/dev-team/refi.png";
import syahid from "!assets/dev-team/syahid.png";
import leon from "!assets/dev-team/leon.png";
import stevanus from "!assets/dev-team/stevanus.png";
import feby from "!assets/dev-team/feby.png";
import nesya from "!assets/dev-team/nesya.png";
import gian from "!assets/dev-team/gian.png";
import royhan from "!assets/dev-team/royhan.png";
import daniel from "!assets/dev-team/daniel.png";
import ahmat from "!assets/dev-team/ahmat.png";
import yollanda from "!assets/dev-team/yollanda.png";

// Fallback photo function
const getPhoto = (photo) => {
  return photo || stevanus;
};

export const devTeam = {
  kadiv: [
    {
      name: "Stevanus Cahya Anggara",
      instagram: "scxzxz",
      role: "Kepala Divisi Implementasi Teknologi",
      quote: "Diantara Ngoding dan debugging aku lebih memilih scroll fesnuk",
      photo: getPhoto(stevanus),
    },
  ],
  sekdiv: [
    {
      name: "Anisah Octa Rohila",
      instagram: "anisahoctar",
      role: "Sekretaris Bendahara Divisi Implementasi Teknologi",
      quote: "Gatau",
      photo: getPhoto(anisah),
    },
  ],
  vvd: [
    {
      name: "Garis Rayya Rabbani",
      instagram: "gars_rayya",
      role: "Kepala Sub-Divisi VVD",
      quote: "Hidup kalo ga PDD, PMPD ya VVD",
      photo: getPhoto(garis),
    },
    {
      name: "Muhammad Royhan Alfitra",
      instagram: "mroyhaf",
      role: "Staff VVD",
      quote: "Lebih baik menjadi Cupu daripada menjadi Cepu",
      photo: getPhoto(royhan),
    },
    {
      name: "Al Bariq Auliya Priyadi",
      instagram: "bariq.priy",
      role: "Staff VVD",
      quote: "وَالشَمْسُ لَوْ وَقَفَتْ فِي الفُلْكِ دَايِمَةً,  لَمَلَّهَا النَاسُ مِنْ عُجْمٍ وَمِنْ عَرَبِ",
      photo: getPhoto(bariq),
    },
    {
      name: "Gian Ivander",
      instagram: "gian.ivdr",
      role: "Staff VVD",
      quote: "Not as simple as you see",
      photo: getPhoto(gian),
    },
    {
      name: "Choirunnisa Syawaldina",
      instagram: "choirunnisasyawaldina",
      role: "Staff VVD",
      quote: "every bug is a lesson, every solution a triumph",
      photo: getPhoto(choirunnisa),
    },
    {
      name: "Refi Ikhsanti",
      instagram: "7refisa",
      role: "Staff VVD",
      quote: "The most important thing is to enjoy your life. To be happy. It's all that matters. -Audrey Hepburn",
      photo: getPhoto(refi),
    },
  ],
  frontend: [
    {
      name: "Edu Juanda Pratama",
      instagram: "eduj2164",
      role: "Kepala Sub-Divisi Front-End",
      quote: "Pucuk Ubi Pucuk Kangkung, Front-End Divisi Tulang Punggung🥵",
      photo: getPhoto(edu),
    },
    {
      name: "Syahid Amanullah",
      instagram: "syhd_amnlh",
      role: "Staff Front-End",
      quote: "Pastikan saat orang lain masih sibuk bermimpi, kamu sudah mulai mengejar mimpi",
      photo: getPhoto(syahid),
    },
    {
      name: "Ginda Fajar Riadi Marpaung",
      instagram: "ginda_mrp",
      role: "Staff Front-End",
      quote: "Just Do It",
      photo: getPhoto(ginda),
    },
    {
      name: "Christoper Leon Saputra",
      instagram: "c.leonsra",
      role: "Staff Front-End",
      quote: "aku nak tidur😴",
      photo: getPhoto(leon),
    },
    {
      name: "Ebentua Philipus Limbong",
      instagram: "ebenlimbong__",
      role: "Staff Front-End",
      quote: "everything is nothing",
      photo: getPhoto(ebentua),
    },
    {
      name: "Ahmat Prayoga Sembiring",
      instagram: "ahmat_sembiring11",
      role: "Staff Front-End",
      quote: "Make it happen",
      photo: getPhoto(ahmat),
    },
  ],
  backend: [
    {
      name: "Reyhan Capri Moraga",
      instagram: "reannn22",
      role: "Kepala Sub-Divisi Back-End",
      quote: "don't chase stars, chase people",
      photo: getPhoto(reyhan),
    },
    {
      name: "Ahmad Ali Mukti",
      instagram: "ahmadali.m1",
      role: "Staff Back-End",
      quote: "Pengen tidur",
      photo: getPhoto(ahmad),
    },
    {
      name: "M. Rif'at Syauki",
      instagram: "rifat_syauki05",
      role: "Staff Back-End",
      quote: "ModuleNotFoundError: No module named 'love' in 'his' Reason: love() is undefined when it's one-sided.",
      photo: getPhoto(rifat),
    },
    {
      name: "Daniel Calvin Simanjuntak",
      instagram: "dniel.clv",
      role: "Staff Back-End",
      quote: "Aku mau lulus :3 !",
      photo: getPhoto(daniel),
    },
    {
      name: "Aditya Kristian Novalino",
      instagram: "scxzxz",
      role: "Staff Back-End",
      quote: "Serve to be better.",
      photo: getPhoto(aditya),
    },
  ],
  cr: [
    {
      name: "Feby Angelina",
      instagram: "wriitenbyangel",
      role: "Kepala Sub-Divisi CR",
      quote: "thanks chatgpt and friends",
      photo: getPhoto(feby),
    },
    {
      name: "Anisah Saidah",
      instagram: "anshsdh_",
      role: "Staff Content Research",
      quote: "Gak ada hal yang gak mungkin di dunia ini Asikk",
      photo: getPhoto(anisah_saidah),
    },
    {
      name: "Yollanda Agustina",
      instagram: "yollanda_agustina16",
      role: "Staff Content Research",
      quote: "Pengalaman ada karena dibuat",
      photo: getPhoto(yollanda),
    },
    {
      name: "Sekar Dini Widya Putri",
      instagram: "sekardnwp",
      role: "Staff Content Research",
      quote: "to live for the hope of it all",
      photo: getPhoto(sekar),
    },
    {
      name: "Jeremi Pison Efrat Sianturi",
      instagram: "jeremipisonefrat",
      role: "Staff Content Research",
      quote: "lorem ipsum dolor sit amet",
      photo: getPhoto(jeremi),
    },
    {
      name: "Al Fharidz Fajar Ramadhansyah",
      instagram: "fharidzsyah",
      role: "Staff Content Research",
      quote: "hai aku gue 👋",
      photo: getPhoto(alfharidz),
    },
    {
      name: "Abel Fortino",
      instagram: "abelfortino",
      role: "Staff Content Research",
      quote: "Aku cinta IMTEK",
      photo: getPhoto(abel),
    },
    {
      name: "Nesya Salsabila",
      instagram: "nesyyasalsa",
      role: "Staff Content Research",
      quote: "tetap cengar cengir walaupun tugas terus mengalir",
      photo: getPhoto(nesya),
    },
  ],
};
