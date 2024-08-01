import ProfileCard from "./ProfileCard";

import React from "react";

import { User } from "@/lib/types/User";

type Props = { users: Partial<User>[]; className?: string };

export default function UserList({ users, className }: Props) {
    return (
        <div
            className={`flex flex-wrap max-w-7xl mx-auto place-content-center place-items-center gap-4 mt-8 ${className}`}
        >
            {users.slice(0, 10).map((user, index) => (
                <ProfileCard className="h-72 md:h-80 w-36 md:w-48" user={user} />
            ))}
        </div>
    );
}
