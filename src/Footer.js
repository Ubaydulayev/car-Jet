import React from "react";
import Style from "./Style";
import logo from "./img/footerLogo.svg";
import mess from "./img/footerMess.svg";

const Footer = () => {
  return (
    <Style>
      <div className="about">
        <div className="aboutCompany">
          <div className="infoCompany">
            <h2 className="title text-center p-5">
              Давайте вместе <br /> обсудим что-нибудь классное
            </h2>
            <p className="infoTitle text-center w-100 pb-5">начать</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="d-flex">
          <div className="text-start">
            <img src={logo} alt="" />
            <p className="infoTitle">
              Добро пожаловать в нашу быстро ростущую компанию по производству
              Китайских электромобилей
            </p>
            <img src={mess} alt="" />
          </div>
          <div className="me-5">
            <h4 className="title">Навигация</h4>
            <p className="infoTitle">О нас</p>
            <p className="infoTitle">Продукция</p>
            <p className="infoTitle">Блог</p>
            <p className="infoTitle">Инновация</p>
          </div>
          <div className="ms-5 me-5">
            <h4 className="title">Контакты</h4>
            <p className="infoTitle">г.Ташкент, Сергелийский район</p>
            <p className="infoTitle">+998 (78) 113 13 78</p>
            <p className="infoTitle">jetour@outlook.com</p>
          </div>
          <div className="ms-5">
            <h4 className="title">Будьте в курсе событий</h4>
            <div className="input-group mb-3 w-75">
              <input
                type="text"
                className="form-control bg-black text-light border-0"
                placeholder="example@gmail.com"
              />
              <div className="input-group-append">
                <button className="btn">
                Отправить
                </button>
              </div>
            </div>
            <p className="infoTitle">
              Вам на почту будут приходить новости и поставки новой продукции от
              нашей диллерской компании в Узбекистане
            </p>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <p className="infoTitle">Copyright © 2023 JETOUR.</p>
          <p className="infoTitle text-end">Правила использоваия </p>
        </div>
      </div>
    </Style>
  );
};

export default Footer;
