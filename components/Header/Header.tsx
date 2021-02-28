import React from "react";
import classNames from 'classNames';
import Link from "next/link";

import style from "./Header.module.scss";

interface IProps {}

interface IState {
  isBackground: boolean,
  isHamburgerOpened: boolean
}

export class Header extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      isBackground: false,
      isHamburgerOpened: false
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({
        isBackground: pageYOffset > 0
      })
    });
  }

  render() {
    const { isBackground, isHamburgerOpened } = this.state;

    return (
      <header className={!isBackground ? style.header : `${style.header} ${style.headerBg}`}>
        <div className="container">
          <div className={style.headerWrapper}>
            <Link href="/">
              <a><img className={style.logo} src="/static/Logo.svg" alt="" /></a>
            </Link>
            <div className={style.menu}>
              <div className={style.item}>
                <a href="#portfolio">Портфолио</a>
              </div>
              <div className={style.item}>
                <a href="#services">Услуги</a>
              </div>
              <div className={style.item}>
                <a href="#about">О нас</a>
              </div>
            </div>
            <div className={!isHamburgerOpened ? style.mobileMenu : classNames(style.mobileMenu, style.mobileMenuActive)}>
              <div className={style.hamburger} onClick={() => this.setState({ isHamburgerOpened: !isHamburgerOpened })}>
                <div className={style.line} />
                <div className={style.line} />
                <div className={style.line} />
                <div className={style.line} />
              </div>
              <div className={style.links} onClick={() => this.setState({ isHamburgerOpened: !isHamburgerOpened })}>
                <a href="#portfolio">Портфолио</a>
                <a href="#services">Услуги</a>
                <a href="#about">О нас</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
