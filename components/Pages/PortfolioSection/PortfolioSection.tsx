import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import style from './PortfolioSection.module.scss';

interface IProps {}

interface IState {
  scrollBlock: number
}

export class PortfolioSection extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      scrollBlock: 0
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', (e) => {
      const fromY = document.getElementById('main-section').offsetHeight;
      console.log('----');
      console.log(document.getElementById('main-section').offsetHeight);
      console.log(pageYOffset);

      this.setState({
        scrollBlock: pageYOffset > fromY + 50 ? pageYOffset - fromY + 50 : 0
      })
    });
  }

  render() {
    const { scrollBlock } = this.state;

    return (
      <section className={style.portfolio}>
        <div className="container">
          <div className={style.portfolioWrapper}>
            <div className={style.scroll} onClick={() => this.setState({ scrollBlock: scrollBlock + 50 })}>
              {/*<motion.div animate={{ y: scrollBlock }}>1</motion.div>*/}
              <div style={{
                position: "sticky",
                top: 90
              }}>123</div>
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
            </div>
          </div>
        </div>
      </section>
    );
  }
}
