import styles from "../styles/modules/Cards.module.css";

const Cards = ({ character }) => {
  return (
    <div className={styles.containerCard}>
      <article className={styles.card}>
        <div>
          <img
            className={styles.cardImg}
            src={character.image}
            alt={character.name}
          />
        </div>
        <div className={styles.containerInfo}>
          <div className={styles.infoText}>
            <h2>{character.name}</h2>
            <span className={styles.status}>
              <span className={styles.icon}>
                {character.status}-{character.species}
              </span>
            </span>
          </div>
          <div className={styles.infoText}>
            <span>Last Know Location:</span>
            <h3>{character.location.name}</h3>
          </div>
          <div className={styles.infoText}>
            <span>First Seen in:</span>
            <h3>No implementado</h3>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Cards;
