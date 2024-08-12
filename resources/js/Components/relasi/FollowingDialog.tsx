import React from "react";

import { Link } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import { useToast } from "@/Components/ui/use-toast";

import {
    fetchFollower,
    fetchFollowing,
    followUserJson,
} from "@/lib/data/relasi";
import { User } from "@/lib/types/User";
import { UserFollowingResponse } from "@/lib/types/UserFollowingResponse";

const FollowingDialog = ({
    className,
    children,
    selfId,
    userId,
    following,
    onUnfollow,
}: {
    className?: string;
    children?: React.ReactNode;
    selfId: number;
    userId: number;
    following: boolean;
    onUnfollow?: () => void;
}) => {
    const { toast } = useToast();
    const isSelf = selfId === userId;
    const [response, setResponse] =
        React.useState<UserFollowingResponse | null>(null);
    const [loading, setLoading] = React.useState(true);

    async function getFollowing() {
        setResponse(await fetchFollowing(userId));
        console.log(response);
        setLoading(false);
    }

    async function getFollower() {
        setResponse(await fetchFollower(userId));
        console.log(response);

        setLoading(false);
    }

    async function unfollow(id: number) {
        let r = await followUserJson(id);
        toast({
            description: r?.message,
            variant: r?.status == 200 ? "default" : "destructive",
        });
        response?.data.splice(
            response?.data.findIndex((u) => u.id === selfId),
            1,
        );
        onUnfollow?.();
    }

    async function fetch() {
        if (following) {
            getFollowing();
        } else {
            getFollower();
        }
    }

    return (
        <Dialog>
            <DialogTrigger className={`${className}`} onClick={fetch}>
                {children}
            </DialogTrigger>
            <DialogContent className="text-center">
                <h2 className="text-lg font-semibold">
                    {following ? "Daftar Mengikuti" : "Daftar Pengikut"}
                </h2>

                <div className="h-[1px] w-full bg-gray-400 my-1"></div>

                {loading && <p className="text-gray-500">Loading...</p>}
                {response && response.status == 404 && !isSelf && (
                    <p className="text-gray-500">
                        Untuk Melihat, silahkan follow pengguna ini
                    </p>
                )}

                {response?.status == 200 && response.data.length == 0 && (
                    <p className="text-gray-500">
                        {following
                            ? "Pengguna belum mengikuti siapapun"
                            : "Pengguna belum memiliki pengikut"}
                    </p>
                )}

                {response?.status == 200 && response.data.length > 0 && (
                    <ScrollArea className="max-h-56 overflow-auto py-1">
                        <ul className="flex flex-col gap-4">
                            {response?.data.map((user: Partial<User>) => (
                                <li className="flex flex-col">
                                    <div className="flex place-content-between">
                                        <div className="flex gap-4 place-content-center place-items-center">
                                            <img
                                                src={
                                                    user.photo_profile_url ??
                                                    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                                                }
                                                alt={user.name}
                                                className="w-10 h-10 object-cover rounded-full"
                                            />
                                            <Link
                                                className="font-bold hover:underline"
                                                href={route(
                                                    "relasi.profil",
                                                    user.id,
                                                )}
                                            >
                                                {user.name}
                                            </Link>
                                        </div>
                                        <div>
                                            {isSelf && (
                                                <Button
                                                    className="bg-white text-black border border-black/40"
                                                    onClick={() =>
                                                        unfollow(user.id!)
                                                    }
                                                >
                                                    Unfollow
                                                </Button>
                                            )}
                                        </div>
                                    </div>

                                    {/* <div className="h-[1px] bg-gray-400 w-full my-2"></div> */}
                                </li>
                            ))}
                        </ul>

                        <ScrollBar orientation="vertical" />
                    </ScrollArea>
                )}
            </DialogContent>

        </Dialog>
    );
};

export default FollowingDialog;
