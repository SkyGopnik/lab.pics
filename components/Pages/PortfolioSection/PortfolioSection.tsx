import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import Link from "next/link";

import style from './PortfolioSection.module.scss';

export class PortfolioSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableAnchor id="portfolio">
        <section className={style.portfolio}>
          <div className="container">
            <div className={style.web}>
              <div className={style.scroll}>
                <div><img src="/static/portfolio/1.png" alt="Портфолио-1" /></div>
                <div><img src="/static/portfolio/2.png" alt="Портфолио-2" /></div>
                <div><img src="/static/portfolio/3.png" alt="Портфолио-3" /></div>
                <div><img src="/static/portfolio/4.png" alt="Портфолио-4" /></div>
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
            <div className={style.mobile}>
              <div className={style.item}>
                <img src="/static/portfolio/mobile_1.jpg" alt="Портфолио-1" />
                <h4><b>Genesis Vision</b> - платформа доверительного управления инвестициями</h4>
              </div>
              <div className={style.item}>
                <img src="/static/portfolio/mobile_2.jpg" alt="Портфолио-2" />
                <h4><b>Genesis Vision</b> - платформа доверительного управления инвестициями</h4>
              </div>
              <div className={style.item}>
                <img src="/static/portfolio/3.png" alt="Портфолио-3" />
                <h4><b>Genesis Vision</b> - платформа доверительного управления инвестициями</h4>
              </div>
              <div className={style.item}>
                <img src="/static/portfolio/4.png" alt="Портфолио-4" />
                <h4><b>Genesis Vision</b> - платформа доверительного управления инвестициями</h4>
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}
