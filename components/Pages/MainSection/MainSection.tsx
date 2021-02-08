import React from "react";

import style from "./MainSection.module.scss";

export class MainSection extends React.Component {
  render() {
    return (
      <section className={style.main}>
        <div className={style.rightImg} />
        <div className="container">
          <div className={style.content}>
            <h1>
              <div className={style.noWordWrap}>
                <div>Помогаем</div>
                <div>бизнесу с</div>
              </div>
              <div className={style.wordWrap}>Помогаем бизнесу с</div>
              <div><span className={style.year}>2018</span> года</div>
            </h1>
            <h3>
              <div className={style.noWordWrap}>
                <div>Реализовали более 300 проектов</div>
                <div>и имеем 90% положительных отзывов</div>
              </div>
              <div className={style.wordWrap}>Реализовали более 300 проектов и имеем 90% положительных отзывов</div>
            </h3>
            <div className={style.action}>
              <button>Связаться с нами</button>
              <div className={style.arrow} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
