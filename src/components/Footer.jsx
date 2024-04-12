import Button from "@mui/material/Button";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import InfoIcon from "@mui/icons-material/Info";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import CopyrightIcon from "@mui/icons-material/Copyright";

import { styled } from "@mui/material/styles";

const BTN = styled(Button)({
  fontSize: 12,
  "&:hover": {
    backgroundColor: "rgb(255 193 7)",
    borderColor: "rgb(255 140 7)",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

function Footer() {
  return (
    <>
      <footer>
        <div className="externalLinks">
          <BTN>
            <XIcon />
          </BTN>
          <p>Twitter</p>
          <BTN>
            <InstagramIcon />
          </BTN>
          <p>Instagram</p>
          <BTN>
            <FacebookIcon />
          </BTN>
          <p>Facebook</p>
        </div>
        <div className="copyright">
          <CopyrightIcon />
          <p>JavaCoats{new Date().getFullYear()}</p>
        </div>
        <div className="internalLinks">
          <QuestionAnswerIcon />
          <p>Enquires</p>
          <InfoIcon />
          <p>About us</p>
          <AlternateEmailIcon />
          <p>Contact us</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
