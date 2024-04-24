function AddDescrip(props) {
  return (
    <p className="descriptions">
      <span>{props.spanTextOne}</span>
      {props.descripOne}
      <span>{props.spanTextTwo}</span>
      {props.descripTwo}
      <span>{props.spanTextThree}</span>
    </p>
  );
}

export default AddDescrip;
