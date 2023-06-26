import React from "react";
import Style from "./Style";
import Container from "./Container";
import title from "./img/title2.svg";
import right from "./img/right.svg";
import Digit from "./img/digits.svg";
import imgTitle from "./img/respectTitle.svg";
import car1 from "./img/car1.png";
import car2 from "./img/car2.png";
import car3 from "./img/car3.png";
import jetour from "./img/jetourTitle.svg";
import lines from "./img/lines.png";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import tripTitle from "./img/tripTitle.svg";
import rightTrip from "./img/rightTrip.svg";
import prTitle from "./img/prizeTitle.svg";
import div from "./img/div.svg";
import imgs from "./img/forum.png";
import readTitle from "./img/readNews.svg";
import left from "./img/left.svg";
import rightArrow from "./img/rightArrow.svg";
import last from "./img/lastSection.svg";

const Main = () => {
  return (
    <Container>
      <Style>
        <div className="main">
          <div className="body text-start">
            <p className="title1 p-0 m-0">Наслаждайся жизнью,</p>
            <img src={title} alt="" className="mb-5" />
            <div className="d-flex justify-content-between align-items-center mt-5">
              <p className="text-light">
                Инновация <img src={right} className="ms-2" alt="" />
              </p>
              <p className="text-light w-50 m-0">
                Движимый инновациями и стремлением к совершенству, Chery Holding
                полон решимости стать лидером в каждой из своих областей и стать
                влиятельным и заслуживающим доверия брендом группы.
              </p>
            </div>
          </div>
          <div className="us">
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
            <div className="respect">
              <div className="d-flex justify-content-between mb-5 align-items-center">
                <img src={imgTitle} alt="" />
                <button className="btn">Наши продукты</button>
              </div>
              <div className="d-flex justify-content-between">
                <img src={car1} alt="" />
                <img src={car2} alt="" />
                <img src={car3} alt="" />
              </div>
            </div>
            <div className="jetour">
              <img src={jetour} alt="" className="mb-5" />
              <div className="video">
                <video
                  src={video}
                  className="vid"
                  height={500}
                  controls
                  autoPlay
                ></video>
              </div>
            </div>
          </div>
          <div className="trips">
            <img src={lines} className="w-100" alt="" />
            <div className="d-flex position-absolute trip">
              <div className="titles">
                <img src={tripTitle} alt="" />
                <div className="d-flex">
                  <p>Жизнеспособность</p>
                  <img src={rightTrip} alt="" />
                </div>
                <div className="d-flex">
                  <p>Предприимчивый</p>
                  <img src={rightTrip} alt="" />
                </div>
                <div className="d-flex">
                  <p>Сила действия</p>
                  <img src={rightTrip} alt="" />
                </div>
              </div>
              <div className="imgs">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
          <div className="prize">
            <div className="bodyPrize d-flex justify-content-between align-items-center">
              <div className="mb-5 ps-5">
                <img src={prTitle} alt="" className="mb-5" />
              </div>
              <div className="text-start ms-5">
                <div className="ms-5">
                  <h4 className="clr">2015</h4>
                  <h4 className="width">
                    Лучшее зарубежное имиджевое предприятие.
                  </h4>
                </div>
                <div className="ms-5">
                  <h4 className="clr mt-5">2016</h4>
                  <h4 className="width">
                    Лучшее зарубежное имиджевое предприятие.
                  </h4>
                </div>
              </div>
              <div className="text-start ms-5">
                <div className="ms-5">
                  <h4 className="clr">2020</h4>
                  <h4 className="width">
                    JETOUR X70, как самая продаваемая модель автомобиля.
                  </h4>
                </div>
                <div className="ms-5">
                  <h4 className="clr mt-5">2021</h4>
                  <h4 className="width">
                    Превзошли по продажам таких гигантов как Toyota и Huyundai.
                  </h4>
                </div>
              </div>
              <div>
                <img src={div} alt="" />
              </div>
            </div>
            <div className="forum d-flex justify-content-between">
              <div className="titlesForum">
                <p className="subTitle ms-5">Наш Блог</p>
                <img src={readTitle} alt="" className="ms-5" />
                <div className="d-flex align-items-center">
                  <img src={left} alt="" />
                  <div className="d-flex align-items-center">
                    <p className="subTitle ms-5 p-0 m-0">Читать больше</p>
                    <img src={rightArrow} alt="" className="ms-4" />
                  </div>
                </div>
              </div>
              <div className="imgs">
                <img src={imgs} alt="" />
              </div>
            </div>
            <img src={last} alt="" className="w-100" />
          </div>
        </div>
      </Style>
    </Container>
  );
};

export default Main;
