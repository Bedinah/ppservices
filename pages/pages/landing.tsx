import {
  RiSendPlaneLine,
  RiTwitterXLine,
  RiLinkedinLine,
} from "react-icons/ri";
import Image from "next/image";
import { SlSocialInstagram } from "react-icons/sl";

const LandingPage = () => {
  return (
    <div className="flex justify-center pt-14 pb-6 bg-[#fcda69] w-full min-h-screen">
      <div className="w-[36rem] mt-[8rem] ">
        <div className="font-bold text-[4rem] leading-[1.1] mb-10">
          Call me Bazubagira <br /> nice to meet you
        </div>
        <div className="flex gap-3 mb-10">
          <hr className="bg-[#333333] w-20 h-[2px] mt-3" />

          <p className="text-base mb-2">
            Hi! I 'm a Software Developer excited about creating awesome <br />
            digital solutions. Whether its building apps, fixing bugs or making
            existing systems run smoother, I 'm all about making technology{" "}
            <br /> work for you.{" "}
          </p>
        </div>
        <button className="bg-[#8873F0] hover:bg-[#ada3e2] py-4 px-4 rounded-xl inline-flex items-center text-sm text-[#FFFAFA] font-semibold">
          <span className="mr-3">Let's Talk</span>
          <RiSendPlaneLine size={20} />
        </button>

        <div className="flex gap-4 mt-[7rem]">
          <span className="text-sm font-semibold">Check Out my </span>
          <div className="flex gap-4 ">
            <div className="relative w-14 h-14 overflow-hidden bg-gray-100 rounded-full opacity-25 -top-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <RiLinkedinLine className="absolute w-6 h-6 left-4 top-[.8rem] " />
            </div>
            <div className="relative w-14 h-14 overflow-hidden bg-gray-100 rounded-full opacity-25 -top-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <SlSocialInstagram className="absolute w-6 h-6 left-4 top-[.9rem] " />
            </div>
            <div className="relative w-14 h-14 overflow-hidden bg-gray-100 rounded-full opacity-25 -top-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <RiTwitterXLine className="absolute w-6 h-6 left-4 top-[.8rem] " />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <Image
          src="/images/userimg.png"
          alt="profile image"
          width={500}
          height={500}
        />
        <div className="font-semibold text-lg mt-10">
          <i>
            "Nta muntu uguha agaciro,
            <br /> Agaciro ni wowe ukiha"
          </i>
        </div>
        <div className="mt-[10rem] relative">
          <div className="w-[1px] h-[20rem] bg-[#585858] opacity-25"></div>
          <div className="w-[1px] h-[5rem] bg-[#585858] mt-8 opacity-25 mb-10"></div>
          <div className="rotate-180 absolute w-20 -left-10">
            <div className="rotate-90">Scroll Down</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
