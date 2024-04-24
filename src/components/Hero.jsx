function Hero(props) {
  return (
    <div className="hero">
      <div>
        <h1 className="title">{props.title}</h1>
        {props.lineOne}
        {props.lineTwo}
      </div>
    </div>
  );
}

export default Hero;
