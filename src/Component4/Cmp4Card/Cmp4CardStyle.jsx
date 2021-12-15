import styled from "styled-components";

const Cmp4CardStyle = styled.div`
  /* border: 2px solid yellow; */
  position: absolute;

  ${({ classes }) =>
    classes === "BIGGI"
      ? "right:50vw; transform:translateX(50%) rotate(-7.55deg); top:0; z-index:12;"
      : ""}

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
    box-sizing: border-box;

    .name {
      align-self: flex-start;
      font-size: 1.25rem;
      color: #ffff;
      margin: 0;
    }
  }

  .image {
    img {
      /* width: clamp(10rem, 5vw, 16rem); */
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

  @media only screen and (max-width: 1440px) {
    .GlassCard {
      transform: scale(0.7);
    }

    ${({ classes }) => (classes === "BIGGI" ? "right:40vw;" : "")}

    ${({ classes }) => (classes === "LIOR" ? "right:40vw; top:20rem; " : "")}
  
  ${({ classes }) => (classes === "JEEROM" ? "right:28vw; " : "")}
  
  ${({ classes }) => (classes === "JUSTINA" ? "top:48rem;" : "")}
  }

  @media only screen and (max-width: 1050px) {
    .GlassCard {
      transform: scale(0.6);
    }

    ${({ classes }) => (classes === "BIGGI" ? "right:35vw;" : "")}

    ${({ classes }) => (classes === "LIOR" ? "right:45vw; top:15rem; " : "")}
  
  ${({ classes }) => (classes === "JEEROM" ? "right:28vw; " : "")}
  
  ${({ classes }) => (classes === "JUSTINA" ? "top:45rem;" : "")}
  }
  }
`;
export default Cmp4CardStyle;
