"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterStore from "@/app/hooks/useRegisterStore";
type Props = {};

const UserMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerStore = useRegisterStore();

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
            <MenuItem label="login" onClick={() => {}} />
            <MenuItem label="sign up" onClick={registerStore.onOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
