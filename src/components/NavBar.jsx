import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";
import { getSearchCharacter } from "../utils/getCharacter";
const NavBar = () => {
  const { textSearch, setCharacter, inputSearch, setTextSearch } =
    useContext(CharacterContext);
  const onChangeTextSearch = (event) => {
    const text = inputSearch.current.value;
    setTextSearch(text);
  };
  const onSubmit = (event) => {
    if (event.key !== "Enter") return;
    event.target.value = "";
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
