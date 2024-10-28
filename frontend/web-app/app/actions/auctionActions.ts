"use server";

import { Auction, PagedResult } from "@/types";

const getData = async (pageNumber: number = 1): Promise<PagedResult<Auction>> => {
    const res = await fetch(`http://localhost:6001/search?pageNumber=${pageNumber}&pageSize=4`);

    if (!res.ok){
        throw new Error('Failed to fetch data');
    }
    else {
        return res.json();
    }
}

export { getData };