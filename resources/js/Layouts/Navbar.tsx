"use client";
import React from "react";
import { Button } from "@/Components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "@inertiajs/react";

const Navbar = ({ user }) => {
    // const navigate = useNavigate();
    // const { pathname } = useLocation();

    return (
        <nav className="bg-gradient-to-r from-candlelight-800 to-candlelight-950 w-full px-2 py-2">
            <div className="flex items-center justify-between w-full">
                <h2 className={` text-center `}>Welcome, {user.name}</h2>
                <h2
                    className={`hidden md:block  text-center flex-grow mb-1 md:mb-0`}
                >
                    <Link href={route("dashboard")}>
                        Pillar of Personality PPLK 2024
                    </Link>
                </h2>
                <Link href={route("logout")} method="post" as="button">
                    Logout
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
