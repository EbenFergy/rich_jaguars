import styled from "styled-components";
import Component2BG from "../assets/Component2BG.svg";

const Component2Style = styled.div`
  background-color: #0a1626;
  background-image: url(${Component2BG});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 150vh;
  height: fit-content;
  padding-bottom: 2rem;
  position: relative;
  /* border: 2px solid red; */
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .link {
    position: absolute;
    top: -20%;
    width: 100%;
    height: 50%;
    bottom: ;
    z-index: 10;
    filter: blur(3rem);
    opacity: ;
    /* border-radius: 50%; */
    border: 2px solid yellow;
    max-width: 100%;

    height: ${({ height }) => height};
    background-color: rgba(6, 15, 15, 0.98);
    overflow: hidden;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    div {
      background: rgba(0, 255, 100, 0.2);
      height: 25%;
      width: 40%;
      filter: blur(4rem);
    }
  }

  

  .component2txt {
    position: relative;
    z-index: 15;
    /* border: 2px solid red; */
    font-weight: 700;
    font-size: 1.8rem;
    color: #ffff;
    width: 100%;
    text-align: center;
    margin-bottom: 5rem;

    span {
      font-size: 1rem;
    }
  }

  .Comp2Cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: #ffff;
    padding: 0 4rem;
    line-height: 2rem;
    font-size: 1rem;
    font-weight: 400;
    /* border: 2px solid yellow; */
    img {
      width: clamp(20rem, 80%, 30rem);
      /* border: 2px solid red; */
    }

    div:nth-child(1) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    div:nth-child(2) {
      width: 100%;
      text-align: center;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span{
        font-size: 0.65rem;
        

        a{
          color: #28E8FF;
        }
      }
    }
  }

  @media only screen and (min-width: 460px) {
    .component2txt {
      font-size: 2.5rem;

      span {
        font-size: 1.25rem;
      }
    }

    .Comp2Cards{
      div:nth-child(2) {
      padding: 0 2rem;
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
        /* padding: 0 2rem; */
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        /* border: 2px solid red; */
      }
      img {
        width: clamp(22rem, 100%, 36rem);
      }

      div:nth-child(2) {
        text-align: left;
        /* padding: 0 2rem; */
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        span{
          font-size: 0.9rem;
        }
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
