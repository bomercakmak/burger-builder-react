import classes from "./Input.module.css";

const Input = (props) => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = <input className={classes.InputElement} {...props} />;
      break;
    case "textarea":
      inputElement = <textarea className={classes.InputElement} />;
      break;
    default:
      inputElement = <input className={classes.InputElement} />;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}></label>
      {inputElement}
    </div>
  );
};

export default Input;
