import { Divider, Space } from "antd";
import { FaReact } from "react-icons/fa";

const experiences = [
  {
    years: "2023-present",
    role: " Frontend Developer",
    company: "Samphone",
  },
  {
    years: "2022-2023",
    role: " Frontend Developer",
    company: "Umurava ltd",
  },
  {
    years: "2019-2019",
    role: "Frontend Developer",
    company: "lllllll",
  },
];



const Experience = () => {
  return (
    <div className="min-h-screen w-full py-4 gap-[18rem] bg-[#838383] lg:flex justify-center">
      <div className="lg:w-[35%]">
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
          <div className="font-normal text-[2rem] mb-4 ">
            Skills
          </div>
          <div className="w-[22rem] flex flex-wrap gap-6">
            <span><FaReact size={45} />
              <p>React</p></span>
            <FaReact size={45} />
            <FaReact size={45} />
            <FaReact size={45} />
            <FaReact size={45} />
            <FaReact size={45} />
            <FaReact size={45} />
            <FaReact size={45} />
            <FaReact size={45} />
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className="lg:w-[25%] mt-[6rem]">
        <h1 className="font-bold text-[2rem] text-start mb-10 ">Experience</h1>
        {experiences?.map((data: any, index: any) => (
          <>
            <Divider />
            <div className="flex gap-3 justify-center font-semibold text-base">
              <div className="mr-4">{data?.years}</div>
              <div>
                <div className="font-semibold text-[2rem]">{data?.role}</div>
                <div className="flex justify-between mt-6">
                  <p className="font-normal">{data?.company}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )

};
export default Experience;
