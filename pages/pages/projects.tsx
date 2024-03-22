import { PiArrowCircleUpRightFill } from "react-icons/pi";
import LandingImage from "../../public/images/landing.jpeg";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="container mx-auto px-8 pt-14 pb-6 w-full min-h-screen justify-around text-[#3a3a3a]">
      <div className="font-bold text-[4rem] leading-[1.1] mt-[6rem]">
        Latest <br /> Projects
      </div>
      <div className="flex justify-between flex-wrap ">
        <div className="w-[30rem] rounded overflow-hidden shadow-lg h-[24.2rem] mt-[5rem]">
          <hr className="bg-[#333333] w-[24rem] h-[2px] mt-3 my-5" />
          <div className="flex justify-between px-4">
            <div className="font-semibold text-[1.6rem] leading-[1.1] ">
              PlantShop <br /> Landing Page
            </div>
            <PiArrowCircleUpRightFill color="#8f600e" size={48} />
          </div>
          <p className="my-1 px-4">Web landing page</p>
          <Image src={LandingImage} alt="lap" className="mt-6" />
        </div>
        <div className="w-[30rem] rounded overflow-hidden shadow-lg h-[24.2rem] mt-[2.5rem] ">
          <hr className="bg-[#333333] w-[24rem] h-[2px] mt-3 my-5" />
          <div className="flex justify-between px-4">
            <div className="font-semibold text-[1.6rem] leading-[1.1] ">
              PlantShop <br /> Landing Page
            </div>
            <PiArrowCircleUpRightFill color="#8f600e" size={44} />
          </div>
          <p className="my-1 px-4">Web landing page</p>
          <Image src={LandingImage} alt="lap" className="mt-6" />
        </div>
        <div className="w-[30rem] rounded overflow-hidden shadow-lg h-[24.2rem]">
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
    </div>
  );
};
export default Projects;
