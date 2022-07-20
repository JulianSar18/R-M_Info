import { useState, useEffect, useRef, createContext } from "react";
import { getAllCharacters } from "../utils/getCharacter";
const CharacterContext = createContext({});

export function CharacterProvider({ children }) {
  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState(1);
  const inputSearch = useRef(null);
  const [textSearch, setTextSearch] = useState("");
  useEffect(() => {
    getAllCharacters(page).then(setCharacter);
  }, [page]);
  return (
    <CharacterContext.Provider
      value={{
        character,
        setCharacter,
        page,
        setPage,
        inputSearch,
        textSearch,
        setTextSearch,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
export default CharacterContext;
