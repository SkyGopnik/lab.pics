import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

import style from "./MainSection.module.scss";

export class MainSection extends React.Component {
  render() {
    return (
      <ScrollableAnchor id="main">
        <section id="main-section" className={style.main}>
          <div className={style.rightImg} />
          <div className="container">
            <div className={style.content}>
              <h1>Помогаем бизнесу с <span className={style.year}>2018</span> года</h1>
              <h3>Реализовали более 300 проектов и имеем 90% положительных отзывов</h3>
              <div className={style.action}>
                <a href="#form">
                  <button>Связаться с нами</button>
                </a>
                <div className={style.arrow} />
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}
