import React from "react";
import Link from "next/link";

import style from "./index.module.scss";

export class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <footer className={style.footer}>
        <div className={style.data}>
          <div className={style.menu}>
            <a href="#portfolio">Портфолио</a>
            <a href="#services">Услуги</a>
            <a href="#about">О нас</a>
          </div>
          <div className={style.contacts}>
            <div className={style.title}>Контакты</div>
            <a href="#">design@lab.pics</a>
            <a href="#">Behance</a>
            <a href="#">Instagram</a>
            <a href="#">Dribbble</a>
            <a href="#">VK</a>
          </div>
        </div>
        <img src="/static/FooterHero.svg" alt="" />

        {/*<div className="container">*/}
        {/*  1*/}
        {/*</div>*/}
      </footer>
    );
  }
}
