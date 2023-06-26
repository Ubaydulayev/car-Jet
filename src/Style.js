import styled from "styled-components";

const Style = styled.div`
  background: black;
  .head {
    padding: 40px 140px;
    img {
      width: 10%;
    }
    .headTitle {
      text-transform: uppercase;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      line-height: 14px;
      font-size: 12px;
      color: white;
      transition: 0.1s;
      margin: 0;
      padding: 0;
    }
    .headTitle:hover {
      color: #ff4a17;
      transition: 0.1s;
    }
  }

  .body {
    padding: 200px 125px;
    .bodyTitle {
      text-transform: uppercase;
      font-family: "Armino", sans-serif;
      font-weight: 700;
      line-height: 55px;
      font-size: 30px;
      color: white;
      margin: 0;
      padding: 0;
    }
    .bodySubTitle1 {
      text-transform: uppercase;
      font-family: "Armino", sans-serif;
      font-weight: 400;
      line-height: 14px;
      font-size: 14px;
      color: #999696;
      margin: 0;
      padding: 0;
    }
    hr {
      width: 15px;
      color: white;
      transform: rotate(90deg);
      margin: 0px 10px 0px 0px;
      font-weight: 600;
    }
    .bodySubTitle2 {
      text-transform: uppercase;
      font-family: "Armino", sans-serif;
      font-weight: 400;
      line-height: 14px;
      font-size: 14px;
      color: white;
      margin: 0;
      padding: 0;
    }
    margin-bottom: 190px;
  }
  .about {
    background: #2b2b2b;
    padding: 50px 90px;
    .info {
      margin-top: 80px;
      .subTitle {
        color: #999696;
        text-align: start;
      }
      .title {
        color: #fefefe;
        font-weight: 600;
        text-align: start;
        font-size: 50px;
      }
      .infoTitle {
        text-align: start;
        color: #999696;
        width: 70%;
      }
      hr {
        border: 2px solid red;
        width: 10%;
      }
    }
    .aboutCompany {
      margin-top: 110px;
      padding: 50px;
      background: black;
      border-radius: 30px;
      .title {
        color: #fefefe;
        font-weight: 600;
        text-align: start;
        font-size: 50px;
      }
      .infoTitle {
        text-align: start;
        color: #999696;
        width: 75%;
        transition: 0.1s;
      }
      .infoTitle:hover {
        color: #ff4a17;
        transition: 0.1s;
      }
    }
    .history {
      margin-top: 130px;
      padding: 0px;
      .info {
        margin-left: 250px;
      }
    }
  }

  .main {
    .body {
      padding: 100px 140px;
      .title1 {
        font-size: 55px;
        font-weight: 700;
        color: white;
        text-align: start;
      }
      img {
        margin-left: 140px;
      }
    }
    .us {
      background: #2b2b2b;
      padding: 90px 90px;
      .aboutCompany {
        position: absolute;
        padding: 50px;
        top: 75%;
        right: 10%;
        left: 10%;
        background: black;
        border-radius: 30px;
        .title {
          color: #fefefe;
          font-weight: 600;
          text-align: start;
          font-size: 50px;
        }
        .infoTitle {
          text-align: start;
          color: #999696;
          width: 75%;
        }
      }
      .history {
        margin-top: 130px;
        padding: 0px;
        .info {
          margin-left: 250px;
        }
      }
      .respect {
        margin-top: 250px;
        .btn {
          background: #484848;
          color: #999696;
          border-radius: 30px;
          font-weight: 700;
          font-size: 14px;
          font-family: "Arimo", sans-serif;
          height: 60px;
          width: 15%;
          text-transform: uppercase;
        }
        .btn:hover {
          color: white;
          background: #ff4a17;
        }
      }
      .jetour {
        margin-top: 190px;
        .video {
          border-radius: 30px;
          padding: 20px;
          .vid {
            border-radius: 30px;
          }
        }
      }
    }
    .trips {
      .trip {
        top: 330%;
        left: 10%;
        .titles {
          color: white;
          p {
            margin-right: 70px;
          }
          p:hover {
            text-decoration: line-through;
            color: #ff4a17;
          }
        }
        img {
          margin-bottom: 150px;
        }
      }
    }
    .prize {
      padding: 100px 0px 0px 0px;
      background: #2b2b2b;
      .bodyPrize {
        .clr {
          color: #ff4a17;
          margin-bottom: 15px;
        }
        .width {
          width: 65%;
          color: white;
        }
      }
      .forum {
        margin-top: 300px;
        .subTitle {
          color: #999696;
          text-align: start;
          font-weight: 600;
        }
        .subTitle:hover {
          color: #ff4a17;
        }
      }
    }
  }

  .footer {
    padding: 40px 90px;
    background: #2b2b2b;
    .App {
      text-align: start;
    }
    .btn {
      background: #484848;
      color: #999696;
      border-radius: 10px;
      font-weight: 700;
      font-size: 14px;
      font-family: "Arimo", sans-serif;
      height: 40px;
      width: 100%;
      text-transform: uppercase;
    }
    .btn:hover {
      color: white;
      background: #ff4a17;
    }
    .title {
      color: #fefefe;
      font-weight: 700;
      text-align: start;
      font-size: 18px;
    }
    .infoTitle {
      text-align: start;
      color: #999696;
      width: 70%;
    }
    .infoTitle:hover {
      color: #ff4a17;
      transition: 0.1s;
    }
    hr {
      border: 2px solid #999696;
      width: 100%;
    }
  }
`;

export default Style;
