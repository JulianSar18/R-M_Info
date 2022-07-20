import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";
import styles from "../styles/modules/Cards.module.css";

const Cards = () => {
  const { character } = useContext(CharacterContext);
  return (
    <>
      {character?.results?.map((characters) => (
        <div key={characters.id} className={styles.containerCard}>
          <article className={styles.card}>
            <div>
              <img
                className={styles.cardImg}
                src={characters.image}
                alt={characters.name}
              />
            </div>
            <div className={styles.containerInfo}>
              <div className={styles.infoText}>
                <h2>{characters.name}</h2>
                <span className={styles.status}>
                  <span className={styles.icon}>
                    {characters.status}-{characters.species}
                  </span>
                </span>
              </div>
              <div className={styles.infoText}>
                <span>Last Know Location:</span>
                <h3>{characters.location.name}</h3>
              </div>
              <div className={styles.infoText}>
                <span>First Seen in:</span>
                <h3>No implementado</h3>
              </div>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default Cards;
