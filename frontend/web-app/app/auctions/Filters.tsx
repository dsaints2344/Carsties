import { Button, ButtonGroup } from "flowbite-react";

type Props = {
    pageSize: number;
    setPageSize: (size: number) => void;
};

const pageSizeButtons = [ 4, 8, 12 ];

const Filters = ({ pageSize, setPageSize }: Props) => {
    return (
        <div className="flex justify-between items-center mb-4">
            <div>
                <span className="uppercase text-sm text-gray-500 mr-2">Page Size</span>
                <ButtonGroup>
                    {pageSizeButtons.map((v, i) => (
                        <Button key={i} onClick={() => setPageSize(v)}
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