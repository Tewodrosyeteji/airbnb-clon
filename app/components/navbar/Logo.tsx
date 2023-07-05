"use client";
import Image from "next/image";

import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Image
      src="/images/logo.png"
      height="100"
      width="100"
      className="hidden md:block cursor-pointer"
      alt="Logo"
    />
  );
};

export default Logo;
