"use client";

import { Button, Spinner } from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../components/Input";
import { useEffect } from "react";
import DateInput from "../components/DateInput";
import { createAuction, updateAuction } from "../actions/auctionActions";
import toast from "react-hot-toast";
import { Auction } from "@/types";

type Props = {
    auction?: Auction
};

const AuctionForm = ({ auction }: Props) => {
    const router = useRouter();
    const pathName = usePathname();

    const { control, handleSubmit, setFocus, reset, 
        formState: { isSubmitting, isValid, isDirty }
    } = useForm({mode: "onTouched"});

    useEffect(() => {
        if (auction) {
            const { make, model, color, year, mileage } = auction;
            reset({
                make,
                model,
                color,
                year,
                mileage
            });
        }
        setFocus("make");
    }, [setFocus, reset, auction])


    const onSubmit = async (data: FieldValues) => {
        try {
            let id = "";
            let res;

            if (pathName === "/auctions/create") {
                res = await (id ? updateAuction(data, id) : createAuction(data));
                res = res.id;
            } else {
                if (auction) {
                    res = await updateAuction(data, auction.id);
                    id = auction.id;
                }
            }
            
            if (res.error) {
               throw  res.error; 
            }

            router.push(`/auctions/details/${id}`)
        } catch (error : any) {
            toast.error(error.status + " " + error.message);
        }
        
    }

    return (
        <form className="flex flex-col mt3" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    control={control}
                    name="make"
                    label="Make"
                    rules={{
                        required: "Make is required"
                    }}
                />
                <Input
                    control={control}
                    name="model"
                    label="Model"
                    rules={{
                        required: "Model is required"
                    }}
                />
                <Input
                    control={control}
                    name="color"
                    label="Color"
                    rules={{
                        required: "Color is required"
                    }}
                />

                {pathName === "/auctions/create" && (
                    <>
                        <Input
                        control={control}
                        name="imageUrl"
                        label="Image URL"
                        rules={{
                            required: "Image URL is required"
                        }}
                        />

                        <div className="grid grid-cols-2 gap-3">
                            <Input
                                control={control}
                                name="reservePrice"
                                label="Reserve Price (enter 0 if no reserve)"
                                type="number"
                                rules={{
                                    required: "Reserve Price is required"
                                }}
                            />
                            <DateInput
                                control={control}
                                name="auctionEnd"
                                label="Auction end date/time"
                                showTimeSelect
                                dateFormat={"dd MMMM yyyy h:mm a"}
                                rules={{
                                    required: "Auction end date/time is required"
                                }}
                            />
                        </div>
                    </>
                )}


                <div className="grid grid-cols-2 gap-3">
                    <Input
                        control={control}
                        name="year"
                        label="Year"
                        type="number"
                        rules={{
                            required: "Year is required"
                        }}
                    />
                    <Input
                        control={control}
                        name="mileage"
                        label="Mileage"
                        type="number"
                        rules={{
                            required: "Mileage is required"
                        }}
                    />
                </div>

            <div className="flex justify-between">
                <Button  
                    color="light" 
                    onClick={() => router.push("/")}>Cancel</Button>
                <Button
                    color="green"
                    disabled={!isDirty || !isValid}
                    type="submit"
                >
                    {isSubmitting && <Spinner size="sm" />}
                    Submit
                </Button>
            </div>

        </form>
    );
}

export default AuctionForm;