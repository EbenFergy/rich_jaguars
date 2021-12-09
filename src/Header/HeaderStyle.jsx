import styled from "styled-components";
import completeHeaderImg from "../assets/completeHeaderImgPng.png";

const HeaderStyle = styled.div`
  height: 141%;
  background-image: url(${completeHeaderImg});
  background-position: center -5rem;
  background-repeat: no-repeat;
  /* background-size: ; */
  /* border: 2px solid red; */
  margin: 0;

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

    img {
      cursor: pointer;
      :hover {
        transform: scale(1.2);
      }
    }
  }
`;

export default HeaderStyle;
