import { PiArrowCircleUpRightFill } from "react-icons/pi";
import LandingImage from "../../public/images/landing.jpeg";
import UmuravaImage from "../../public/images/umurava.png";
import Image from "next/image";

const Projects = () => {
  return (
    <div className=" w-full min-h-screen">
      <div className="font-bold text-[3rem] text-[#1E818E]">
        Latest  Projects
      </div>
      <div className="flex justify-between flex-wrap ">
        <div className="w-[40rem] rounded overflow-hidden shadow-lg h-full mt-[5rem]">
          <hr className="bg-[#333333] w-full h-[2px] mt-3 my-5" />
          <div className="flex justify-between px-4">
            <div className="font-semibold text-[1.6rem] leading-[1.1] ">
              Umurava website
            </div>
            <PiArrowCircleUpRightFill color="#8f600e" size={48} />
          </div>
          <p className="my-1 px-4">Web landing page</p>
          <Image src={UmuravaImage} alt="landingpage" className="mt-4" />
        </div>
        <div className="w-[40rem] rounded overflow-hidden shadow-lg h-full mt-[1.5rem]">
          <hr className="bg-[#333333] w-full h-[2px] mt-3 my-5" />
          <div className="flex justify-between px-4">
            <div className="font-semibold text-[1.6rem] leading-[1.1] ">
              Umurava website
            </div>
            <PiArrowCircleUpRightFill color="#8f600e" size={48} />
          </div>
          <p className="my-1 px-4">Web landing page</p>
          <Image src={UmuravaImage} alt="landingpage" className="mt-4" />
        </div>
        <div className="w-[40rem] rounded overflow-hidden shadow-lg h-[24.2rem]">
          <hr className="bg-[#333333] w-[24rem] h-[2px] mt-3 my-5" />
          <div className="flex justify-between px-4">
            <div className="font-semibold text-[1.6rem] leading-[1.1]">
              PlantShop <br /> Landing Page
            </div>
            <PiArrowCircleUpRightFill color="#8f600e" size={44} />
          </div>
          <p className="my-1 px-4">Web landing page</p>
          <Image src={LandingImage} alt="lap" className="mt-6" />
        </div>
      </div>
      <div className="w-full h-[.5px] bg-[#1E818E] mt-14"></div>
    </div>
  );
};
export default Projects;
