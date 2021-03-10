import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import Link from "next/link";

import style from './PortfolioSection.module.scss';

interface IProps {}

interface IState {
  portfolio: Array<{
    header: string,
    subHeader: string,
    description: string,
    link: string,
    img: {
      web: string,
      mobile: string
    }
  }>
}

export class PortfolioSection extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      portfolio: [

        {
          header: 'Nipbox',
          subHeader: 'Магазин японских сладостей',
          description: 'Наша команда знает толк и в работе с определённой символикой. Так, в дизайн проекте от «Nipbox» — магазина японских сладостей – мы использовали каллиграфию страны восходящего солнца, а также добавили элементы японских иероглифов в русский алфавит. Получилось эффектно, приятно и самое главное «сладко».',
          link: '',
          img: {
            web: '/static/portfolio/4.png',
            mobile: '/static/portfolio/4_mobile.png'
          }
        },
        {
          header: 'Neowin',
          subHeader: 'Онлайн казино с разнообразием азартных игр',
          description: 'Каким должен быть сайт? Удобным в использовании, комфортным для пользователя, минималистичным во всех смыслах и адаптивным для разных платформ. Таким сайтом стал и ещё один проект нашей команды — «Neowin». Казино, азарт и хороший дизайн. Что может быть лучше?',
          link: '',
          img: {
            web: '/static/portfolio/1.png',
            mobile: '/static/portfolio/1_mobile.png'
          }
        },
        {
          header: 'О, Сургут!',
          subHeader: 'Городской портал с бесконечной лентой',
          description: 'Бесконечная лента один из признаков современных соцсетей. Нейросеть подстраивается под ваши интересы, оценивает просмотры и лайки. Команду «Лаборатория» не обошла и работа по созданию такого типа приложения. UI и UX составляющие полноценно проработаны, а заказчик — городской портал «О,Сургут!» — доволен.',
          link: '',
          img: {
            web: '/static/portfolio/2.png',
            mobile: '/static/portfolio/2_mobile.png'
          }
        },
        {
          header: 'Риф',
          subHeader: 'Компания по строительству и обслуживанию бассейнов',
          description: 'Логотип – это ваш фирменный товарный знак, определяющий визуал проекта. «Риф» – компания по строительству и обслуживанию бассейнов, что мы и отобразили в символе нашего заказчика. Индивидуальный шрифт, выполненный с нуля, по толщине и форме похож на саму каплю, а также символизирует взаимодействие с водой.',
          link: '',
          img: {
            web: '/static/portfolio/3.png',
            mobile: '/static/portfolio/3_mobile.png'
          }
        }
      ]
    };
  }

  render() {
    const { portfolio } = this.state;

    return (
      <ScrollableAnchor id="portfolio">
        <section className={style.portfolio}>
          <div className="container">
            <div className={style.web}>
              <div className={style.scroll}>
                {portfolio.map((item, index) => (
                  <div key={index}><img src={item.img.web} alt={item.header} /></div>
                ))}
              </div>
              <div className={style.list}>
                {portfolio.map((item, index) => (
                  <div key={index} className={style.item}>
                    <h4 className={style.subHeader}>{item.subHeader}</h4>
                    <div className={style.header}>{item.header}</div>
                    <h3 className={style.description}>{item.description}</h3>
                    <Link href={item.link}>
                      <a className={style.link}>К проекту</a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className={style.mobile}>
              {portfolio.map((item, index) => (
                <div key={index} className={style.item}>
                  <img src={item.img.mobile} alt={item.header} />
                  <h4><b>{item.header}</b> - {item.description}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}
