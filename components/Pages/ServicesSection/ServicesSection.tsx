import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

import style from "./ServicesSection.module.scss";

interface IProps {}

interface IState {
  services: Array<{
    title: string,
    description: string,
    price: number
  }>
}

export class ServicesSection extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      services: [
        {
          title: 'Логотипы',
          description: 'Развивайте свой бренд, а мы поможем Вам в этом',
          price: 5250
        },
        {
          title: 'Мобильное приложение',
          description: 'Расширяйте свой бизнес, с помощью мобильных приложений',
          price: 14800
        },
        {
          title: 'Лендинги',
          description: 'Решайте задачи с помощью веб-сайтов, созданных под Вашу аудиторию',
          price: 14800
        },
        {
          title: 'Сайт повышенной сложности',
          description: 'Интернет-магазины, корпоративные сайты, системы и так далее',
          price: 27800
        },
        {
          title: 'Оформление соц.сетей',
          description: 'Поможем оформить Вашу любимую социальную сеть',
          price: 3750
        },
        {
          title: 'Разработка на Tilda',
          description: 'Сделаем полноценный сайт на Tilda',
          price: 5200
        },
        {
          title: 'Печатная продукция',
          description: 'Дизайн печатной продукции обговаривается индивидуально',
          price: 1400
        }
      ]
    };
  }

  render() {
    const { services } = this.state;

    return (
      <ScrollableAnchor id="services">
        <section className={style.services}>
          <div className="container">
            {services.map((item, index) => (
              <div key={index}>
                <a className={style.item} href="#form">
                  <div className={style.content}>
                    <h1 className={style.title}>{item.title}</h1>
                    <h4 className={style.description}>
                      <div>{item.description}</div>
                      <div className={style.price}>от {item.price.toLocaleString()}₽</div>
                    </h4>
                    <h4 className={style.price}>от {item.price.toLocaleString()}₽</h4>
                  </div>
                </a>
                {(index !== services.length - 1) && <div className={style.separator} />}
              </div>
            ))}
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}
