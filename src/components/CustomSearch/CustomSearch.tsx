import { TextField } from "@mui/material";

interface SearchComponentProps {
  searchSetter: any;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ searchSetter }) => {
  const handleSearch = (e: any) => {
    if (e.target.value) {
      searchSetter(e.target.value);
    } else searchSetter("");
  };

  return (
    <TextField
      label="Search Movies"
      variant="outlined"
      fullWidth
      onChange={handleSearch}
    />
  );
};

export default SearchComponent;
