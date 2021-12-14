import styled from "styled-components";

const Cmp4CardStyle = styled.div`
  /* border: 2px solid yellow; */
  position: absolute;

  ${({ classes }) =>
    classes === "BIGGI"
      ? "right:50vw; transform:translateX(50%) rotate(-7.55deg); top:0; z-index:12;"
      : ""}}
  
  ${({ classes }) =>
    classes === "RAFAEL"
      ? "right:50vw; transform:translateX(50%); top:30rem; z-index:13;"
      : ""}
  
  ${({ classes }) =>
    classes === "LIOR"
      ? "right:40vw; transform:translateX(70%) rotate(10.65deg); top:25rem; z-index:14;"
      : ""}
  
  ${({ classes }) =>
    classes === "JEEROM"
      ? "right:26vw; transform:translateX(70%); top:15rem; z-index:15;"
      : ""}
  
  ${({ classes }) =>
    classes === "JUSTINA"
      ? "right:50vw; transform: rotate(-6.31deg); top:52rem; z-index:12;"
      : ""}

  .GlassCard {
    display: flex;
    flex-direction: column;
    padding: 4rem;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    .name {
      align-self: flex-start;
      font-size: 1.25rem;
      color: #ffff;
    }
  }

  .socialMedia {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    img {
      fill: #ffff;
    }
  }
`;
export default Cmp4CardStyle;
