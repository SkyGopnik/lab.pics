import React from "react";

import style from './index.module.scss';

interface IProps {}

interface IState {
  links: Array<{
    title: string,
    description: string,
    src: string,
    href: string
  }>
}

export class AboutSection extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        {
          title: 'VK',
          description: 'Постим работы, рассказываем о них',
          src: '/static/links/vk.png',
          href: 'https://vk.com/lab.dsgn'
        },
        {
          title: 'Telegram',
          description: 'Сделаем крутые проекты вместе!',
          src: '/static/links/tg.png',
          href: 'https://t.me/labdes'
        },
        {
          title: 'Behance',
          description: 'Это наше портфолио, оно классное!',
          src: '/static/links/bhance.png',
          href: 'https://www.behance.net/labdes'
        },
        {
          title: 'Dribbble',
          description: 'Выкладываем работы в «Шотах» 1600×1200',
          src: '/static/links/dribbble.png',
          href: 'https://dribbble.com/labdesign'
        }
      ]
    };
  }

  render() {
    const { links } = this.state;

    return (
      <section className={style.about}>
        <div className="container">
          <div className={style.wrapper}>
            <div className={style.info}>
              <h1>Коротко о нас</h1>
              <p><span>Лаборатория</span> — дружная команда из крутых дизайнеров, способных решить любую Вашу задачу. Мы очень любим дизайн и с трепетом относимся к каждому проекту, сделанному нашими руками.</p>
              <p>С самого открытия студии мы помогаем клиентам развить их бизнес, создавая сайты и новые бренды.</p>
              <p>Мы специализируемся на веб-дизайне, но также всегда готовы сделать запоминающиеся логотипы, приятные оформления и многое другое!</p>
            </div>
            <div className={style.links}>
              {links.map((item, index) => (
                <a
                  className={style.item}
                  key={index}
                  href={item.href}
                  target="_blank"
                >
                  <img src={item.src} alt={item.title} />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
