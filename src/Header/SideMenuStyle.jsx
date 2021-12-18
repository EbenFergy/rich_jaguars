import styled from "styled-components";

const SideMenuStyle = styled.div`
  position: fixed;
  top: 0;
  /* border: 2px solid green; */
  height: fit-content;
  min-height: 60vh;
  width: 100vw;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 2rem 0 2rem;
  align-items: center;
  background-color: rgb(10, 22, 38, 0.95);

  .close {
    /* border: 2px solid yellow; */
    /* width: fit-content; */
    height: fit-content;
    color: #ffff;
    font-size: 1.5rem;
    align-self: flex-end;
    margin: 0;
  }

  .links {
    /* border: 2px solid green; */
    /* height: 80%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 1rem;

    a {
      text-decoration: none;
      color: #ffff;
      margin-bottom: 3rem;
    }

    a:nth-child(5) {
      margin-bottom: 0;
    }

    div {
      width: 100%;

      border: 0.5px solid rgba(255, 255, 255, 0.2);
      border-top: none;
      border-left: none;
      border-right: none;
      /* border-bottom: none; */
      margin-bottom: 3rem;
    }
  }

  .socialMedia {
    border: 2px solid turquoise;
    width: 100vw;
  }
`;

export default SideMenuStyle;
