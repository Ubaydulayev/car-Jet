import React from "react";
import Container from "./Container";
import Style from "./Style";
import img1 from "./img/infoPic1.png";
import img2 from "./img/infoPic2.png";
import img3 from "./img/infoPic3.png";
import Digit from "./img/digits.svg";
import historyImg from "./img/historyImg.png";

const Home = () => {
  return (
    <Container>
      <Style>
        <div className="body">
          <h1 className="bodyTitle">О нас</h1>
          <div className="d-flex justify-content-center">
            <p className="bodySubTitle1">Главная</p>
            <hr />
            <p className="bodySubTitle2">О нас</p>
          </div>
        </div>
        <div className="about">
          <div className="info d-flex">
            <div className="titles">
              <p className="subTitle">Про JETOUR</p>
              <h2 className="title">О нас</h2>
              <p className="infoTitle">
                Холдинговая группа Chery была основана 20 октября 2010 года,
                расположена в экономическом и Зона технологического развития,
                Аньхой, Китай. Подчиненная инвестиционная отрасль включает в
                себя различные сегменты бизнеса, включая автомобили,
                производство автозапчастей и НИОКР, судостроение, финансовые
                инвестиции, торговлю услугами и т.д., охватывающие около 80
                стран и регионов по всему миру. В настоящее время в компании
                работает более 48000 сотрудников, а общий объем активов
                составляет более 120 миллиардов юаней.
              </p>
              <hr />
            </div>
            <img src={img1} alt="" />
          </div>
          <div className="infoPic d-flex mt-5 justify-content-between">
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          <div className="aboutCompany d-flex justify-content-between">
            <div className="infoCompany">
              <h2 className="title">О Компании</h2>
              <p className="infoTitle">
                "JETOUR" - это серия автомобильных продуктов, выпущенных
                холдинговой группой Chery 22 января 2018 года. Придерживаясь
                концепции путешествия + стратегия, путешествия + рынок.
              </p>
            </div>
            <div className="statistic">
              <img src={Digit} alt="" />
            </div>
          </div>
          <div className="history d-flex justify-content-between">
            <div className="historyImg">
              <img src={historyImg} alt="" />
            </div>
            <div className="info">
              <p className="subTitle">История JETOUR</p>
              <h2 className="title">История</h2>
              <p className="infoTitle">
                "JETOUR" - это серия автомобильных продуктов, выпущенных
                холдинговой группой Chery 22 января 2018 года. Придерживаясь
                концепции путешествия + стратегия, путешествия + рынок.
              </p>
              <p className="infoTitle mt-4">
                22 января 2018 года холдинговая группа Chery выпустила серию
                продуктов JETOUR в сегменте рынка "путешествия+", а в Пекине был
                представлен первый 7-местный внедорожник X70/S. После многих лет
                разработок компания JETOUR стремится создать хороший автомобиль
                для жизни современной молодежи, который проявит их
                индивидуальность и определит путешествие совместными действиями.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </Style>
    </Container>
  );
};

export default Home;
