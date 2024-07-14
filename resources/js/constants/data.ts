export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: string;
    label?: string;
    description?: string;
    role_id: number[];
}

export const navItems: NavItem[] = [
    // {
    //     title: "Dashboard",
    //     href: "/dashboard",
    //     icon: "dashboard",
    //     label: "Dashboard",
    // },
    {
        title: "User",
        href: "/dashboard/user",
        icon: "user",
        label: "user",
        role_id: [1, 2, 3],
    },
    {
        title: "Employee",
        href: "/dashboard/employee",
        icon: "employee",
        label: "employee",
        role_id: [1, 2],
    },
    {
        title: "Profile",
        href: "/dashboard/profile",
        icon: "profile",
        label: "profile",
        role_id: [1],
    },
    {
        title: "Kanban",
        href: "/dashboard/kanban",
        icon: "kanban",
        label: "kanban",
        role_id: [2],
    },
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: "dashboard",
        label: "dashboard",
        role_id: [2],
    },
    {
        title: "Atur Maba",
        href: "/dashboard/atur-maba",
        icon: "user",
        label: "atur-maba",
        role_id: [2],
    },
    {
        title: "Atur Dapmen",
        href: "/dashboard/atur-dapmen",
        icon: "user",
        label: "atur-dapmen",
        role_id: [2],
    },
    {
        title: "Atur PJ Prodi",
        href: "/dashboard/atur-pjprodi",
        icon: "user",
        label: "atur-pjprodi",
        role_id: [2],
    },
    {
        title: "Atur Korlap",
        href: "/dashboard/atur-korlap",
        icon: "user",
        label: "atur-korlap",
        role_id: [2],
    },
    {
        title: "Absensi Maba",
        href: "/dashboard/absensi-maba",
        icon: "notebook",
        label: "atur-absensi-maba",
        role_id: [2],
    },
    {
        title: "Booklet",
        href: "/dashboard/booklet",
        icon: "book",
        label: "atur-booklet",
        role_id: [2],
    },
    {
        title: "FAQ",
        href: "/dashboard/faq",
        icon: "question",
        label: "atur-faq",
        role_id: [2],
    },
    {
        title: "Mading",
        href: "/dashboard/mading",
        icon: "map",
        label: "atur-mading",
        role_id: [2],
    },
];

export type Employee = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    gender: string;
    date_of_birth: string; // Consider using a proper date type if possible
    street: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
    longitude?: number; // Optional field
    latitude?: number; // Optional field
    job: string;
    profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export type User = {
    id: number;
    name: string;
    company: string;
    role: string;
    verified: boolean;
    status: string;
};
export const users: User[] = [
    {
        id: 1,
        name: "Candice Schiner",
        company: "Dell",
        role: "Frontend Developer",
        verified: false,
        status: "Active",
    },
    {
        id: 2,
        name: "John Doe",
        company: "TechCorp",
        role: "Backend Developer",
        verified: true,
        status: "Active",
    },
    {
        id: 3,
        name: "Alice Johnson",
        company: "WebTech",
        role: "UI Designer",
        verified: true,
        status: "Active",
    },
    {
        id: 4,
        name: "David Smith",
        company: "Innovate Inc.",
        role: "Fullstack Developer",
        verified: false,
        status: "Inactive",
    },
    {
        id: 5,
        name: "Emma Wilson",
        company: "TechGuru",
        role: "Product Manager",
        verified: true,
        status: "Active",
    },
    {
        id: 6,
        name: "James Brown",
        company: "CodeGenius",
        role: "QA Engineer",
        verified: false,
        status: "Active",
    },
    {
        id: 7,
        name: "Laura White",
        company: "SoftWorks",
        role: "UX Designer",
        verified: true,
        status: "Active",
    },
    {
        id: 8,
        name: "Michael Lee",
        company: "DevCraft",
        role: "DevOps Engineer",
        verified: false,
        status: "Active",
    },
    {
        id: 9,
        name: "Olivia Green",
        company: "WebSolutions",
        role: "Frontend Developer",
        verified: true,
        status: "Active",
    },
    {
        id: 10,
        name: "Robert Taylor",
        company: "DataTech",
        role: "Data Analyst",
        verified: false,
        status: "Active",
    },
];
