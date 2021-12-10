import styled from "styled-components";

const GlassCard = styled.div`
  background: rgba(154, 154, 154, 0.25);
  box-shadow: 0 8px 32px 0 rgba(14, 17, 26, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 60px;
  width: 22.13rem;
  height: 32rem;
  border: 2px solid #52cc82;
  overflow: hidden;
  padding: 2rem 2rem 0 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;

  .GlassCardHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffff;
    div:nth-child(1) {
      display: flex;
      flex-direction: column;

      span:nth-child(1) {
        font-size: 0.75rem;
      }

      span:nth-child(2) {
        font-size: 1.875rem;
      }
      span:nth-child(3) {
        font-size: 0.75rem;
        align-self: flex-end;
      }
    }

    div:nth-child(2) {
      display: flex;
      align-content: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      img {
        height: 1.0625rem;
      }
    }
  }

  .cardImg {
    margin-top: auto;
  }
`;

export default GlassCard;
