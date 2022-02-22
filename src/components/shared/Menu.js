import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu({ activeMenu }) {
  const menuList = [
    { link: "/graph", title: "지지율 추이" },
    { link: "/keyword", title: "후보별 키워드" },
    { link: "/about", title: "프로젝트 설명" },
    { link: "/algorithm", title: "예측 알고리즘" },
  ];
  return (
    <ul className={styles.menu}>
      {menuList.map((page) => (
        <li className={styles.title}>
          <Link
            className={
              activeMenu === page.link.substring(1)
                ? styles.focused
                : styles.link
            }
            to={page.link}
          >
            {page.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
