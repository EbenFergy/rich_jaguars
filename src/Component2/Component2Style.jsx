import styled from "styled-components";
import Component2BG from "../assets/Component2BG.svg";

const Component2Style = styled.div`
  background-color: #0a1626;
  background-image: url(${Component2BG});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: fit-content;
  padding-bottom: 2rem;
  position: relative;
  /* border: 2px solid red; */
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .component2txt {
    /* border: 2px solid red; */
    font-weight: 700;
    font-size: 1.8rem;
    color: #ffff;
    width: 100%;
    text-align: center;

    span {
      font-size: 1rem;
    }
  }

  .Comp2Cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    color: #ffff;
    line-height: 2rem;
    font-size: 1rem;
    font-weight: 400;
    img {
      width: 90%;
    }

    div:nth-child(2) {
      width: 100%;
      padding: 0 4rem;
      text-align: center;
    }
  }

  @media only screen and (min-width: 460px) {
    .component2txt {
      font-size: 2.5rem;

      span {
        font-size: 1.25rem;
      }
    }
  }

  @media only screen and (min-width: 600px) {
    .component2txt {
      font-size: 2.8rem;
    }
  }

  @media only screen and (min-width: 768px) {
    .component2txt {
      font-size: 3rem;
    }

    .Comp2Cards {
      font-size: 1.5rem;
      line-height: 2.5rem;
      flex-direction: row;
      justify-content: center;

      div:nth-child(1) {
        padding: 0 2rem;
      }
      img {
        width: 70vh;
      }

      div:nth-child(2) {
        text-align: left;
        padding: 0 2rem;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .component2txt {
      font-size: 3.5rem;
    }

    .Comp2Cards {
      font-size: 1.8rem;

      div:nth-child(2) {
        padding: 0 4rem;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .component2txt {
      font-size: 4.5rem;
    }

    .Comp2Cards {
      font-size: 2.2rem;
    }
  }
  @media only screen and (min-width: 1440px) {
    .component2txt {
      font-size: 5rem;

      span {
        font-size: 1.8rem;
      }
    }

    .Comp2Cards {
      font-size: 3rem;
      line-height: 3rem;

      div:nth-child(2) {
        padding: 0 6rem;
      }
    }
  }

  @media only screen and (min-width: 1600px) {
    .component2txt {
      font-size: 6rem;

      span {
        font-size: 2.3rem;
      }
    }
  }
  @media only screen and (min-width: 1800px) {
    .component2txt {
      font-size: 7.5rem;
      span {
        font-size: 2.8rem;
      }
    }

    .Comp2Cards {
      font-size: 3rem;
      line-height: 5rem;

      div:nth-child(2) {
        padding: 0 12rem;
      }
    }
  }
  @media only screen and (min-width: 2200px) {
    .component2txt {
      font-size: 8.5rem;
    }
  }
`;
export default Component2Style;
