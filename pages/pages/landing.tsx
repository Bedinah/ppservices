import { RiSendPlaneLine, RiTwitterXLine } from "react-icons/ri";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import Image from "next/image";

const LandingPage = () => {
  return (
<<<<<<< HEAD
    <div className="flex justify-between mt-6 px-12">
      <div className="w-[36rem]">
        <div className="font-semibold text-[3rem] leading-snug">
          Call me Bedine Bazubagira <br /> nice to meet you
        </div>
        <div className="flex gap-3">
          <hr className="text-black w-20 mt-3" />
=======
    <div className="flex justify-between pt-14 pb-6 px-12 bg-[#fcda69]">
      <div className="w-[36rem]">
        <div className="font-semibold text-[3rem] leading-snug mt-[10rem] mb-6">
          Call me Bazubagira ; <br /> nice to meet you
        </div>
        <div className="flex gap-3">
          <hr className="bg-[#333333] w-20 h-[2px] mt-3" />
>>>>>>> 76b646d (landing page)

          <p className="text-base mb-2">
            Hi! I 'm a Software Developer excited about creating awesome digital
            solutions. Whether its building apps, fixing bugs or making existing
            systems run smoother, I 'm all about making technology work for you.{" "}
          </p>
        </div>
<<<<<<< HEAD
        <button className="bg-[#8873F0] hover:bg-[#ada3e2] py-3 px-4 rounded inline-flex items-center mt-3">
=======
        <button className="bg-[#8873F0] hover:bg-[#ada3e2] py-3 px-4 rounded inline-flex items-center mt-8">
>>>>>>> 76b646d (landing page)
          <span className="mr-3">Let's Talk</span>
          <RiSendPlaneLine size={20} />
        </button>

<<<<<<< HEAD
        <div className="flex gap-2 my-3">
=======
        <div className="flex gap-2 mt-[13rem]">
>>>>>>> 76b646d (landing page)
          <span>Check Out my </span>
          <div className="flex gap-2">
            <CiLinkedin size={21} />
            <CiInstagram size={21} />
            <RiTwitterXLine size={19} />
          </div>
        </div>
      </div>
      <div className="flex">
<<<<<<< HEAD
        <Image
          src="/images/userimg.jpeg"
=======
        <Image 
          src="/images/userimg.png"
>>>>>>> 76b646d (landing page)
          alt="profile image"
          width={500}
          height={500}
        />
<<<<<<< HEAD
        <div className="font-semibold text-lg ">
          <i>"Nta muntu uguhesha agaciro, Agaciro ni wowe ukiha"</i>
        </div>
        <div className="mt-6">
        <div className="w-[1px] h-[20rem] bg-[#585858]"></div>
        <div className="w-[1px] h-[5rem] bg-[#585858] mt-5"></div>
=======
        <div className="font-semibold text-lg mt-8">
          <i>"Nta muntu uguhesha agaciro, Agaciro ni  wowe ukiha"</i>
        </div>
        <div className="mt-[10rem]">
        <div className="w-[1px] h-[20rem] bg-[#585858]"></div>
        <div className="w-[1px] h-[5rem] bg-[#585858] mt-12"></div>
>>>>>>> 76b646d (landing page)
      </div>
      </div>
     
    </div>
  );
};
export default LandingPage;
