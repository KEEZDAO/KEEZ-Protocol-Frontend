import React from "react";
import { SiTwitter, SiGithub, SiDiscord } from "react-icons/si";


const Footer = () => (
  <div className="bg-welcome w-full flex md:justify-center justify-center items-center flex-col  y-4 ">
    <div className="sm:w-[100%] w-full h-[0.1px] bg-zinc-800 " />
    
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4 px-5 lg:px-20 md:px-20">
        <div className="flex min-w-max flex-[0.3] justify-center sm:items-center">
            <h1 className="text-zinc-500 font-normal">  Copyright © 2022 KeezDAO</h1>
        </div>

        <div className="flex flex-[0.4] justify-center items-center flex-wrap sm:mt-0 mt-5 w-full"></div>
            <div className="flex flex-row sm:justify-end justify-center items-center flex-wrap w-full">
                <div className={`w-8 h-8 rounded-full flex justify-center mx-1 items-center bg-[#222831] hover:bg-[#444]`}>
                    <a href="https://twitter.com/keezDAO"><SiTwitter fontSize={18} color="#fff"/></a>
                </div>
                <div className={`w-8 h-8 rounded-full flex justify-center mx-1 items-center bg-[#222831] hover:bg-[#444]`}>
                    <a href="https://github.com/keezDAO"><SiGithub fontSize={18} color="#fff"/></a>
                </div>
                <div className={`w-8 h-8 rounded-full flex justify-center mx-1 items-center bg-[#222831] hover:bg-[#444]`}>
                    <a href="https://discord.gg/keez"><SiDiscord fontSize={18} color="#fff"/></a>
                </div>
            </div>
    </div>
  </div>
);

export default Footer;