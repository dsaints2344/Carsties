import { Button, ButtonGroup } from "flowbite-react";
import { useParamsStore } from "../hooks/useParamsStore";

const pageSizeButtons = [ 4, 8, 12 ];

const Filters = () => {
    const pageSize = useParamsStore(state => state.pageSize);
    const setParams = useParamsStore(state => state.setParams);
    return (
        <div className="flex justify-between items-center mb-4">
            <div>
                <span className="uppercase text-sm text-gray-500 mr-2">Page Size</span>
                <ButtonGroup>
                    {pageSizeButtons.map((v, i) => (
                        <Button key={i} onClick={() => setParams({pageSize: v})}
                            color={`${pageSize === v ? 'red' : 'gray'}`}
                            className="focus:ring-0"
                        >
                            {v}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>
        </div>
    );
}

export default Filters;