import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Header;
