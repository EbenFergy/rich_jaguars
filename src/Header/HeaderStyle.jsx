import styled from "styled-components";
import completeHeaderImg from "../assets/HeaderMainBG.png";

const HeaderStyle = styled.div`
  background-color: rgb(10, 22, 38);
  height: 100vh;
  background-image: url(${completeHeaderImg});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  /* border: 2px solid red; */
  margin: 0;
  padding-bottom: 4rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .nav-links,
  .connect_wallet,
  .socialMedia {
    display: none;
  }

  .logooff {
    width: 7rem;
  }

  .socialMedia {
    position: absolute;
    right: 1rem;
    top: 4rem;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    /* border: 2px solid red; */

    img {
      width: 0.7rem;
    }
  }

  nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 90;
    /* border: 2px solid red; */
    height: 4rem;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    background-color: rgba(10, 22, 38, 0.96);

    .harmburger {
      width: 1.5rem;
    }
  }

  .headerTxt {
    font-family: "Poppins", sans-serif;
    /* border: 2px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .headertxtstyle {
    font-weight: 700;
    font-size: 1.8rem;
    /* line-height: 5.4rem; */
    letter-spacing: -0.05em;
    color: #ffff;
  }

  .subtxt {
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 2px solid purple; */
    span {
      color: #52cc82;
      margin: 0 0.5rem;
    }
  }

  .txtCont {
    position: relative;
    z-index: 15;
    width: 100%;
    /* border: 2px solid yellow; */
    height: fit-content;
  }

  @media only screen and (min-width: 460px) {
    .headertxtstyle {
      font-size: 2.5rem;
    }
  }

  @media only screen and (min-width: 600px) {
    .headertxtstyle {
      font-size: 2.8rem;
    }
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 3rem;

    .socialMedia {
      display: flex;
      right: 2rem;
      top: 6rem;
      img {
        width: 1rem;
      }
    }

    .logooff {
      display: none;
    }

    .headertxtstyle {
      font-size: 3rem;
    }

    nav {
      padding: 2rem;
      font-size: 14px;
      .harmburger {
        display: none;
      }
    }

    .nav-links,
    /* .socialMedia, */
    .connect_wallet {
      display: flex;
      align-items: center;
    }

    .nav-links a {
      margin-left: 1rem;
      color: #ffff;
      text-decoration: none;
    }
    .nav-links img {
      margin-right: 2rem;
      height: 1.5rem;
    }

    .connect_wallet {
      color: #00fefe;
      text-decoration: underline;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 110vh;
    padding-bottom: 3rem;

    .socialMedia {
      right: 3rem;
      top: 6rem;
      gap: 1.5rem;
      img {
        width: 1.2rem;
      }
    }

    .headertxtstyle {
      font-size: 3.5rem;
    }

    nav {
      /* font-size: 1rem; */
    }
  }

  @media only screen and (min-width: 1200px) {
    padding-bottom: 4rem;

    .headertxtstyle {
      font-size: 4.5rem;
    }
  }
  @media only screen and (min-width: 1440px) {
    height: 140vh;
    padding-bottom: 4rem;

    .socialMedia {
      right: 3rem;
      top: 6rem;
      gap: 2rem;
      img {
        width: 1.5rem;
      }
    }

    .headertxtstyle {
      font-size: 5rem;
    }

    nav {
      font-size: 1.1rem;
    }
  }

  @media only screen and (min-width: 1600px) {
    height: 110vh;
    padding-bottom: 6rem;

    .headertxtstyle {
      font-size: 6rem;
    }

    nav {
      font-size: 1.3rem;
    }
    .nav-links a {
      margin-right: 2.5rem;
    }
  }
  @media only screen and (min-width: 1800px) {
    height: 110vh;
    padding-bottom: 5rem;

    .socialMedia {
      right: 4rem;
      top: 6rem;
      gap: 2rem;
      img {
        width: 2rem;
      }
    }

    .headertxtstyle {
      font-size: 7.5rem;
    }
  }

  @media only screen and (min-width: 2200px) {
    .headertxtstyle {
      font-size: 8.5rem;
    }
  }
`;

export default HeaderStyle;
