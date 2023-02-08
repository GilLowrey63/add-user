import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;

//props.children let's me get the setup from AddUser.js and use it in this component
//since Card.js and AddUser.js are working together, I added two css modules with a template literal
//or `${} ${}` to the layman
