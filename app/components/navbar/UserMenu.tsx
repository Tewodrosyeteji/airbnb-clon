"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterStore from "@/app/hooks/useRegisterStore";
import useLoginStore from "@/app/hooks/useLoginStore";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
type UserMenuProps = {
  currentUser: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerStore = useRegisterStore();
  const loginStore = useLoginStore();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="hidden md:block text-sm font-semibold hover:bg-neutral-100  py-3 px-4 transition rounded-full cursor-pointer ">
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 flex items-center gap-3 rounded-full border-[1px] border-neutral-200 cursor-pointer transition hover:shadow-md "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute text-sm bg-white top-12 right-0 shadow-md  rounded-xl  w-[40vh] overflow-hidden md:w-3/4">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem label="My trips" onClick={() => {}} />
                <MenuItem label="My favoites" onClick={() => {}} />
                <MenuItem label="My reservations" onClick={() => {}} />
                <MenuItem label="My properties" onClick={() => {}} />
                <MenuItem label="Airbnb my home" onClick={() => {}} />
                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="login" onClick={loginStore.onOpen} />
                <MenuItem label="sign up" onClick={registerStore.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
