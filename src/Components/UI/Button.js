import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      //props.type lets me access the button from AddUser.js, makes this button dynamic. || is used as a fallback for the built in button
      onClick={props.onClick}
      //onClick={props.onClick} forwards to onClick
    >
      {props.children}
    </button>
  );
};

export default Button;

//this will wrap the <button></button> in AddUser.js
//when I originally wrote the structure in AddUser.js, I used <button></button>, then I looped around and made this component

//props.children connects us to the button in AddUser.js, I did this in Card.js as well
