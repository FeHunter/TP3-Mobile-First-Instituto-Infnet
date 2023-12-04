import { Card } from '../Default/Card/Card';
import style from './TP3_02.module.css';
import styleBody from './Body.module.css';

export function TP3_02() {
  const url =
    'https://bootcamp.infnet.edu.br/wp-content/uploads/sites/30/2020/06/marca-infnet.png';

  return (
    <Card width="100%" height="auto">
      <h3>TP 3.2</h3>
      <p>Menu Horizontal Lateral Responsivo</p>
      <main className={styleBody.body}>
        <nav className={styleBody.aside}>
          <ul className={style.navbar}>
            <li class={style.logo}>
              <a href="#">
                <img src={url} alt="logo infnet" />
              </a>
            </li>
            <li className={style.navItem}>
              <a href="#">Início</a>
            </li>
            <li className={style.navItem}>
              <a href="#">Perfil</a>
            </li>
            <li className={style.navItem}>
              <a href="#">Postagens</a>
            </li>
            <li className={style.navItem}>
              <a href="#">Amigos</a>
            </li>
            <li className={style.navItem}>
              <a href="#">Fotos</a>
            </li>
            <li className={style.navItem}>
              <a href="#">Vídeos</a>
            </li>
            <li className={style.navItem}>
              <a href="#">Configurações</a>
            </li>
            <li className={style.toggle}>
              <a href="#">=</a>
            </li>
          </ul>
        </nav>
        <section className={styleBody.content}>
          <p>Conteúdo</p>
          <p>Conteúdo</p>
          <p>ConteúdoConteúdo</p>
        </section>
      </main>
    </Card>
  );
}
