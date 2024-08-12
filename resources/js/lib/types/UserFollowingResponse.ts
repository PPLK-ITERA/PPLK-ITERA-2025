import { User } from "./User";

export interface UserFollowingResponse {
    status: number;
    message: string;
    data: Partial<User>[];
}
