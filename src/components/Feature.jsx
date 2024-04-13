import BTN from "./BTN";

const features = [
  {
    title: "Product 1",
    descrip: "This is a description of product 1",
    img: "./images/placeholder-image-2.png",
  },
  {
    title: "Product 2",
    descrip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
    img: "./images/placeholder-image-2.png",
  },
  {
    title: "Product 3",
    descrip: "This is a description of product 3",
    img: "./images/placeholder-image-2.png",
  },
];

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
export { features };
