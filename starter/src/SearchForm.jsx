import React from "react";
import { toast } from "react-toastify";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchVal = e.target.elements.search.value;
    if (!searchVal) {
      return toast.error("Please provide input");
    }
    console.log(searchVal);
  };

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
