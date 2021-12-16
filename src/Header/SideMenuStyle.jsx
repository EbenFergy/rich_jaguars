import styled from "styled-components";

const SideMenuStyle = styled.div`
  position: fixed;
  inset: 0;
  top: 0;
  /* border: 2px solid green; */
  height: 80vh;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
  background-color: rgb(10, 22, 38, 0.95);

  .close {
    /* border: 2px solid yellow; */
    /* width: fit-content; */
    height: fit-content;
    color: #ffff;
    font-size: 1.5rem;
    align-self: flex-end;
  }

  .links {
    /* border: 2px solid green; */
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    a {
      text-decoration: none;
      color: #ffff;
      margin-bottom: 3rem;
    }
  }
`;

export default SideMenuStyle;
