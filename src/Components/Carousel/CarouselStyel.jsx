import styled from "styled-components";

const CarouselStyle = styled.div`
  margin-top: 4rem;
  position: relative;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  /* margin-bottom: 13.125rem; */

  .cards {
    width: 8rem;
    margin-right: 1rem;
  }

  .nextArrow {
    /* border: 2px solid red; */
    width: 2.875rem;
    align-self: flex-end;
    margin-right: 3rem;
    cursor: pointer;
    padding: 2rem 0;
  }

  @media only screen and (min-width: 375px) {
    .cards {
      width: 10rem;
    }
  }
  @media only screen and (min-width: 400px) {
    .cards {
      width: 11rem;
    }
  }
  @media only screen and (min-width: 460px) {
    .cards {
      /* width: 13rem; */
    }
  }

  @media only screen and (min-width: 600px) {
    .cards {
      width: 11rem;
    }
  }
  @media only screen and (min-width: 768px) {
    .cards {
      width: 12rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    .cards {
      width: 14rem;
    }
  }
  @media only screen and (min-width: 1440px) {
    .cards {
      width: 15rem;
    }
  }
`;

export default CarouselStyle;
