import React from "react";

import style from './index.module.scss';

export class FormSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={style.form}>
        <div className="container">
          {/*<img className={style.rightImg} src="/static/clouds/1.svg" alt="" />*/}
          {/*<img className={style.leftImg} src="/static/clouds/2.svg" alt="" />*/}
          <div className={style.wrapper}>
            <img src="/static/form.svg" alt="" />
            <div className={style.sendForm}>
              <h1>Давайте сотрудничать</h1>
              <div className={style.input}>
                <label>
                  <div>Как Вас зовут?</div>
                  <input
                    type="text"
                    placeholder="Введите Ваше имя..."
                  />
                </label>
              </div>
              <div className={style.input}>
                <label>
                  <div>Как с Вами связаться?</div>
                  <input
                    type="text"
                    placeholder="Введите ссылку на социальную сеть или E-mail..."
                  />
                </label>
              </div>
              <button>Отправить</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
