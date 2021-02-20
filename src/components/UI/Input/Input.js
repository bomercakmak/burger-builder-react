import classes from "./Input.module.css";

const Input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    
    case "input":
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );

      break;
    case "textarea":
      inputElement = (
        <textarea
          onChange={props.changed}
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
        onChange={props.changed}
          className={classes.InputElement}
          value={props.value}> 
          {props.elementConfig.options.map(option=> (
              <option key={option.value} value={option.value}> {option.displayValue}</option>
          ) )}
          </select>
      );
      break;
    default:
      inputElement = (
        <input
        onChange={props.changed}
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}></label>
      {inputElement}
    </div>
  );
};

export default Input;
