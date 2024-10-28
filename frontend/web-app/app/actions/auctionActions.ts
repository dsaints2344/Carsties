"use server";

import { Auction, PagedResult } from "@/types";

const getData = async (pageNumber: number, pageSize: number): Promise<PagedResult<Auction>> => {
    const res = await fetch(`http://localhost:6001/search?pageNumber=${pageNumber}&pageSize=${pageSize}`);

    if (!res.ok){
        throw new Error('Failed to fetch data');
    }
    else {
        return res.json();
    }
}

export { getData };