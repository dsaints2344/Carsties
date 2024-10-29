"use client";

import AuctionCard from "./AuctionCard";
import AppPagination from "../components/AppPagination";
import { getData } from "../actions/auctionActions";
import { useEffect, useState } from "react";
import { Auction, PagedResult } from "@/types";
import Filters from "./Filters";
import { useParamsStore } from "../hooks/useParamsStore";
import { useShallow } from "zustand/react/shallow";
import qs from "query-string";

const Listings = () => {
    const [data, setData] = useState<PagedResult<Auction>>();
    const params = useParamsStore(useShallow(state => ({
        pageNumber: state.pageNumber,
        pageSize: state.pageSize,
        searchTerm: state.searchTerm
    })));
    const setParams = useParamsStore(state => state.setParams);
    const url = qs.stringifyUrl({url: "", query: params});
    
    const setPageNumber = (pageNumber: number) => {
        setParams({pageNumber});
    }
    useEffect(() => {
        getData(url).then(data => {
            setData(data);
        })
    } , [url]);

    if (!data) return <h3>Loading...</h3>
    return (
        <>
            <Filters/>
            <div className="grid grid-cols-4 gap-6">
                { data.results.map((auction: Auction, index: number) => (
                    <AuctionCard auction={auction} key={index}/>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <AppPagination pageChanged={setPageNumber} currentPage={params.pageNumber} pageCount={data.pageCount} />
            </div>
        </>
        
    )
}

export default Listings;