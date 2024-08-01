import React from "react";

interface NavButtonProps {
    className?: string;
    label: string;
    active: boolean;
    onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({
    label,
    onClick,
    className,
    active,
}) => {
    return (
        <button
            className={`${className} ${active ? "text-white" : "text-yellow-500"} relative overflow-hidden bg-transparent  shadow-yellow-500/50 hover:text-white hover:shadow-xl transition group`}
            onClick={onClick}
        >
            <div className="relative p-1 py-2 md:p-3 z-10">
                <p className="w-full text-nowrap">{label}</p>
            </div>
            <div
                className={`${active ? "translate-y-0" : "translate-y-[105%]"} absolute top-0 left-0 w-full h-full bg-yellow-500/90 group-hover:-translate-y-0 transition duration-500`}
            ></div>
        </button>
    );
};

export default NavButton;
