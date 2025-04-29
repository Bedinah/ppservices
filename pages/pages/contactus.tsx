import { Grid, TextField } from "@mui/material";
import { BsSend } from "react-icons/bs";
import Item from "antd/es/descriptions/Item";
import Image from "next/image";
import Codeimg from '../../public/images/code.jpeg'
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { RiTwitterXLine, RiLinkedinLine } from "react-icons/ri";
import { Divider, Space } from "antd";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPhonePortrait } from "react-icons/io";
import { BiHome } from "react-icons/bi";

const ContactMe = () => {
  return (
    <div className="w-full min-h-full mb-16">
      <div className="container mx-auto">
        <div className="font-bold text-[3rem] text-[#8a7962] py-10">
          <div className="animate__animated animate__fadeInUp  animate__delay-3s">
            Contact Me
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-[45%] ">
            <p className="text-base mb-4 font-medium">👋 say Hi !</p>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 4, md: 8 }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <Item>
                  {" "}
                  <TextField
                    sx={{
                      width: "20rem",
                      "& input": {
                        color: "#ececec",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#8f600e",
                      },
                      "&:hover .MuiInput-underline:before": {
                        borderBottomColor: "#8f600e",
                      },
                      "&:focus .MuiInput-underline:before": {
                        borderBottomColor: "#8f600e",
                      },
                    }}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />
                </Item>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Item>
                  <TextField
                    sx={{
                      width: "20rem",
                      "& input": {
                        color: "#ececec",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#8f600e",
                      },
                      "&:hover .MuiInput-underline:before": {
                        borderBottomColor: "#8f600e",
                      },
                      "&:focus .MuiInput-underline:before": {
                        borderBottomColor: "#8f600e",
                      },
                    }}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  {" "}
                  <TextField
                    sx={{
                      width: "20rem",
                      "& input": {
                        color: "#ececec",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#8f600e",
                      },
                      "&:hover .MuiInput-underline:before": {
                        borderBottomColor: "#8f600e",
                      },
                      "&:focus .MuiInput-underline:before": {
                        borderBottomColor: "#8f600e",
                      },
                    }}
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <TextField
                    sx={{
                      width: "20rem",
                      "& input": {
                        color: "#ececec",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#8f600e",
                      },
                      "&:hover .MuiInput-underline:before": {
                        borderBottomColor: "#8f600e",
                      },
                      "&:focus .MuiInput-underline:before": {
                        borderBottomColor: "#8f600e",
                      },
                    }}
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                  />
                </Item>
              </Grid>
            </Grid>
            <button className="bg-[#8a7962] text-[#3f2202] hover:bg-[#3f22024f] text-xl font-semibold py-3 px-8 rounded-md inline-flex items-center mt-4 float-right mr-6">
              <BsSend />
              <span className="px-4">Message</span>
            </button>
          </div>
          <div className="w-[45%] shadow-lg rounded-md  mt-4 flex gap-4">
            <Image className="w-[50%] h-full float-right" src={Codeimg} alt="myImg" />
            <div className="mx-[auto] my-[auto]">
              <Space style={{ color: '#3f2202', fontSize: '20px' }}>
                < SiInstagram />
                <RiTwitterXLine />
                <SiWhatsapp />
                <RiLinkedinLine />
              </Space>
              <Divider dashed />
              <div className="flex flex-col gap-2 text-[#3f2202] text-sm " style={{ color: '', fontSize: '20px' }}>
                <div className="flex gap-1"> < HiOutlineMail /> <p>bernabazubagira@gmail.com</p></div>
                <span><IoIosPhonePortrait /> <p>+250785994485</p></span>
                <BiHome />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
