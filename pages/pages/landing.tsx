import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="flex flex-wrap justify-between pt-20 ">
        <div className="w-[40rem] ">
          <div className=" font-bold text-[3rem] text-center text-[#1E818E] my-16  ">
            Hello and Welcome !
          </div>
          <p className="text-xl font-light mt-40 ">
            I'm a passionate Software Engineer excited about creating awesome
            digital solutions. Whether it's building apps, fixing bugs, or
            making existing systems run smoother, I love pushing the boundaries
            of technology and innovating to solve problems.
          </p>
        </div>
        <div className="w-[50rem]">
          <div className="font-bold text-[3.5rem] leading-[1.1] text-center mb-14">
            I 'm Bazubagira, a{" "}
            <span className="text-[#1E818E]">passionate creative</span> software
            developer.
          </div>
          <Image
            className="float-right"
            src="/images/userimg.png"
            alt="profile image"
            width={350}
            height={350}
          />
        </div>
      </div>

      <span className="font-medium text-sm float-right mt-4">
        <i>"Nta muntu uguha agaciro, Agaciro ni wowe ukiha"</i>
      </span>
      <div className="w-full h-[.5px] bg-[#1E818E] mt-14"></div>
    </div>
  );
};
export default LandingPage;
