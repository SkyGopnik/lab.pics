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
                    <div
                      className={style.leftAnim}
                    />
                    {/*<div*/}
                    {/*  className={style.rightAnim}*/}
                    {/*/>*/}
                    Связаться с нами
                  </button>
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
