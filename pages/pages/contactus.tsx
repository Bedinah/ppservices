import { Divider} from "antd";
import { RiMessage2Fill } from "react-icons/ri";
import { FaLocationCrosshairs } from "react-icons/fa6";

const ContactMe = () => {
  return (
    <div className="flex justify-center gap-[16rem] pt-14 pb-6 bg-[#fcda69] w-full min-h-screen">
      <div className="w-[30%]">
        <div className="font-bold text-[4rem] leading-[1.1] mt-[8rem] mb-10">
          Let's Discus <br /> Your Project
        </div>
        <Divider />
        <div className="flex gap-6">
          <div className="relative w-14 h-14 overflow-hidden bg-gray-100 rounded-full -top-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <RiMessage2Fill className="absolute w-6 h-6 left-4 top-[.95rem] " />
          </div>
          <span>
            <p>Email</p>
            <p>bbazubagira@gmail.com</p>
          </span>
        </div>
        <Divider />
        <div className="flex gap-6">
          <div className="relative w-14 h-14 overflow-hidden bg-gray-100 rounded-full -top-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <FaLocationCrosshairs className="absolute w-6 h-6 left-4 top-[.95rem] " />
          </div>
          <span>
            <p>Location</p>
            <p>Kigali , Rwanda,Kicukiro</p>
          </span>
        </div>
      </div>
      <div className="mt-[8rem]">
        <div className="rounded-full border border-[#333333] w-[28rem] h-[28rem]"></div>
      </div>
    </div>
  );
};
export default ContactMe;
