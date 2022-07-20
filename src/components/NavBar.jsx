import { useState, useRef } from "react";
import { getSearchCharacter } from "../utils/getCharacter";
const NavBar = () => {
  const onChangeTextSearch = (event) => {
    const text = inputSearch.current.value;
    setTextSearch(text);
  };
  const onSubmit = (event) => {
    if (event.key !== "Enter") return;
    inputSearch.current.value = "";
    getSearchCharacter(textSearch).then(setCharacter);
  };
  return (
    <nav>
      <input
        type="text"
        ref={inputSearch}
        placeholder="Search Character"
        onChange={onChangeTextSearch}
        onKeyDown={onSubmit}
      />
    </nav>
  );
};

export default NavBar;
