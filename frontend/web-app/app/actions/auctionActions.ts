"use server";

import { fetchWrapper } from "@/lib/fetchWrapper";
import { Auction, PagedResult } from "@/types";
import { FieldValues } from "react-hook-form";

const getData = async (query: string): Promise<PagedResult<Auction>> => {
    return fetchWrapper.get(`search${query}`);
}

const updateAuctionTest = async (): Promise<{status: number, message: string}> => {
    const data = {
        mileage: Math.floor(Math.random() * 10000) + 1
    };

    return fetchWrapper.put(`auctions/afbee524-5972-4075-8800-7d1f9d7b0a0c`, data);

}

const createAuction = (data: FieldValues) => {
    return fetchWrapper.post(`auctions`, data);
}

const getDetailedViewData = async (id: string): Promise<Auction> => {
    return fetchWrapper.get(`auctions/${id}`);
}

const updateAuction = async (data: FieldValues, id: string) => {
    return fetchWrapper.put(`auctions/${id}`, data);
}

export { getData, updateAuctionTest, createAuction, getDetailedViewData, updateAuction };