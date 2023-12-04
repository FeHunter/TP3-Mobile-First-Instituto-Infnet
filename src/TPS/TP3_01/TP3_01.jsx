import { Card } from '../Default/Card/Card';
import style from './TP3_01.module.css';

export function TP3_01() {
  const url =
    'https://bootcamp.infnet.edu.br/wp-content/uploads/sites/30/2020/06/marca-infnet.png';

  return (
    <Card>
      <h3>TP 3.1</h3>
      <p>Menu Horizontal Responsivo</p>
      <nav className={style.nav}>
        <ul className={style.navbar}>
          <li className={style.logo}>
            <a href="#">
              {/* alt="logo infnet" */}
              <img src={url} />
            </a>
          </li>
          <li className={style.navItem}>
            <a href="#">Início</a>
          </li>
          <li className={style.navItem}>
            <a href="#">Serviços</a>
          </li>
          <li className={style.navItem}>
            <a href="#">Contato</a>
          </li>
          <li className={style.toggle}>
            <a href="#">=</a>
          </li>
        </ul>
      </nav>
    </Card>
  );
}
