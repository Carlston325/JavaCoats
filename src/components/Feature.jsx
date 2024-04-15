import BTN from "./BTN";

function Feature(props) {
  return (
    <>
      <img src={props.img} id={"featureImage" + props.id} alt="feature image" />
      <div id={"feature" + props.id}>
        <h3>{props.title}</h3>
        <p>{props.descrip}</p>
      </div>
      <BTN id={"featureBTN" + props.id}>View Product</BTN>
    </>
  );
}

export default Feature;
