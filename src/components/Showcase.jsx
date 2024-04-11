import Button from "./Button";

function Showcase(props) {
  return (
    <div className="card">
      <h3>Title</h3>
      <img src={props.img} alt="website img" />
      <p>{props.descrip}</p>
      <Button url="none" class="btn viewWork" name="View My Work" />
    </div>
  );
}

export default Showcase;
