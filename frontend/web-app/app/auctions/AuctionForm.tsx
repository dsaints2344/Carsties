"use client";

import { Button, HelperText, Spinner, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";

const AuctionForm = () => {
    const router = useRouter();
    const { register, handleSubmit, setFocus, 
        formState: { isSubmitting, isValid, isDirty, errors }
    } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    }

    return (
        <form className="flex flex-col mt3" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 block">
                <TextInput
                    {...register("make", {
                        required: "Make is required"
                    })} 
                    placeholder="Make"
                    color={errors?.make && "failure"}
                />
                <HelperText color="failure">{errors?.make?.message as string}</HelperText>
            </div>
            <div className="mb-3 block">
                <TextInput
                    {...register("model", {
                        required: "Model is required"
                    })} 
                    placeholder="Model"
                    color={errors?.model && "failure"}
                />
                <HelperText color="failure">{errors?.model?.message as string}</HelperText>
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