"use server";

import { fetchWrapper } from "@/lib/fetchWrapper";
import { Auction, PagedResult } from "@/types";

const getData = async (query: string): Promise<PagedResult<Auction>> => {
    return fetchWrapper.get(`search${query}`);
}

const updateAuctionTest = async (): Promise<{status: number, message: string}> => {
    const data = {
        mileage: Math.floor(Math.random() * 10000) + 1
    };

    return fetchWrapper.put(`auctions/afbee524-5972-4075-8800-7d1f9d7b0a0c`, data);

}

export { getData, updateAuctionTest };