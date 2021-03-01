import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

import style from "./index.module.scss";

export class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ScrollableAnchor id="form">
        <footer className={style.footer}>
          <div className={style.data}>
            <div className={style.menu}>
              <a href="#portfolio">Портфолио</a>
              <a href="#services">Услуги</a>
              <a href="#about">О нас</a>
            </div>
            <div className={style.contacts}>
              <div className={style.title}>Контакты</div>
              <a href="mailto:design@lab.pics">design@lab.pics</a>
              <a href="https://www.behance.net/labdes">Behance</a>
              <a href="https://t.me/labdes">Telegram</a>
              <a href="https://dribbble.com/labdesign">Dribbble</a>
              <a href="https://vk.com/lab.dsgn">VK</a>
            </div>
          </div>
          <img src="/static/FooterHero.svg" alt="Герой" />
        </footer>
      </ScrollableAnchor>
    );
  }
}
