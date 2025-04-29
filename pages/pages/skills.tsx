import { Divider } from "antd";

const skill = [
  {
    title: "Frontend",
    skill1: "ReactJs",
    skill2: "NextJs",
    skill3: "TypeScript",
    skill4: "React Native",
  },
  {
    title: "Backend",
    skill1: "NodeJs",
    skill2: "MongoDB",
  },
  {
    title: "Styling",
    skill1: "Css",
    skill2: "Tailwinc css",
    skill3: "Styled components",
  },
  {
    title: "Others",
    skill1: "Agile Methodologies",
    skill2: "Communication skills",
    skill3: "Cross-functional collaboration skills",
  },
];

const SkillsExperience = () => {
  return (
    <div className="h-full w-full p-4 2xl:p-0">
      <div className="container mx-auto">
        <div className="font-bold text-[2rem] xl:text-[3rem] text-[#8a7962] py-10 ">
          <div className="animate__animated animate__fadeInUp  animate__delay-3s">
            Skills
          </div>
        </div>
        <div className=" flex flex-wrap justify-around ">
          {skill?.map((data, index) => (
            <>
              <div key={index} className="w-[20rem] h-[15rem] rounded-md p-10" style={{ backgroundColor: '#e5e2d7', boxShadow: '5px 5px 2px #8a7962 inset' }}>
                <h1 className="text-lg font-semibold">{data?.title}</h1>
                <Divider style={{ borderColor: "#3f2202" }} />
                <ul className="text-base font-medium">
                  <li>{data?.skill1}</li>
                  <li>{data?.skill2}</li>
                  <li>{data?.skill3}</li>
                  <li>{data?.skill4}</li>
                </ul>
              </div>
            </>
          ))}
        </div>
        <div className="w-full h-[.5px] bg-[#3f2202] mt-28"></div>
      </div>
    </div>
  );
};
export default SkillsExperience;
