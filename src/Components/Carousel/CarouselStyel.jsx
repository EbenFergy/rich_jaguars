import styled from "styled-components";

const CarouselStyle = styled.div`
  margin-top: 4rem;
  position: relative;
  z-index: 20;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  margin-bottom: 13.125rem;

  .cards {
    width: clamp(5rem, 18vw, 17.2rem);
  }

  @media only screen and (max-width: 1440px) {
    /* .cards {
      width: 16rem;
    } */
  }

  .nextArrow {
    /* border: 2px solid red; */
    width: 2.875rem;
    align-self: flex-end;
    margin-right: 3rem;
    cursor: pointer;
    padding: 2rem 0;
  }
`;

export default CarouselStyle;
