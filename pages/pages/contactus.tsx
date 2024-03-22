import { Divider } from "antd";
import { RiMessage2Fill } from "react-icons/ri";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { BsSendArrowUp } from "react-icons/bs";

const ContactMe = () => {
  return (
    <div className="flex flex-wrap justify-center gap-[16rem] pt-14 pb-6 bg-[#838383] w-full min-h-screen">
      <div className="lg:w-[30%]">
        <div className="font-bold text-[4rem] leading-[1.1] mt-[8rem] mb-16">
          Let's Discus <br /> Your Project
        </div>
        <Divider style={{ borderColor: "#333333" }} />
        <div className="flex gap-6 pt-10 pb-4">
          <div className="relative w-14 h-14 overflow-hidden bg-[#8f600e] rounded-full -top-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <RiMessage2Fill className="absolute w-6 h-6 left-4 top-[.95rem] " />
          </div>
          <span>
            <p>Email</p>
            <p>bbazubagira@gmail.com</p>
          </span>
        </div>
        <Divider style={{ borderColor: "#333333" }} />
        <div className="flex gap-6 pt-10 pb-4">
          <div className="relative w-14 h-14 overflow-hidden bg-[#8f600e] rounded-full -top-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <FaLocationCrosshairs className="absolute w-6 h-6 left-4 top-[.95rem] " />
          </div>
          <span>
            <p>Location</p>
            <p>Kigali , Rwanda,Kicukiro</p>
          </span>
        </div>
      </div>
      <div className="mt-[8rem]">
        <div className="rounded-full border border-[#333333] w-[28rem] h-[28rem] relative">
          <div>
            <hr className="bg-[#333333] w-[23rem] h-[2px] rotate-[10deg] absolute bottom-[10rem] left-6" />
            <div className="absolute top-[13rem] left-16 text-[1.8rem] font-medium">
              <p > 👋 say Hi !</p>
            </div>
            <BsSendArrowUp color="#8f600e" size={70} className="mt-3 absolute top-40 right-[5rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
