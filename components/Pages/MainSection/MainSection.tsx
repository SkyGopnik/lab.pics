import React from "react";
import {motion} from "framer-motion";
import ScrollableAnchor from 'react-scrollable-anchor';

import style from "./MainSection.module.scss";

interface IProps {}

interface IState {
  test: string
}

export class MainSection extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      test: '0%'
    };
  }

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
                  <button>
                    <div className={style.top}>Связаться с нами</div>
                    <div className={style.bottom}>Связаться с нами</div>
                  </button>
                </a>
                <div className={style.arrow} />
              </div>
              <a href="#portfolio">
                <div className={style.swipe}>
                  <h3>Свайп вниз</h3>
                  <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L9 7.93934L16.4697 0.46967C16.7626 0.176777 17.2374 0.176777 17.5303 0.46967C17.8232 0.762563 17.8232 1.23744 17.5303 1.53033L9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z" fill="#006BFF"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}
