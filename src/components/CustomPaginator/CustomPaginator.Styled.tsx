import styled from "styled-components";

const CustomPaginatorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: end;
  width: 100%;
  .MuiButton-root.Mui-disabled {
    color: #ffffff;
    background-color: #b9b9b98b;
  }
  .customCurrentPage {
    padding: 8px 16px;
    border-radius: 6px;
  }
`;

export { CustomPaginatorWrapper };
