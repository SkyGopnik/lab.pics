import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

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
          src: '/static/links/vk.svg',
          href: 'https://vk.com/lab.dsgn'
        },
        {
          title: 'Telegram',
          description: 'Сделаем крутые проекты вместе!',
          src: '/static/links/tg.svg',
          href: 'https://t.me/labdes'
        },
        {
          title: 'Behance',
          description: 'Это наше портфолио, оно классное!',
          src: '/static/links/bhance.svg',
          href: 'https://www.behance.net/labdes'
        },
        {
          title: 'Dribbble',
          description: 'Выкладываем работы в «Шотах» 1600×1200',
          src: '/static/links/dribbble.svg',
          href: 'https://dribbble.com/labdesign'
        }
      ]
    };
  }

  render() {
    const { links } = this.state;

    return (
      <ScrollableAnchor id="about">
        <section className={style.about}>
          <div className="container">
            <div className={style.wrapper}>
              <div className={style.info}>
                <div className={style.title}>Коротко о нас</div>
                <p><a href="https://vk.com/lab.dsgn" target="_blank"><span>Лаборатория</span></a> — дружная команда из крутых дизайнеров, способных решить любую Вашу задачу. Мы очень любим дизайн и с трепетом относимся к каждому проекту, сделанному нашими руками.</p>
                <p>С самого открытия студии мы помогаем клиентам развить их бизнес, создавая сайты и новые бренды.</p>
                <p>Мы специализируемся на веб-дизайне, но также всегда готовы сделать запоминающиеся логотипы, приятные оформления и многое другое!</p>
              </div>
              <div className={style.links}>
                <div className={style.title}>Следите за нами в соц.сетях</div>
                <div className={style.list}>
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
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}
