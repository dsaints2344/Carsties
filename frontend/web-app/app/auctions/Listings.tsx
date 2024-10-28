"use client";

import AuctionCard from "./AuctionCard";
import AppPagination from "../components/AppPagination";
import { getData } from "../actions/auctionActions";
import { useEffect, useState } from "react";
import { Auction } from "@/types";


const Listings = () => {
    const [auctions, setAuctions] = useState<Auction[]>([]);
    const [pageCount, setPageCount] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);

    useEffect(() => {
        getData(pageNumber).then(data => {
            setAuctions(data.results);
            setPageCount(data.pageCount);
        })
    } , [pageNumber]);

    if (auctions.length === 0) return <h3>Loading...</h3>
    return (
        <>
            <div className="grid grid-cols-4 gap-6">
                {auctions && auctions.map((auction: Auction, index: number) => (
                    <AuctionCard auction={auction} key={index}/>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <AppPagination pageChanged={setPageNumber} currentPage={pageNumber} pageCount={pageCount} />
            </div>
        </>
        
    )
}

export default Listings;