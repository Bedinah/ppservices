import { PiArrowCircleUpRightFill } from "react-icons/pi";
import LandingImage from "../../public/images/landing.jpeg";
import UmuravaImage from "../../public/images/umurava.png";
import Image from "next/image";
import "animate.css";

const Projects = () => {
  return (
    <div className=" w-full h-full p-4 2xl:p-0  ">
      <div className="container mx-auto">
        <div className=" w-full font-bold text-[2rem] xl:text-[3rem] text-[#8a7962] pt-10">
          <div className="animate__animated animate__fadeInUp  animate__delay-3s">
            Latest Projects
          </div>
        </div>
        <div className="lg:flex justify-between flex-wrap ">
          <div className="w-full lg:w-[40%] rounded overflow-hidden shadow-lg h-full mt-[1rem] cursor-pointer hover:bg-[#c5c3b5]">
            <a href="https://umurava.africa" target="_blank">
              <hr className="bg-[#333333] w-full h-[2px] my-2" />
              <div className="flex justify-between px-4">
                <div className="font-semibold text-[1.6rem]">Umurava website</div>
                <a href="https://umurava.africa" target="_blank">
                  <PiArrowCircleUpRightFill color="#8f600e" size={48} />
                </a>
              </div>
              <p className="my-1 px-4">Web landing page</p>
              <Image src={UmuravaImage} alt="landingpage" className="mt-4" />
            </a>
          </div>

          <div className="w-full lg:w-[40%] rounded overflow-hidden shadow-lg h-full mt-[5rem] cursor-pointer hover:bg-[#c5c3b5]">
            <hr className="bg-[#333333] w-full h-[2px] my-2" />
            <div className="flex justify-between px-4">
              <div className="font-semibold text-[1.6rem] ">
                Umurava website
              </div>
              <PiArrowCircleUpRightFill color="#8f600e" size={48} />
            </div>
            <p className="my-1 px-4">Web landing page</p>
            <Image src={UmuravaImage} alt="landingpage" className="mt-4" />
          </div>
          <div className="w-full lg:w-[40%] rounded overflow-hidden shadow-lg h-[24.2rem]  mt-[1.5rem] cursor-pointer hover:bg-[#c5c3b5]">
            <hr className="bg-[#333333] w-[24rem] h-[2px] my-4" />
            <div className="flex justify-between px-4">
              <div className="font-semibold text-[1.6rem]">
                PlantShop <br /> Landing Page
              </div>
              <PiArrowCircleUpRightFill color="#8f600e" size={44} />
            </div>
            <p className="my-1 px-4">Web landing page</p>
            <Image src={LandingImage} alt="lap" className="mt-6" />
          </div>
          <div className="w-full lg:w-[40%] rounded overflow-hidden shadow-lg h-[24.2rem]  mt-[5rem] cursor-pointer hover:bg-[#c5c3b5]">
            <hr className="bg-[#333333] w-[24rem] h-[2px] my-4" />
            <div className="flex justify-between px-4">
              <div className="font-semibold text-[1.6rem]">
                PlantShop <br /> Landing Page
              </div>
              <PiArrowCircleUpRightFill color="#8f600e" size={44} />
            </div>
            <p className="my-1 px-4">Web landing page</p>
            <Image src={LandingImage} alt="lap" className="mt-6" />
          </div>
          
        </div>
        <div className="w-full h-[.5px] bg-[#3f2202] mt-14"></div>
      </div>
    </div>
  );
};
export default Projects;
