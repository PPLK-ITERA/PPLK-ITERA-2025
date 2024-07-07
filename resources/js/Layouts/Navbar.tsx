"use client";
import React from "react";
import { Button } from "@/Components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "@inertiajs/react";

const Navbar = ({ user }) => {
    // const navigate = useNavigate();
    // const { pathname } = useLocation();

    return (
        <nav className="w-full bg-gradient-to-r from-candlelight-800 to-candlelight-950 px-2 py-2">
            <div className="flex w-full items-center justify-between">
                <h2 className={`text-center`}>Welcome, {user.name}</h2>
                <h2
                    className={`mb-1 hidden flex-grow text-center md:mb-0 md:block`}
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
