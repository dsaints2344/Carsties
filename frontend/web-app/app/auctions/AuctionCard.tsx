import CountdownTimer from "./CountdownTimer";
import CarImage from "./CardImage";
import { Auction } from "@/types";

type Props = {
    auction: Auction;
};

const AuctionCard = ({auction}: Props) => {
    return (
        <a href="#" className="group">
            <div className="relative w-full bg-gray-200 aspect-video rounded-lg overflow-hidden">
                <CarImage imageUrl={auction.imageUrl}/>
                <div className="absolute bottom-2 left-2">
                    <CountdownTimer auctionEnd={auction.auctionEnd}/>
                </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                <h3 className="text-gray-700">{auction.name} {auction.model}</h3>
                <p className="font-semibold text-sm">{auction.year}</p>
            </div>
           
        </a>
    )
}

export default AuctionCard;