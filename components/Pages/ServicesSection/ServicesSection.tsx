import React from "react";
import classNames from 'classnames';

import style from "./ServicesSection.module.scss";

export class ServicesSection extends React.Component {
  render() {
    return (
      <section className={style.services}>
        <div className={style.item} style={{ backgroundColor: "#F4F6FC" }}>
          <h1 className={style.name}>Разработка логотипа</h1>
          <h4 className={style.price}>4500₽, от 3 дней</h4>
          <button>Подробнее</button>
        </div>
        <div className={style.smallWrapper}>
          <div className={style.item} style={{ backgroundColor: "#F0FAF5" }}>
            <h1 className={classNames(style.name, style.noneAdapt)}>
              <div>Оформление</div>
              <div>соц.сети</div>
            </h1>
            <h1 className={classNames(style.name, style.adapt)}>Оформление соц.сети</h1>
          </div>
          <div className={style.item} style={{ backgroundColor: "#FCF8F2" }}>
            <h1 className={classNames(style.name, style.noneAdapt)}>
              <div>Сайт на</div>
              <div>Tilda</div>
            </h1>
            <h1 className={classNames(style.name, style.adapt)}>Сайт на Tilda</h1>
          </div>
        </div>
        <div className={style.item} style={{ backgroundColor: "#F4F6FC" }}>
          <h1 className={style.name}>Веб-сайт, приложения</h1>
          <h4 className={style.price}>От 14800₽, от 2 недель</h4>
          <button>Сделать заказ</button>
        </div>
      </section>
    );
  }
}
