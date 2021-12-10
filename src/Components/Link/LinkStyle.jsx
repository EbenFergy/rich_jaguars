import styled from "styled-components";

const LinkStyle = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  z-index: 10;
  filter: blur(3rem);
  /* border-radius: 50%;   */
  /* border: 2px solid yellow; */
  width: 100%;
  height: 40rem;
  background-color: rgba(6, 15, 15, 0.98);

  display: flex;
  align-items: flex-start;
  justify-content: center;

  div {
    background: rgba(0, 255, 100, 0.2);
    height: 25%;
    width: 40%;
    filter: blur(4rem);
  }
`;

export default LinkStyle;
