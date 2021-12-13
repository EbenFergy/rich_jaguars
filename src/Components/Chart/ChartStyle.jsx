import styled from "styled-components";

const ChartStyle = styled.div`
  position: relative;
  /* border: 2px solid red; */

  .imgBG {
    width: 100%;
  }

  .circles {
    margin-right: 20rem;
    border: 2px solid yellow;
  }

  .outerCircle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.8125rem;
    height: 2.8125rem;
    border: 1px solid #28e8ff;
    border-radius: 50%;
  }

  .innerCircle {
    width: 1.1rem;
    height: 1.1rem;
    background: #52cc82;
    border-radius: 50%;
  }

  .chart {
    position: absolute;
    top: -10%;
    width: 100%;
    overflow: auto;
    white-space: nowrap;
    box-sizing: border-box;
    /* border: 2px solid red; */
    z-index: 15;
  }

  svg {
    width: 100%;
  }

  .comp1 {
    path {
      display: ${({ display1 }) => (display1 ? "block" : "none")};
    }
  }
  .comp1:hover,
  .comp1:focus {
    path {
      display: block;
    }
  }

  .comp2 {
    path {
      display: ${({ display2 }) => (display2 ? "block" : "none")};
    }
  }
  .comp2:hover,
  .comp2:focus {
    path {
      display: block;
    }
  }
  .comp3 {
    path {
      display: ${({ display3 }) => (display3 ? "block" : "none")};
    }
  }
  .comp3:hover,
  .comp3:focus {
    path {
      display: block;
    }
  }
  .comp4 {
    path {
      display: ${({ display4 }) => (display4 ? "block" : "none")};
    }
  }
  .comp4:hover,
  .comp4:focus {
    path {
      display: block;
    }
  }
`;
export default ChartStyle;
