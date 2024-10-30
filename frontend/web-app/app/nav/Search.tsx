import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (
        <div className="flex w-[50%]  items-center border-2 rounded-full py-2 shadow-sm">
            <input
                type="text"
                placeholder="Search for cars by make, model or color" 
            />
            <button>
                <FaSearch/>
            </button>
        </div>
    )
}

export default Search;