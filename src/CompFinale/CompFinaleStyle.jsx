import styled from "styled-components";
import Component2BG from "../assets/Component2BG.svg";

const CompFinaleStyle = styled.div`
  position: relative;
  background-color: #0a1626;
  background-image: url(${Component2BG});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: fit-content;

  .blur {
    position: relative;
    background: linear-gradient(
      214.41deg,
      rgba(7, 36, 50, 0.8) 3.33%,
      rgba(33, 70, 76, 0.8) 21.6%,
      rgba(49, 91, 63, 0.8) 37.41%,
      rgba(23, 41, 27, 0.8) 63.58%,
      rgba(0, 0, 0, 0.8) 98.16%
    );
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10rem;
  }

  .curveCont {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .curves {
      box-sizing: border-box;
      text-align: center;
      padding: 2rem 10vw;
      border-radius: 3.75rem;
      font-size: 1.25rem;
      letter-spacing: -0.05em;
      font-weight: 500;
      color: #ffff;
    }

    .curve1 {
      background-color: #28e8ff;
      left: 5%;
    }

    .curve2 {
      background-color: #52cc82;
    }
  }

  .footerDown {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    color: #ffff;
  }

  .socialMedia {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    img {
      cursor: pointer;
      :hover {
        transform: scale(1.2);
      }
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: #ffff;

    * {
      cursor: pointer;
    }

    div:hover {
      color: #52cc83;
    }
  }

  .connect_wallet {
    color: #00fefe;
    text-decoration: underline;
    cursor: pointer;
    height: fit-content;
    font-weight: 700;

    :hover {
      color: #00c2c2;
    }
  }

  @media only screen and (max-width: 1024px) {
    html,
    body {
      font-size: 100%;
    }
  }
`;
export default CompFinaleStyle;
