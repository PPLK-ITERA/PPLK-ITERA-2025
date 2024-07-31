import React from "react";

interface NavButtonProps {
    className?: string;
    label: string;
    onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, onClick, className }) => {
    return (
        <button
            className={`${className} relative overflow-hidden bg-transparent text-yellow-500 shadow-yellow-500/50 hover:text-white hover:shadow-xl transition group`}
            onClick={onClick}
        >
            <div className="relative p-3 z-10">
                <p className="w-full text-nowrap">{label}</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-yellow-500/90 translate-y-[105%] group-hover:-translate-y-0 transition duration-500"></div>
        </button>
    );
};

export default NavButton;
