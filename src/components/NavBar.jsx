import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";
import { getAllCharacters } from "../utils/getCharacter";
import home from "../assets/favicon.svg";
import styles from "../styles/modules/NavBar.module.css";
import gitsvg from "../assets/github.svg";
const NavBar = () => {
  const {
    textSearch,
    setCharacter,
    inputSearch,
    setTextSearch,
    setPage,
    setErrorState,
    errorState,
  } = useContext(CharacterContext);
  const onChangeTextSearch = (event) => {
    const text = inputSearch.current.value;
    setTextSearch(text);
  };
  const onSubmit = (event) => {
    if (event.key !== "Enter") return;
    event.target.value = "";
    setPage(1);
    const handleError = (error) => {
      setErrorState({ hasError: true, message: window.alert(error.message) });
      setTextSearch("");
    };
    getAllCharacters(1, textSearch).then(setCharacter).catch(handleError);
  };

  return (
    <header>
      <nav className={styles.NavContent}>
        <div>
          <a href="/">
            <img src={home} alt="Icono rick" />
          </a>
        </div>
        <ul>
          <li>
            <input
              className={styles.Search}
              type="text"
              ref={inputSearch}
              placeholder="Search Character"
              onChange={onChangeTextSearch}
              onKeyDown={onSubmit}
            />
          </li>
          <li>
            <a target="blank" href="https://github.com/JulianSar18">
              <span className={styles.FullScreen}>View on GitHub</span>
              <span className={styles.LessScreen}>
                <img src={gitsvg} alt="GitHub" />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
