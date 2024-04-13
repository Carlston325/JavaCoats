import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const BTN = styled(Button)({
  color: "white",
  height: "42px",
  fontSize: "12px",
  "&:hover": {
    color: "rgb(255 193 7)",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
});

export default BTN;
