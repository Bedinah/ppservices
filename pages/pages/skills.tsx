import { Space } from "antd";
import { FaReact } from "react-icons/fa";

const Experience = () => {
    return(
<div className="min-h-screen w-full py-4 bg-[#fcda69] flex justify-center gap-3">
      <div className="w-[35%]">
        <div className="font-bold text-[4rem] leading-[1.1] mt-[6rem]">
          Skills & <br />
          Experience
        </div>
        <div className="flex gap-3 mt-10">
          <hr className="bg-[#333333] w-20 h-[2px] mt-3" />

          <p className="text-base ">
            Hi! I 'm a Software Developer excited about creating awesome digital
            solutions. Whether its building apps, fixing bugs or making existing
            systems run smoother, I 'm all about making technology work for you.{" "}
          </p>
        </div>
        <div className="mt-20">
        <div className="font-normal text-[2rem] ">
          Skills 
        </div>
        <div className="w-[22rem] flex flex-wrap gap-6">
        <FaReact size={45}/>
        <FaReact size={45}/>
        <FaReact size={45}/>
        <FaReact size={45}/>
        <FaReact size={45}/>
        <FaReact size={45}/>
        <FaReact size={45}/>
        <FaReact size={45}/>
        <FaReact size={45}/>
        </div>
        <div>

        </div>
        </div>
      </div>
      <div className="w-[50%]"></div>
  </div>
    )
  
};
export default Experience;
