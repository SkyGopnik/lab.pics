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
  href: FormItem,
  isSuccess: boolean
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
      ...defaultForm,
      isSuccess: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  handleInputChange(e) {
    // Получаем значение нашего input
    const { target } = e;
    const { name, value } = target;

    let error = '';

    if (value.length === 0) {
      error = 'Обязательное поле';
    }
    // if (name === 'name') {
    //   if (!/([а-яА-яa-zA-zёЁ]+)+([а-яА-яa-zA-zёЁ]+)/ig.test(value)) {
    //     error = 'Запрещённые символы';
    //   }
    // }
    //
    // if (name === 'href') {
    //   if (!/^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/.test(value)) {
    //     error = 'Неправильная ссылка';
    //   }
    // }

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
        ...defaultForm,
        isSuccess: true
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
    const { name, href, isSuccess } = this.state;

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
                      placeholder="Введите Ваше имя"
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
                      placeholder="Ваш номер телефона или ссылка на соц. сеть"
                      value={href.value}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
                <button
                  className={isSuccess ? style.success : ''}
                  onClick={this.sendForm}
                  disabled={isSuccess}
                >
                  {!isSuccess ? (
                    <>
                      <div className={style.top}>Отправить</div>
                      <div className={style.bottom}>Отправить</div>
                    </>
                  ) : (
                    <>
                      <div className={style.top}>Отправлено</div>
                      <div className={style.bottom}>Отправлено</div>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}
