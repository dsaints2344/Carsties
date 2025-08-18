// UserActions.tsx
"use client";

import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";
import { Profile } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from "react-icons/ai";
import { HiCog, HiUser, HiChevronDown } from "react-icons/hi";
import { useParamsStore } from "../hooks/useParamsStore";
import { usePathname, useRouter } from "next/navigation";

type Props = { user: Profile };

const UserActions = ({ user }: Props) => {
  const displayName =
    (user?.username || user.name || user.email || "User");

  const router = useRouter();
  const pathname = usePathname();
  const setParams = useParamsStore(state => state.setParams);
  const setWinner = () => {
    setParams({winner: user.username, seller: undefined});
    if (pathname !== "/") {
      router.push("/");
    }
  }

  const setSeller = () => {
    setParams({seller: user.username, winner: undefined});
    if (pathname !== "/") {
      router.push("/");
    }
  }

  return (
    <Dropdown
      placement="bottom-end"
      className="z-50 w-56"
      renderTrigger={() => (
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border px-3 py-1 hover:bg-gray-50"
        >
          <span className="hidden sm:inline">Welcome {displayName}</span>
          <HiChevronDown className="h-4 w-4" />
        </button>
      )}
    >
      <DropdownItem icon={HiUser} onClick={setSeller}>
        My Auctions
      </DropdownItem>

      <DropdownItem icon={AiFillTrophy} onClick={setWinner}>
        Auctions won
      </DropdownItem>

      <DropdownItem icon={AiFillCar}>
        <Link href='/auctions/create'>
          Sell my car
        </Link>
      </DropdownItem>

      <DropdownItem as={Link} href="/session" icon={HiCog}>
        Session (dev only!)
      </DropdownItem>

      <DropdownDivider />

      <DropdownItem
        icon={AiOutlineLogout}
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Logout
      </DropdownItem>
    </Dropdown>
  );
};

export default UserActions;