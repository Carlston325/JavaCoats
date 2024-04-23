import BTN from "./BTN";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import InfoIcon from "@mui/icons-material/Info";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function Header() {
  return (
    <>
      <header>
        <div>
          <h2 className="subHeading">Java Coat</h2>

          <a href="">
            <BTN>
              <Inventory2Icon /> Products
            </BTN>
          </a>
          <BTN>
            <InfoIcon /> About us
          </BTN>
          <a href="#askUs">
            <BTN>
              <AlternateEmailIcon /> Contact us
            </BTN>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
