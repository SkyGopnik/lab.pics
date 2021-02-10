import React from "react";
import Link from "next/link";

import style from './PortfolioSection.module.scss';

export class PortfolioSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={style.portfolio}>
        <div className="container">
          <div className={style.portfolioWrapper}>
            <div className={style.scroll}>
              <div><img src="/static/portfolio/1.png" alt="" /></div>
              <div><img src="/static/portfolio/2.png" alt="" /></div>
              <div><img src="/static/portfolio/3.png" alt="" /></div>
            </div>
            <div className={style.list}>
              <div className={style.item}>
                <h4 className={style.subHeader}>Что за проект</h4>
                <h1 className={style.header}>Название проекта</h1>
                <h3 className={style.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus malesuada bibendum cursus molestie orci est ligula. Sed amet maecenas vitae ridiculus lobortis est dui.
                </h3>
                <Link href="/">
                  <a className={style.link}>К проекту</a>
                </Link>
              </div>
              <div className={style.item}>
                <h4 className={style.subHeader}>Что за проект</h4>
                <h1 className={style.header}>Название проекта</h1>
                <h3 className={style.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus malesuada bibendum cursus molestie orci est ligula. Sed amet maecenas vitae ridiculus lobortis est dui.
                </h3>
                <Link href="/">
                  <a className={style.link}>К проекту</a>
                </Link>
              </div>
              <div className={style.item}>
                <h4 className={style.subHeader}>Что за проект</h4>
                <h1 className={style.header}>Название проекта</h1>
                <h3 className={style.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus malesuada bibendum cursus molestie orci est ligula. Sed amet maecenas vitae ridiculus lobortis est dui.
                </h3>
                <Link href="/">
                  <a className={style.link}>К проекту</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
