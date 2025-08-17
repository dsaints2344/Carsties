import Search from "./Search";
import Logo from "./Logo";
import LoginButton from "./LoginButton";
import { getCurrentUser } from "../actions/authActions";
import UserActions from "./UserActions";
import { Profile } from "next-auth";

const NavBar = async () => {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white p-5 text-gray-800 shadow-md">
      <Logo />
      <div className="mx-4 flex-1 max-w-3xl">
        <Search />
      </div>
      {user ? <UserActions user={{ ...user } as Profile} /> : <LoginButton />}
    </header>
  );
};

export default NavBar;