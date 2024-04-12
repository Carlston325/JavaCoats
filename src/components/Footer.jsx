import Button from "@mui/material/Button";
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
      <footer className="card footer">
        <div className="externalLinks">
          <Button>
            <XIcon />
          </Button>
          <p>Twitter</p>
          <Button>
            <InstagramIcon />
          </Button>
          <p>Instagram</p>
          <Button>
            <FacebookIcon />
          </Button>
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
