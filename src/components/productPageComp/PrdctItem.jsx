import BTN from "../BTN";

function PrdctItem(props) {
  return (
    <>
      <div id={"product"+ props.id} className={"productContainer"}>
        <img
          src={props.img}
          id={"productIMG" + props.id}
          alt="product image"
        />
        <div id={"productInfo" + props.id}>
          <h3>{props.title}</h3>
          <p>{props.descrip}</p>
          <p className="priceTag">{props.price}</p>
        </div>
        <BTN id={"productBTN" + props.id} href="/" className="btn">
          BUY
        </BTN>
      </div>
    </>
  );
}

export default PrdctItem;
