import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";
import styles from "./styles/modules/App.module.css";
import mySvg from "./assets/siluet.svg";
import { CharacterProvider } from "./context/CharacterContext";

function App() {
  return (
    <CharacterProvider>
      <NavBar />
      <section className={styles.sectionImage}>
        <h1>The Rick and Morty API</h1>
        <div className={styles.heroImage}>
          <object data={mySvg} title="Rick and Morty"></object>
        </div>
      </section>

      <section className={styles.containerSection}>
        <Pagination />
        <div className={styles.containerCard}>
          <Cards />
        </div>
        <Pagination />
      </section>
    </CharacterProvider>
  );
}

export default App;
