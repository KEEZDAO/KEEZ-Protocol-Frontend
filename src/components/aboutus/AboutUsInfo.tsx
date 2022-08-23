import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import imageToAdd1 from "../../assets/Logos/KP_BW_trans_crop-Recovered.png";

const AboutUsInfo = () => {
  return (
    <div className="flex pt-32 w-full justify-center items-center px-5 lg:px-20 md:px-20 ">
      <div className="flex-column ">
        <div className="flex-column flex-initial justify-between py-0 px-20 text-center">
          <h1 className="md:text-6xl text-3xl text-white py-2 font-extrabold">
            About Us
          </h1>
        </div>
        <div className="flex gap-3 flex-initial items-center flex-wrap justify-between py-10">
          <div
            className="bg-transparent md:flex-1  h-40
                    2xl:min-w-[550px]
                    2xl:max-w-[600px]
                    w-[100%]
                    flex-col p-3 rounded-md hover:shadow-2xl"
          >
            <div className="flex justify-center items-center">
              <img className="object-cover" src={imageToAdd1}/>
            </div>
          </div>
          <div className="flex-column w-[100%] md:flex-1 text-white">
            <h1 className="md:text-5xl text-2xl text-white py-2 font-extrabold">
              Who we are?
            </h1>
            <div className="text-justify">
              KEEZ Protocol is a team of six like-minded individuals passionate
              about revolutionizing DAO governance structures and building on
              the LUKSO network. We value transparency, inclusivity, and
              participation within our protocol and believe all DAOs must adopt
              these values. The KEEZ Protocol will unlock non-token gated DAO
              governance models that allow contributors from all walks of life
              to join DAOs and start building and creating!
            </div>
            <div className="flex flex-wrap gap-3 flex-row py-10 ">
              <button>
                <h3 className="flex items-center w-44 justify-center text-white font-bold py-2 px-2 border-2 border-white rounded-full bg-transparent">
                  KEEZ WEBSITE
                </h3>
              </button>
              <button>
                <h3 className="flex tems-center w-44 justify-center text-[#8168ff] font-bold py-2 px-2 rounded-full bg-white">
                  KEEZ DISCORD
                </h3>
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full items-end h-[0.1px] bg-zinc-800 " />
      </div>
    </div>
  );
};

export default AboutUsInfo;