import classes from "./Header.module.css";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.profile}>
        <div>
          Alpha User
          <p className={classes.date}>Last Login: 20/05/2023, 12:08:51</p>
        </div>
        <span>
          <FaAngleDown />
        </span>
      </div>
    </div>
  );
};

export default Header;
