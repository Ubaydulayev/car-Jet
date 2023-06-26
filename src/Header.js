import React from "react";
import Style from "./Style";
import logo from "./img/logoJetour.png";

const Header = () => {
  return (
    <Style>
      <div className="d-flex head justify-content-between align-items-center">
        <img src={logo} alt="" />
        <p className="headTitle">главная</p>
        <p className="headTitle">О нас</p>
        <p className="headTitle">ПРОДУКЦИЯ</p>
        <p className="headTitle">бЛОГ</p>
        <p className="headTitle">Инновации</p>
        <p className="headTitle">Контакты</p>
      </div>
    </Style>
  );
};

export default Header;
