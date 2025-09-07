"use client";

import { deleteAuction } from "@/app/actions/auctionActions";
import { Button, Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

type Props ={
    id: string;
}

const DeleteButton = ({ id }: Props) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        setLoading(true);

        deleteAuction(id)
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                router.push("/");
            })
            .catch((error) => {
                toast.error(error.status + " " + error.message);
                setLoading(false);
            })
            .finally(() => setLoading(false));

    }

    return (
        <Button color="warning" outline onClick={handleDelete} disabled={loading}>
            {loading && <Spinner size="sm" className="mr-3"/>}
            Delete Auction
        </Button>
    );
}

export default DeleteButton;