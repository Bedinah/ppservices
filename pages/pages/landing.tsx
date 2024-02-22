import { RiSendPlaneLine, RiTwitterXLine } from "react-icons/ri";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="flex justify-between mt-6 px-12">
      <div className="w-[36rem]">
        <div className="font-semibold text-[3rem] leading-snug">
          Call me Bedine Bazubagira <br /> nice to meet you
        </div>
        <div className="flex gap-3">
          <hr className="text-black w-20 mt-3" />

          <p className="text-base mb-2">
            Hi! I 'm a Software Developer excited about creating awesome digital
            solutions. Whether its building apps, fixing bugs or making existing
            systems run smoother, I 'm all about making technology work for you.{" "}
          </p>
        </div>
        <button className="bg-[#8873F0] hover:bg-[#ada3e2] py-3 px-4 rounded inline-flex items-center mt-3">
          <span className="mr-3">Let's Talk</span>
          <RiSendPlaneLine size={20} />
        </button>

        <div className="flex gap-2 my-3">
          <span>Check Out my </span>
          <div className="flex gap-2">
            <CiLinkedin size={21} />
            <CiInstagram size={21} />
            <RiTwitterXLine size={19} />
          </div>
        </div>
      </div>
      <div className="flex">
        <Image
          src="/images/userimg.jpeg"
          alt="profile image"
          width={500}
          height={500}
        />
        <div className="font-semibold text-lg ">
          <i>"Nta muntu uguhesha agaciro, Agaciro ni wowe ukiha"</i>
        </div>
        <div className="mt-6">
        <div className="w-[1px] h-[20rem] bg-[#585858]"></div>
        <div className="w-[1px] h-[5rem] bg-[#585858] mt-5"></div>
      </div>
      </div>
     
    </div>
  );
};
export default LandingPage;
