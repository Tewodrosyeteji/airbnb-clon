"use client";

import Image from "next/image";
type Props = {};

const Avatar = (props: Props) => {
  return (
    <Image
      src="/images/placeholder.jpg"
      height="30"
      width="30"
      alt="person"
      className="rounded-full"
    />
  );
};

export default Avatar;
