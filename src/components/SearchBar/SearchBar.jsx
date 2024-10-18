import React from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchValue = form.elements.searchValue.value;
    if (form.elements.searchValue.value.trim() === "") {
      toast.error("Please enter something in the search field");
      return;
    }
    handleSearch(searchValue);
    form.reset();
  };

  return (
    <header className={s.header}>
      <form className={s.wrapper} onSubmit={handleSubmit}>
        <input
          className={s.input}
          name="searchValue"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
