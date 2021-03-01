import React from "react";
import axios from 'axios';
import ScrollableAnchor from 'react-scrollable-anchor';

import style from './index.module.scss';

interface FormItem {
  value: string,
  error: string | null
}

interface IProps {}

interface IState {
  name: FormItem,
  href: FormItem
}

const defaultForm = {
  name: {
    value: '',
    error: null
  },
  href: {
    value: '',
    error: null
  }
};

export class FormSection extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      ...defaultForm
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  handleInputChange(e) {
    // Получаем значение нашего input
    const { target } = e;
    const { name, value } = target;

    let error = '';

    if (name === 'name') {
      if (!/^[a-zA-Zа-яА-ЯёЁ_-]{2,30}$/.test(value)) {
        error = 'Запрещённые символы';
      }
    }

    if (name === 'href') {
      if (!/^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/.test(value)) {
        error = 'Неправильная ссылка';
      }
    }

    this.setState({
      ...this.state,
      [name]: {
        value,
        error
      }
    });
  }

  async sendForm() {
    const inputs = ['name', 'href'];
    const errored = {};

    let isError = false;

    // Проверяем поля на наличие ошибок и пустоту
    inputs.forEach((name) => {
      const item = this.state[name];

      if (item.error === null || item.error) {
        if (!item.error) {
          errored[name] = {
            value: item.value,
            error: 'Обязательное поле'
          };
        }

        isError = true;
      }
    });

    // Если ошибок нет то отправляем форму
    if (!isError) {
      const { name, href } = this.state;

      await axios.post('/services/order', {
        name: name.value,
        href: href.value
      });

      this.setState({
        ...defaultForm
      });
    }

    this.setState({
      ...errored
    });
  }

  checkValid(error: string) {
    return error !== null ? (!error ? style.valid : style.error) : '';
  }

  render() {
    const { name, href } = this.state;

    return (
      <ScrollableAnchor id="form">
        <section className={style.form}>
          <div className="container">
            <img className={style.rightImg} src="/static/clouds/1.svg" alt="Облако-1" />
            <img className={style.leftImg} src="/static/clouds/2.svg" alt="Облако-2" />
            <div className={style.wrapper}>
              <img src="/static/form.svg" alt="Герой" />
              <div className={style.sendForm}>
                <div className={style.title}>Давайте сотрудничать</div>
                <div className={style.input}>
                  <label>
                    <div>Как Вас зовут?</div>
                    <input
                      className={this.checkValid(name.error)}
                      name="name"
                      type="text"
                      placeholder="Введите Ваше имя..."
                      value={name.value}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
                <div className={style.input}>
                  <label>
                    <div>Как с Вами связаться?</div>
                    <input
                      className={this.checkValid(href.error)}
                      name="href"
                      type="text"
                      placeholder="Введите ссылку на социальную сеть или E-mail..."
                      value={href.value}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
                <button onClick={this.sendForm}>Отправить</button>
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}
