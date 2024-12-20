import { AiOutlineCar } from "react-icons/ai";

const  Logo = () => {
    return(
        <div className="flex items-center gap-2 text-3xl font-bold text-red-500">
            <AiOutlineCar size={34} />
            <div>Cartsies Auctions</div>
        </div>
    );
}

export default Logo;