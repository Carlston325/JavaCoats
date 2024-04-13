import BTN from "./BTN";

import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import InfoIcon from "@mui/icons-material/Info";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import CopyrightIcon from "@mui/icons-material/Copyright";

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
          <BTN>
            <QuestionAnswerIcon />
          </BTN>
          <p>Enquires</p>
          <BTN>
            <InfoIcon />
          </BTN>
          <p>About us</p>
          <BTN>
            <AlternateEmailIcon />
          </BTN>
          <p>Contact us</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
