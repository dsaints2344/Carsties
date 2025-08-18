"use client";

import { Button } from "flowbite-react";
import { useState } from "react";
import { updateAuctionTest } from "../actions/auctionActions";

const AuthTest = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{status: number, message: string} | null>(null);

    const handleUpdate = async () => {
        setResult(null);
        setLoading(true);
        
        updateAuctionTest().then((res) => setResult(res))
        .catch((error) => {
            setResult(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }

  return (
    <div className="flex items-center">
        <Button outline onClick={handleUpdate} disabled={loading} isProcessing={loading}>
            Test Auth
        </Button>
        <div className="ml-4 p-">
            {JSON.stringify(result, null, 2)}
        </div>
    </div>
    
  )
}

export default AuthTest;
