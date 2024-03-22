import { Divider } from "antd";
import { RiMessage2Fill } from "react-icons/ri";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { BsSendArrowUp } from "react-icons/bs";
import { TextField } from "@mui/material";

const ContactMe = () => {
  return (
    <div className="flex flex-wrap  gap-[16rem] w-full min-h-screen pt-10">
      <div>
        <div className="font-bold text-[3rem] text-[#1E818E]">Let's Discus</div>

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
        <p> 👋 say Hi !</p>
        <div className="flex gap-10">
          <TextField
            sx={{ width: "25rem", color: "red" }}
            required
            id="standard-required"
            label="Type your names"
            defaultValue="Hello my name is"
            variant="standard"
          />
          <TextField
            sx={{ width: "25rem" }}
            required
            id="standard-required"
            label="Type your email"
            defaultValue="My email :"
            variant="standard"
          />
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
