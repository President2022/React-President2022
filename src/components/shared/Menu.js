import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  const menuList = [
    { link: "/About", title: "프로젝트 설명" },
    { link: "/Algorithm", title: "예측 알고리즘" },
    { link: "/Graph", title: "지지율 추이" },
    { link: "/Keyword", title: "후보별 키워드" },
  ];
  return (
    <ul className={styles.menu}>
      {/* <li>
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
      </li> */}
      {menuList.map((page) => (
        <li className={styles.title}>
          <Link className={styles.link} to={page.link}>
            {page.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
