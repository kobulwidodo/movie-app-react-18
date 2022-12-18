import { IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormControlStyled = styled(InputBase)`
  /* box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1); */
  border-radius: 40px;
  padding: 0.75rem 1.3rem;
  font-weight: 300;
  color: #6b6b6b;
  font-size: 1.125rem;
`;

const SearchBar = (props) => {
  const [searchkey, setSearchkey] = useState("");
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchkey}`);
    setSearchkey("");
  };

  return (
    <>
      <Paper
        component="form"
        style={{
          padding: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          borderRadius: "40px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)",
        }}
        onSubmit={submitHandler}
      >
        <FormControlStyled
          style={{ marginLeft: "20px", flex: 1 }}
          placeholder="Search movies, tv show, series, people...."
          inputProps={{
            "aria-label": "Search movies, tv show, series, people....",
          }}
          onChange={
            props.disabled
              ? (e) => props.onChange(e.target.value)
              : (e) => setSearchkey(e.target.value)
          }
        />
        <IconButton
          type="submit"
          disabled={props.disabled}
          style={{ padding: 10 }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
