import { TextField } from "@mui/material";
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (searchQuery: string) => void;
  placeholder: string;
  searchOnButton?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder,
  searchOnButton = false,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (!searchOnButton) onSearch(query);
  };

  const searchHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSearch(searchQuery);
  };

  return (
    <>
      <TextField
        variant="outlined"
        size="small"
        onChange={handleChange}
        placeholder={placeholder}
      />
      {searchOnButton && <button onClick={searchHandler}>Search</button>}
    </>
  );
};

export default SearchBar;
