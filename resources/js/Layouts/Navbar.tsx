"use client";

import { useLocation, useNavigate } from "react-router-dom";

import React from "react";

import { Link } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";

const Navbar = ({ user }) => {
  // const navigate = useNavigate();
  // const { pathname } = useLocation();

  return (
    <nav className="bg-gradient-to-r from-candlelight-800 to-candlelight-950 w-full px-2 py-2">
      <div className="flex items-center justify-between w-full">
        <h2 className={`text-center`}>Welcome, {user.name}</h2>
        <h2 className={`mb-1 hidden flex-grow text-center md:mb-0 md:block`}>
          <Link href={route("dashboard.index")}>
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
