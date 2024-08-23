import { Grid, TextField } from "@mui/material";
import Item from "antd/es/descriptions/Item";

const ContactMe = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="container mx-auto">
        <div className="font-bold text-[3rem] text-[#8a7962] py-10">
          <div className="animate__animated animate__fadeInUp  animate__delay-3s">
            Contact Me
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-[30%] h-[50rem] border border-l-gray-600"></div>
          <div>
            <p>👋 say Hi !</p>
            <Grid container>
              <Grid>
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
                    required
                  />
                </Item>
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
                    label="Email"
                    variant="outlined"
                    required
                  />
                </Item>{" "}
              </Grid>
              <Grid>
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
                    required
                  />
                </Item>
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
                    label="Subject"
                    variant="outlined"
                    required
                  />
                </Item>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
