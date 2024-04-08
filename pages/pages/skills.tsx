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
    <div className="h-full w-full">
      <div className="font-bold text-[3rem] text-[#1E818E]">Skills</div>
      <div className=" flex flex-wrap justify-around">
        <div className="w-[15rem] shadow-2xl p-10">
          <h1 className="text-lg font-semibold">Frontend</h1>
          <Divider style={{ borderColor: "#1E818E" }} />
          <ul className="text-base font-medium">
            <li>ReactJs</li>
            <li>NextJs</li>
            <li>TypeScript</li>
            <li>React Native</li>
          </ul>
        </div>
        <div className="w-[15rem] shadow-2xl p-10">
          <h1 className="text-lg font-semibold">Backend</h1>
          <Divider style={{ borderColor: "#1E818E" }} />
          <ul className="text-base font-medium">
            <li>NodeJs</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="w-[15rem] shadow-2xl p-10">
          <h1 className="text-lg font-semibold">Styling</h1>
          <Divider style={{ borderColor: "#1E818E" }} />
          <ul className="text-base font-medium">
            <li>Css</li>
            <li>Tailwinc css</li>
            <li>Styled components</li>
          </ul>
        </div>
        <div className="w-[15rem] shadow-2xl p-10">
          <h1 className="text-lg font-semibold">Others</h1>
          <Divider style={{ borderColor: "#1E818E" }} />
          <ul className="text-base font-medium">
            <li>React.Js</li>
            <li>Next.Js</li>
            <li>React Native</li>
            <li>TypeScript</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[.5px] bg-[#1E818E] mt-28"></div>
    </div>
  );
};
export default Experience;
