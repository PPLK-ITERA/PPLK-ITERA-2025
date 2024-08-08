import { User } from "../types/User";
import { UserSearchResponse } from "../types/UserSearchResponse";
import { UserSortResponse } from "../types/UserSortResponse";

export async function fetchTopFollowers(): Promise<User[]> {
    const response = await fetch(`${route("relasi.index.topfollowers")}`);
    const json = await response.json();
    return json;
}

export async function fetchSort(
    order_by: string,
    direction: string,
    page: number = 1,
): Promise<UserSortResponse> {
    const response = await fetch(
        `${route("relasi.index.sort")}?order_by=${order_by}&direction=${direction}&page=${page}`,
    );
    return await response.json();
}

export async function fetchSearch(
    search: string,
    page: number,
): Promise<UserSearchResponse> {
    const response = await fetch(
        `${route("relasi.index.search")}?search=${search}&page=${page}`,
    );
    const json = await response.json();
    //console.log(json)
    return json;
}
