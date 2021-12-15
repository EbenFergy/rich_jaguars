import styled from "styled-components";
import completeHeaderImg from "../assets/HeaderMainBG.png";

const HeaderStyle = styled.div`
  background-color: #0a1626;
  height: 100vh;
  background-image: url(${completeHeaderImg});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  /* border: 2px solid red; */
  margin: 0;
  padding-bottom: 4rem;
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .nav-links,
  .socialMedia,
  .connect_wallet {
    display: none;
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

    .headertxtstyle {
      font-size: 3rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 110vh;
    padding-bottom: 3rem;

    .headertxtstyle {
      font-size: 3.5rem;
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

    .headertxtstyle {
      font-size: 5rem;
    }
  }

  @media only screen and (min-width: 1600px) {
    height: 110vh;
    padding-bottom: 6rem;

    .headertxtstyle {
      font-size: 6rem;
    }
  }
  @media only screen and (min-width: 1800px) {
    height: 110vh;
    padding-bottom: 5rem;

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
