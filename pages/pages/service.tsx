import { Divider } from "antd";
import { PiArrowCircleUpRightFill } from "react-icons/pi";

const services = [
  {
    nindex: "01/",
    names: " Web UI/UX Design",
    link: "lllllll",
  },
  {
    nindex: "02/",
    names: " Web UI/UX Design",
    link: "lllllll",
  },
  {
    nindex: "03/",
    names: "Web UI/UX Design",
    link: "lllllll",
  },
  {
    nindex: "04/",
    names: "Web UI/UX Design",
    link: "lllllll",
  },
];

const Services = () => {
  return (
    <div className=" flex justify-center  min-h-screen w-full py-4 gap-[18rem] ">
          <div className="w-[30%]">
            <div className="font-bold text-[4rem] leading-[1.1] mt-[6rem]">
              About Me
            </div>
            <div className="flex gap-3 mt-8">
              <hr className="bg-[#333333] w-20 h-[2px] mt-3" />

              <p className="text-base mb-2">
                Hi! I 'm a Software Developer excited about creating awesome
                digital solutions. Whether its building apps, fixing bugs or
                making existing systems run smoother, I 'm all about making
                technology work for you.{" "}
              </p>
          </div>
        </div>
        <div className="w-[25%] mt-[6rem]" >
        <h1 className="font-semibold text-base">Services I offer</h1>
          {services?.map((data: any, index: any) => (
            <>
              <Divider/>
              <div className="flex gap-3 justify-center font-semibold text-base">
                <div>{data?.nindex}</div>
                <div>
                  <div className="font-semibold text-[2.5rem]">{data?.names}</div>
                  <div className="flex justify-between mt-4">
                    <p className="font-normal">{data?.link}</p>
                    <PiArrowCircleUpRightFill color="#8873F0" size={44} />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
  );
};
export default Services;
