import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.menu}>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/About">프로젝트 설명</Link>
      </li>
      <li>
        <Link to="/Algorithm">예측 알고리즘</Link>
      </li>
      <li>
        <Link to="/Graph">지지율 추이</Link>
      </li>
      <li>
        <Link to="/Keyword">후보별 키워드</Link>
      </li>
    </div>
  );
}

export default Menu;
