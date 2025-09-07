import { getDetailedViewData } from "@/app/actions/auctionActions";
import Heading from "@/app/components/Heading";
import AuctionForm from "../../AuctionForm";

const Update = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const data = await getDetailedViewData(id);

    return (
        <div className="max-auto max-w-[75%] shadow-lg p-10 bg-white rounded-lg">
            <Heading title="Update your auction" subtitle="Please update the details of your 
                car (only these auctions properties can be updated)" />
            <AuctionForm auction={data} />
        </div>
    );
}

export default Update;
