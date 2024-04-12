import AddDescrip from "./AddDescrip";

function Hero() {
  return (
    <div className="hero">
      <div>
        <h1 className="title">JavaCoats</h1>
        <AddDescrip
          spanTextOne="coffee"
          descripOne=" is not only a good beverage,"
        />
        <AddDescrip
          descripOne="It makes a great "
          spanTextTwo="skincare"
          descripTwo=" remedy"
        />
      </div>
    </div>
  );
}

export default Hero;
