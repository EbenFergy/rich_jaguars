import styled from "styled-components";
import completeHeaderImg from "../assets/completeHeaderImgPng.png";

const HeaderStyle = styled.div`
  background-color: #0a1626;
  height: 141%;
  background-image: url(${completeHeaderImg});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  /* border: 2px solid red; */
  margin: 0;
  padding: 0;

  nav {
    display: flex;
    color: #ffff;
    background-color: rgba(10, 22, 38, 0.9);
    justify-content: space-between;
    align-items: center;
    padding: 2rem 5rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
    z-index: 50;
    /* border: 2px solid green; */
    font-size: 1.0625rem;
  }

  .nav-links {
    display: flex;
    gap: 2.25rem;
    /* border: 2px solid yellow; */

    img {
      margin-right: 4.3rem;
    }

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

    :hover {
      color: #00c2c2;
    }
  }

  .socialMedia {
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 5rem;
    top: 6rem;
    gap: 3rem;
    z-index: 15;
    img {
      cursor: pointer;
      :hover {
        transform: scale(1.2);
      }
    }
  }

  .Fern {
    position: absolute;
    left: -50rem;
    top: 9rem;
    z-index: 15;
  }

  .FernBlur {
    position: absolute;
    left: -48rem;
    top: 2rem;
  }

  .rightFern {
    position: absolute;
    right: 0;
    top: 15rem;
    height: 45rem;
  }

  .waterLeaf {
    position: absolute;
    right: 0;
    top: 10rem;
    height: 70rem;
    z-index: 13;
    /* border: 2px solid red; */
  }

  .headerTxt {
    font-family: "Poppins", sans-serif;
    position: relative;
    top: 45rem;
    z-index: 20;
    /* border: 2px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .headertxtstyle {
    font-weight: 700;
    font-size: 5.4rem;
    line-height: 5.4rem;
    letter-spacing: -0.05em;
    color: #ffff;
  }

  .subtxt {
    position: relative;
    top: 45rem;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
      gap: 1rem;

      div:nth-child(1),
      div:nth-child(3) {
        position: relative;
        z-index: 13;
      }

      div:nth-child(2) {
        position: relative;
        color: #52cc82;
        z-index: 11;
      }
    }
  }

  .VectorLeft {
    position: absolute;
    top: 44rem;
    z-index: 12;
  }

  .VectorUnderTxt {
    position: absolute;
    top: 25.5rem;
    left: 2rem;
    z-index: 12;
    transform: rotate(5deg);
  }
`;

export default HeaderStyle;
