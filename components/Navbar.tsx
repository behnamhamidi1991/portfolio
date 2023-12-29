import React from "react";
import Image from "next/image";
import { Socials } from "../constants/index";

function Navbar() {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <Image src="/horseLogo.jpg" alt="logo" width={38} height={38} />

        <h1 className="text-white text-[25px] font-semibold">BenDev</h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={18}
            height={18}
          />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
