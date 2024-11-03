import { Button } from "@mui/material";
import * as Styled from "./CustomPaginator.Styled";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CustomPaginator: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <Styled.CustomPaginatorWrapper>
      <Button
        variant="contained"
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      <div className="customCurrentPage">{currentPage}</div>

      <Button
        variant="contained"
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </Styled.CustomPaginatorWrapper>
  );
};

export default CustomPaginator;
