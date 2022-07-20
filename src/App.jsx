import { useState, useEffect, useRef } from "react";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import styles from "./styles/modules/App.module.css";
import mySvg from "./assets/siluet.png";
import { getAllCharacters, getSearchCharacter } from "./utils/getCharacter";
import { CharacterContext } from "./context/CharacterContext";

function App() {
  /*const character = useContext(CharacterContext);*/
  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState(1);
  const inputSearch = useRef(null);
  const [textSearch, setTextSearch] = useState("");
  const onChangeTextSearch = (event) => {
    const text = inputSearch.current.value;
    setTextSearch(text);
  };
  const onSubmit = (event) => {
    if (event.key !== "Enter") return;
    inputSearch.current.value = "";
    getSearchCharacter(textSearch).then(setCharacter);
  };
  useEffect(() => {
    getAllCharacters(page).then(setCharacter);
  }, [page]);
  const onChangePage = (next) => {
    if (!character.info.previous && page + next <= 0) return;
    if (!character.info.next && page + next >= 9) return;
    setPage(page + next);
  };
  return (
    <>
      <nav>
        <input
          type="text"
          ref={inputSearch}
          placeholder="Search Character"
          onChange={onChangeTextSearch}
          onKeyDown={onSubmit}
        />
      </nav>
      <section className={styles.sectionImage}>
        <h1>The Rick and Morty API</h1>
        <div className={styles.heroImage}>
          <img src={mySvg} alt="Rick and Morty Siluet" />
        </div>
      </section>
      <section className={styles.containerSection}>
        <div className={styles.containerCard}>
          {character?.results?.map((characters) => (
            <Cards key={characters.id} character={characters} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
