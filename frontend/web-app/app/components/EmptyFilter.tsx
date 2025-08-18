"use client";

import { Button } from "flowbite-react";
import { useParamsStore } from "../hooks/useParamsStore";
import Heading from "./Heading";
import { signIn } from "next-auth/react";

type Props = {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
    showLogin?: boolean;
    callbackUrl?: string;
};

export default function EmptyFilter({ 
    title = "No matches for this filter", 
    subtitle = "Try adjusting your search or filters", 
    showReset,
    showLogin,
    callbackUrl 
}: Props) {
    const reset = useParamsStore(state => state.reset);

    return (
        <div className="flex flex-col gap-2 items-center justify-center h-[40vh] shadow-lg p-4 rounded-lg bg-white">
            <Heading title={title} subtitle={subtitle} center/>
            {showReset && (
                <Button outline onClick={reset}>Reset Filters</Button>
            )}
            {showLogin && (
                <Button onClick={() => signIn('id-server', { redirectTo: callbackUrl })}>Login</Button>
            )}
        </div>
    );
}
