"use server";

import { auth } from "@/auth";

const getCurrentUser = async () => {
    try {
        const session = await auth();

        return session?.user;
        
    } catch (error) {
        console.error("Error fetching current user:", error);
        return null;
    }
}

export { getCurrentUser };
