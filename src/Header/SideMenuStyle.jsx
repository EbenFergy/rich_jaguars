import styled from "styled-components";

const SideMenuStyle = styled.div`
  position: fixed;
  top: 0;
  /* border: 2px solid green;  */
  /* height: fit-content;
  min-height: 60vh; */
  height: clamp(60vh, fit-content, 28rem);
  width: 100vw;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 2rem 2rem 2rem;
  align-items: center;
  background-color: rgb(10, 22, 38, 0.95);

  .close {
    /* border: 2px solid yellow; */
    /* width: fit-content; */
    height: fit-content;
    color: #ffff;
    font-size: 1.5rem;
    align-self: flex-end;
    margin: 1rem 0;
  }

  .links {
    /* border: 2px solid green; */
    /* height: 80%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 1rem 0;

    a {
      text-decoration: none;
      color: #ffff;
      margin-bottom: 2rem;
    }

    a:nth-child(7) {
      text-decoration: underline;
      color: #00fefe;
    }
    div {
      width: 50%;

      border: 0.5px solid rgba(255, 255, 255, 0.1);
      border-top: none;
      border-left: none;
      border-right: none;
      /* border-bottom: none; */
      margin-bottom: 2rem;
    }
  }

  .socials {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 0.9rem;
    }

    a {
      margin-right: 1rem;
    }

    a:nth-child(4) {
      margin-right: 0;
    }
  }
`;

export default SideMenuStyle;
