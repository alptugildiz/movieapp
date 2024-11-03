import styled from "styled-components";

const MainWrapper = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  gap: 2%;
`;

const DetailWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  flex-direction: column;
  gap: 5%;
  img {
    height: 700px;
    width: 500px;
    border-radius: 16px;
  }
  .detailInformation {
    display: flex;
    align-items: start;
    justify-content: space-around;
    gap: 5%;
  }
  .informationTexts {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    flex-wrap: wrap;
    text-align: start;
  }
  .goHomeButton {
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 5;
  }
`;
export { MainWrapper, CardsWrapper, DetailWrapper };
