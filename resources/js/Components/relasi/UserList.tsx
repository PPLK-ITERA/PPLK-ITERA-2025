import ProfileCard from "./ProfileCard";
import { User } from "@/lib/types/User";

import React from "react";

type Props = { users: User[]; className?: string };

export default function UserList({ users, className }: Props) {
    return (
        <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8 ${className}`}
        >
            {users.slice(0, 10).map((user, index) => (
                <ProfileCard user={user} />
            ))}
        </div>
    );
}
