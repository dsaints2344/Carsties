import { useParamsStore } from "../hooks/useParamsStore";
import Heading from "./Heading";

type Props = {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
};

export default function EmptyFilter({ 
    title = "No matches for this filter", 
    subtitle = "Try adjusting your search or filters", 
    showReset 
}: Props) {
    const reset = useParamsStore(state => state.reset);

    return (
        <div className="flex flex-col gap-2 items-center justify-center h-[40vh] shadow-lg p-4 rounded-lg bg-white">
            <Heading title={title} subtitle={subtitle} center/>
            {showReset && <button className="mt-2 text-blue-500" onClick={reset}>Reset Filters</button>}
        </div>
    );
}
