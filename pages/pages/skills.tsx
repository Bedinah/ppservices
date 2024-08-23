import { Divider } from "antd";
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
    <div className="h-full w-full p-4 2xl:p-0">
      <div className="container mx-auto">
        <div className="font-bold text-[2rem] xl:text-[3rem] text-[#8a7962] py-10 ">
          <div className="animate__animated animate__fadeInUp  animate__delay-3s">
            Skills
          </div>
        </div>
        <div className=" flex flex-wrap justify-around ">
          <div className="w-[15rem] shadow-xl p-10">
            <h1 className="text-lg font-semibold">Frontend</h1>
            <Divider style={{ borderColor: "#3f2202" }} />
            <ul className="text-base font-medium">
              <li>ReactJs</li>
              <li>NextJs</li>
              <li>TypeScript</li>
              <li>React Native</li>
            </ul>
          </div>
          <div className="w-[15rem] shadow-2xl p-10">
            <h1 className="text-lg font-semibold">Backend</h1>
            <Divider style={{ borderColor: "#3f2202" }} />
            <ul className="text-base font-medium">
              <li>NodeJs</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="w-[15rem] shadow-2xl p-10">
            <h1 className="text-lg font-semibold">Styling</h1>
            <Divider style={{ borderColor: "#3f2202" }} />
            <ul className="text-base font-medium">
              <li>Css</li>
              <li>Tailwinc css</li>
              <li>Styled components</li>
            </ul>
          </div>
          <div className="w-[15rem] shadow-2xl p-10">
            <h1 className="text-lg font-semibold">Others</h1>
            <Divider style={{ borderColor: "#3f2202" }} />
            <ul className="text-base font-medium">
              <li>React.Js</li>
              <li>Next.Js</li>
              <li>React Native</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[.5px] bg-[#3f2202] mt-28"></div>
      </div>
    </div>
  );
};
export default Experience;
