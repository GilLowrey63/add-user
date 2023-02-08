import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;

//bringing in users via props and mapping them... via map()
//users in an object with name and age property

//the component is able to generate new html elements, the li

//real nice having css modules so I can style <Card></Card> differently here

//line 9, id is unique for every entry
