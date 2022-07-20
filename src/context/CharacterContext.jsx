import { useState, useEffect, useContext, createContext } from "react";
import { getAllCharacters, getSearchCharacter } from "../utils/getCharacter";
export const CharacterContext = createContext();

function CharacterContextProvider({ children }) {
  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState(1);
  const inputSearch = useRef(null);
  const [textSearch, setTextSearch] = useState("");
  useEffect(() => {
    getAllCharacters(page).then(setCharacter);
  }, [page]);
  return (
    <CharacterContextProvider
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
    </CharacterContextProvider>
  );
}
export default CharacterContextProvider;
