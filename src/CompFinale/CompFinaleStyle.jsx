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
    background: linear-gradient(
      214.41deg,
      rgba(7, 36, 50, 0.8) 3.33%,
      rgba(33, 70, 76, 0.8) 21.6%,
      rgba(49, 91, 63, 0.8) 37.41%,
      rgba(23, 41, 27, 0.8) 63.58%,
      rgba(0, 0, 0, 0.8) 98.16%
    );
    min-height: 100vh;
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 2rem 0;
  }

  .curveCont {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 2px solid turquoise; */
    gap: 2rem;

    .curves {
      box-sizing: border-box;
      text-align: center;
      padding: 1rem 2rem;
      border-radius: 2rem;
      font-size: 1rem;
      letter-spacing: -0.05em;
      font-weight: 500;
      color: #ffff;
      width: 80%;
      max-width: 30rem;
    }

    .curve1 {
      background-color: #28e8ff;
    }

    .curve2 {
      background-color: #52cc82;
    }
  }

  .footerDown {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    color: #ffff;
    text-align: center;
  }

  .socialMedia {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
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
    align-items: center;
    gap: 2rem;
    color: #ffff;

    * {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: #ffff;
    }

    a:hover {
      color: #52cc83;
    }
  }

  .connect_wallet {
    color: #00fefe;
    text-decoration: underline;
    text-align: center;
    cursor: pointer;
    height: fit-content;
    font-weight: 700;

    :hover {
      color: #00c2c2;
    }
  }

  /*------------------ MEDIA QUERIES----------------- */

  @media only screen and (min-width: 460px) {
  }

  @media only screen and (min-width: 600px) {
  }

  @media only screen and (min-width: 768px) {
    .blur {
      gap: 6rem;
    }
    .curveCont {
      flex-direction: row;
      gap: 0;

      .curves {
        position: relative;
        /* width: 20rem; */
      }

      .curve1 {
        background-color: #28e8ff;
        right: -2rem;
      }

      .curve2 {
        background-color: #52cc82;
        left: -2rem;
      }
    }

    .footerDown {
      flex-direction: row;
      gap: 5rem;
    }

    .socialMedia {
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1200px) {
    .curveCont {
      .curves {
        font-size: 1.5rem;
        padding: 1rem 2rem;
        max-width: 30rem;
      }
    }

    .footerDown {
      flex-direction: row;
      gap: 5rem;
    }

    .socialMedia {
      flex-direction: column;
    }
  }
  @media only screen and (min-width: 1440px) {
  }

  @media only screen and (min-width: 1600px) {
    .curveCont {
      .curves {
        font-size: 2rem;
        padding: 2rem 3rem;
        max-width: 40rem;
        border-radius: 4rem;
      }

      .curve1 {
        right: -4rem;
      }

      .curve2 {
        left: -4rem;
      }
    }

    .footerDown {
      font-size: 1.5rem;
      gap: 8rem;
    }

    .footerLogo {
      width: 25rem;
    }

    .socialMedia {
      img {
        height: 2rem;
      }
    }
  }
  @media only screen and (min-width: 1800px) {
  }
  @media only screen and (min-width: 2200px) {
  }
`;
export default CompFinaleStyle;
