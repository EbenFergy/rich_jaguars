import styled from "styled-components";
// import chartBG from "../../assets/chartBG.svg";

const ChartStyle = styled.div`
  position: relative;
  background-color: #0a1626;
  /* border: 2px solid red; */
  min-height: 70vh;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  .chart {
    width: 100%;
    height: fit-content;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    /* border: 2px solid yellow; */
    transition: all 0.5s ease-in-out;

    svg {
      /* transform: translateX(-10rem); */
      width: 220vw;
      height: 100%;
      white-space: nowrap;
      /* border: 2px solid yellow; */
    }
  }

  .comp1 {
    .path1 {
      display: ${({ display1 }) => (display1 ? "block" : "none")};
    }
  }

  .comp1:hover,
  .comp1:focus {
    .path1 {
      display: block;
    }
  }

  .comp2 {
    .path2 {
      display: ${({ display2 }) => (display2 ? "block" : "none")};
    }
  }

  .comp2:hover,
  .comp2:focus {
    .path2 {
      display: block;
    }
  }

  .comp3 {
    .path3 {
      display: ${({ display3 }) => (display3 ? "block" : "none")};
    }
  }

  .comp3:hover,
  .comp3:focus {
    .path3 {
      display: block;
    }
  }

  .comp4 {
    .path4 {
      display: ${({ display4 }) => (display4 ? "block" : "none")};
    }
  }

  .comp4:hover,
  .comp4:focus {
    .path4 {
      display: block;
    }
  }

  @media only screen and (min-width: 460px) {
  }

  @media only screen and (min-width: 5000px) {
    .chart {
      width: 100%;
      height: fit-content;
    }

    svg {
      width: 100vw;
      /* height: 100%; */
    }
  }
  @media only screen and (min-width: 600px) {
  }

  @media only screen and (min-width: 768px) {
    .chart {
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      /* border: 2px solid yellow; */

      svg {
        width: 100%;
        /* transform: translateX(5rem); */
        /* border: 2px solid yellow; */
      }
    }
  }
`;
export default ChartStyle;
