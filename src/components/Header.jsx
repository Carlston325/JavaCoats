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

          <BTN>
            <Inventory2Icon /> Products
          </BTN>
          <BTN>
            <InfoIcon /> About us
          </BTN>
          <BTN>
            <AlternateEmailIcon /> Contact us
          </BTN>
        </div>
      </header>
    </>
  );
}

export default Header;
