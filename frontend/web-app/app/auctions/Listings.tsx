/* eslint-disable @typescript-eslint/no-explicit-any */
import AuctionCard from "./AuctionCard";

const getData = async () => {
    const res = await fetch('http://localhost:6001/search?pageSize=10');

    if (!res.ok){
        throw new Error('Failed to fetch data');
    }
    else {
        return res.json();
    }
}

const Listings = async () => {
    const data = await getData();
    return (
        <div className="grid grid-cols-4 gap-6">
            {data && data.results.map((auction: any, index: number) => (
            <AuctionCard auction={auction} key={index}/>
        ))}</div>
    )
}

export default Listings;