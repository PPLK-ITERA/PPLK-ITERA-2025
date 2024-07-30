import { User } from "../types/User";
import { UserSearchResponse } from "../types/UserSearchResponse";

export async function fetchTopFollowers(): Promise<User[]> {
    const response = await fetch(`${route("relasi.index.topfollowers")}`);
    const json = await response.json();
    return json;
}

export async function fetchSort(
    order_by: string,
    direction: string,
): Promise<Partial<User>[]> {
    const response = await fetch(
        `${route("relasi.index.sort")}?order_by=${order_by}&direction=${direction}`,
    );
    const json = await response.json();
    return json;
}

export async function fetchSearch(search: string): Promise<UserSearchResponse> {
    const response = await fetch(
        `${route("relasi.index.search")}?search=${search}`,
    );
    const json = await response.json();
    return json;
}
