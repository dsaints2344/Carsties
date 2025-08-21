"use client";

import { Button, Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../components/Input";
import { useEffect } from "react";

const AuctionForm = () => {
    const router = useRouter();
    const { control, handleSubmit, setFocus, 
        formState: { isSubmitting, isValid, isDirty }
    } = useForm();

    useEffect(() => {
        setFocus("make");
    }, [setFocus])


    const onSubmit = (data: FieldValues) => {
        console.log(data);
    }

    return (
        <form className="flex flex-col mt3" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 block">
                <Input
                    control={control}
                    name="make"
                    label="Make"
                    rules={{
                        required: "Make is required"
                    }}
                />
            </div>
            <div className="mb-3 block">
                <Input
                    control={control}
                    name="model"
                    label="Model"
                    rules={{
                        required: "Model is required"
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