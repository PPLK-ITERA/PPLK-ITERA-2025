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
            className={`${className} ${active ? "text-white" : "text-cyan-primary"} relative overflow-hidden bg-transparent  shadow-cyan-secondary/50 hover:text-white hover:shadow-xl transition group`}
            onClick={onClick}
        >
            <div className="md:p-3 relative z-10 p-1 py-2">
                <p className="text-nowrap w-full">{label}</p>
            </div>
            <div
                className={`${active ? "translate-y-0" : "translate-y-[105%]"} absolute top-0 left-0 w-full h-full bg-cyan-primary/90 group-hover:-translate-y-0 transition duration-500`}
            ></div>
        </button>
    );
};

export default NavButton;
