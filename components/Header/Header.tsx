import React from "react";
import Link from "next/link";

import style from "./Header.module.scss";

interface IProps {}

interface IState {
  isBackground: boolean
}

export class Header extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      isBackground: false
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      console.log(pageYOffset);
      this.setState({
        isBackground: pageYOffset > 0
      })
    });
  }

  render() {
    const { isBackground } = this.state;

    return (
      <header className={!isBackground ? style.header : `${style.header} ${style.headerBg}`}>
        <div className="container">
          <div className={style.headerWrapper}>
            <Link href="/">
              <a><img className={style.logo} src="/static/Logo.svg" alt="" /></a>
            </Link>
            <div className={style.menu}>
              <div className={style.item}>
                <a href="">Услуги</a>
              </div>
              <div className={style.item}>
                <a href="">Портфолио</a>
              </div>
              <div className={style.item}>
                <a href="">О нас</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
