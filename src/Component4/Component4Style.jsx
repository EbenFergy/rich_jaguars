import styled from "styled-components";

const Component4Style = styled.div`
  background-color: #0a1626;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  height: fit-content;

  .member {
    width: fit-content;
    text-align: center;
    color: #ffff;
    font-weight: 700;
    font-size: 14px;
    /* border: 2px solid green; */
    height: fit-content;

    h1 {
      font-size: 2rem;
      margin: 0;
    }
  }

  div:nth-child(2) {
    /* border: 2px solid green; */
    height: 50%;
  }
  .cmp4Cards {
    max-width: 95vw;
    /* border: 2px solid yellow; */
  }

  /* -------------MEDIA QUERIES----------------------- */
  @media only screen and (min-width: 460px) {
  }

  @media only screen and (min-width: 600px) {
    .cmp4Cards {
      height: 35rem;
    }
  }
  @media only screen and (min-width: 700px) {
    .cmp4Cards {
      height: 45rem;
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 2rem 2rem;
    .member {
      h1 {
        font-size: 2.5rem;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .member {
      font-size: 1rem;
      h1 {
        font-size: 4rem;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .member {
      font-size: 1.5rem;
      h1 {
        font-size: 5rem;
      }
    }

    .cmp4Cards {
      height: 55rem;
    }
  }
  @media only screen and (min-width: 1440px) {
    .cmp4Cards {
      height: 60rem;
    }
  }

  @media only screen and (min-width: 1600px) {
  }
  @media only screen and (min-width: 1800px) {
    .member {
      font-size: 2rem;
      h1 {
      }
    }

    .cmp4Cards {
      height: 70rem;
    }
  }
  @media only screen and (min-width: 2200px) {
  }
`;
export default Component4Style;
