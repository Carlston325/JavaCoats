import BTN from "./BTN";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import InfoIcon from "@mui/icons-material/Info";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";

function Navbar() {
  return (
    <>
      <header>
        <div>
          <h2 className="subHeading">JavaCoat</h2>
          <a href="/">
          <BTN>
            <HomeIcon /> Home
          </BTN>
          </a>
          <a href="/products">
          <BTN>
            <Inventory2Icon /> Products
          </BTN>
          </a>
          <a href="/about">
          <BTN>
            <InfoIcon /> About us
          </BTN>
          </a>
          <a href="/contact">
          <BTN>
            <AlternateEmailIcon /> Contact us
          </BTN>
          </a>
        </div>
      </header>
    </>
  );
}

export default Navbar;
