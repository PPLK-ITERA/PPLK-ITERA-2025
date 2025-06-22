import {
  IconBallFootball,
  IconBallpen,
  IconBook,
  IconBooks,
  IconBuildingCommunity,
  IconBuildingSkyscraper,
  IconCode,
  IconCrown,
  IconDeviceGamepad2,
  IconInfoCircle,
  IconLayoutDashboard,
  IconMap,
  IconMoodWink,
  IconMusic,
  IconSchool,
  IconShirt,
  IconTie,
  IconUserCircle,
  IconUsers,
  IconUsersGroup,
} from "@tabler/icons-react";

export const NavLinks = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Informasi",
    href: "/Informasi",
  },
  {
    name: "Ketentuan Atribut",
    href: "/ketentuan-atribut",
  },
  {
    name: "Maba",
    href: "/maba",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
];

export const InformasiDropDown = [
  {
    title: "Tentang PPLK",
    href: "/informasi/pplk",
    icon: <IconInfoCircle size={24} color="#fcedd8" />,
  },
  {
    title: "Kenal Maskot PPLK!",
    href: "/informasi/maskot",
    icon: <IconMoodWink size={24} color="#fcedd8" />,
  },
  {
    title: "Fakultas ITERA",
    href: "/informasi/fakultas",
    icon: <IconBuildingSkyscraper size={24} color="#fcedd8" />,
  },
  {
    title: "Prodi & HMPS ITERA",
    href: "/informasi/prodi",
    icon: <IconSchool size={24} color="#fcedd8" />,
  },
  {
    title: "UPA ITERA",
    href: "/informasi/upa",
    icon: <IconBuildingCommunity size={24} color="#fcedd8" />,
  },
  {
    title: "KM ITERA",
    href: "/informasi/km",
    icon: <IconTie size={24} color="#fcedd8" />,
  },
  {
    title: "UKM & Komunitas",
    href: "/informasi/ukm",
    icon: <IconBallFootball size={24} color="#fcedd8" />,
  },
  {
    title: "Divisi PPLK",
    href: "/informasi/pplk#divisi-pplk",
    icon: <IconUsersGroup size={24} color="#fcedd8" />,
  },
  {
    title: "Developer Team",
    href: "/dev-team",
    icon: <IconCode size={24} color="#fcedd8" />,
  },
];

export const MabaDropDown = [
  {
    title: "Ketentuan Atribut",
    href: "/ketentuan-atribut",
    icon: <IconShirt size={24} color="#fcedd8" />,
  },
  {
    title: "Booklet PPLK",
    href: "/booklet",
    icon: <IconBooks size={24} color="#fcedd8" />,
  },
  {
    title: "Materi PPLK",
    href: "/materi",
    icon: <IconBook size={24} color="#fcedd8" />,
  },
  {
    title: "Lagu",
    href: "/lagu",
    icon: <IconMusic size={24} color="#fcedd8" />,
  },
];

export const UserDropdown = [
  {
    title: "Profil Kamu",
    href: route("myprofile"),
    icon: <IconUserCircle size={24} color="#fcedd8" />,
  },
  {
    title: "Dashboard",
    href: route("dashboard.index"),
    icon: <IconLayoutDashboard size={24} color="#fcedd8" />,
  },
  {
    title: "Relasi & Jaringan",
    href: "/relasi",
    icon: <IconUsers size={24} color="#fcedd8" />,
  },
  {
    title: "Mading",
    href: "/mading",
    icon: <IconMap size={24} color="#fcedd8" />,
  },
  {
    title: "Kuis Asesmen",
    href: "/asesmen",
    icon: <IconBallpen size={24} color="#fcedd8" />,
  },
  {
    title: "Game",
    href: "/game",
    icon: <IconDeviceGamepad2 size={24} color="#fcedd8" />,
  },
  {
    title: "Scoreboard",
    href: "/scoreboard",
    icon: <IconCrown size={24} color="#fcedd8" />,
  },
];
