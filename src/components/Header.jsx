import Button from "@mui/material/Button";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import InfoIcon from "@mui/icons-material/Info";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function Header() {
  return (
    <>
      <header className="card">
        <div>
          <h2 className="subHeading">Java Coat</h2>

          <Button className="btn">
            <Inventory2Icon /> Products
          </Button>
          <Button className="btn">
            <InfoIcon /> About us
          </Button>
          <Button className="btn">
            <AlternateEmailIcon /> Contact us
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;
