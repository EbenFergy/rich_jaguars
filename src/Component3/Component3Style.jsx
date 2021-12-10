import styled from "styled-components";

const Component3Style = styled.div`
  background-color: #0a1626;
  color: #ffff;
  letter-spacing: -0.05em;
  padding-top: 5rem;
  width: 100%;
  height: 100vh;

  .component3Cont {
    position: relative;
    z-index: 11;
  }

  .heading {
    width: 40%;
    text-align: right;
    font-size: 1.25rem;
  }

  .writeUpCont {
    width: 100%;
    display: flex;
    /* align-items: center; */
    /* border: 2px solid yellow; */

    .left {
      width: 40%;
      text-align: right;
      font-size: 5rem;
      font-weight: 700;
    }
    .right {
      padding: 0 15rem 0 2rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 60%;
      text-align: left;
      line-height: 2.5rem;
      gap: 2rem;

      div {
        font-size: 1.875rem;
      }

      span {
        font-size: 1.125rem;
      }
    }
  }

  .padding {
    padding: 0 2rem;
  }
`;
export default Component3Style;
