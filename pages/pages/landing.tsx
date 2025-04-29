import Image from "next/image";
import React from "react";
import Typewriter from "../components/TypeWriter";
import Navigation from "./navigation";
import Profileimg from '../../public/images/profileimg.png'

const LandingPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen" style={{ background: 'linear-gradient(135deg, #E6E6FA, #CBC3E3)' }}>
      <div className="bg-[#CBC3E3]"></div>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4 mt-5 2xl:mt-24 ">
          <div className="font-bold text-[2.8rem] xl:text-[5rem] leading-[1.1] w-full lg:w-[50%] mt-20">
            <div className=" font-semibold text-5xl  text-[#8a7962] mb-6 lg:mb-0">
              <Typewriter text="Hello and Welcome !" delay={200} />
            </div>
            <div className="mt-28">
              I 'm Bazubagira Bernardine
              <p className="text-3xl">a <span className="text-[#8a7962]">passionate creative</span> software Engineer.</p>
            </div>
          </div>
          <Image src={Profileimg} alt="profile img" />
        </div>
        <span className="font-medium text-sm float-right mt-4 p-3">
          <i>"Nta muntu uguha agaciro, Agaciro ni wowe ukiha"</i>
        </span>
        <div className="w-full h-[.5px] bg-[#3f2202] mt-14"></div>
      </div>
    </div>
  );
};
export default LandingPage;
