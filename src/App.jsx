import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import styles from "./styles/modules/App.module.css";
import mySvg from "./assets/siluet.png";
import { CharacterProvider } from "./context/CharacterContext";

function App() {
  return (
    <CharacterProvider>
      <NavBar />
      <section className={styles.sectionImage}>
        <h1>The Rick and Morty API</h1>
        <div className={styles.heroImage}>
          <img src={mySvg} alt="Rick and Morty Siluet" />
        </div>
      </section>
      <section className={styles.containerSection}>
        <div className={styles.containerCard}>
          <Cards />
        </div>
      </section>
    </CharacterProvider>
  );
}

export default App;
