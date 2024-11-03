import styled from "styled-components";

const CustomCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 40px;
  backdrop-filter: blur(6px) saturate(180%);
  -webkit-backdrop-filter: blur(6px) saturate(180%);
  background-color: rgba(118, 140, 140, 0.15);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.295);
  border-radius: 16px;
  width: 300px;
  height: 600px;
  .information {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    max-height: 155px;
  }
  span {
    padding: 0px 10px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  img {
    object-fit: cover;
    width: 300px;
    height: 440px;
    border-radius: 16px;
  }
  .imageWrapper {
    width: 300px;
    height: 440px;
  }
`;

export { CustomCardWrapper };
