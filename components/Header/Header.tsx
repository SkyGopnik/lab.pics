import React from "react";
import Link from "next/link";

import style from "./Header.module.scss";

export class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <div className="container">
          <div className={style.headerWrapper}>
            <Link href="/">
              <a><img className={style.logo} src="/static/Logo.svg" alt="" /></a>
            </Link>
            <div className={style.menu}>
              <div className={style.item}>
                <a href="">Услуги</a>
              </div>
              <div className={style.item}>
                <a href="">Портфолио</a>
              </div>
              <div className={style.item}>
                <a href="">О нас</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
