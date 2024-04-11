function AddDescrip(props) {
  return (
    <p className="descriptions">
      <span>{props.spanTextOne}</span>
      {props.descripOne}
      <span>{props.spanTextTwo}</span>
      {props.descripTwo}
    </p>
  );
}

export default AddDescrip;
