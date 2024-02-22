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
    <div className="h-full w-full px-12 py-4">
      <div className="flex justify-between">
        <div>
          <div className="w-[36rem]">
            <div className="font-semibold text-[3rem] leading-snug mt-[10rem] mb-6">
              services I <br /> Offer
            </div>
            <div className="flex gap-3">
              <hr className="bg-[#333333] w-20 h-[2px] mt-3" />

              <p className="text-base mb-2">
                Hi! I 'm a Software Developer excited about creating awesome
                digital solutions. Whether its building apps, fixing bugs or
                making existing systems run smoother, I 'm all about making
                technology work for you.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[35rem]" >
          {services?.map((data: any, index: any) => (
            <>
              <Divider/>
              <div className="flex gap-3 justify-center">
                <div>{data?.nindex}</div>
                <div>
                  <div className="font-semibold text-[2rem]">{data?.names}</div>
                  <div className="flex justify-between">
                    <p>{data?.link}</p>
                    <PiArrowCircleUpRightFill color="#8873F0" size={44} />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
