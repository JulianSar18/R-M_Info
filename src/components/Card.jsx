import React, { useEffect, useState } from "react";
import styles from "../styles/modules/Cards.module.css";
import { getEpisodes } from "../utils/getEpisodes";

const Card = ({ characters }) => {
  const [episode, setEpisode] = useState({});
  useEffect(() => {
    const firstSeen = characters?.episode[0];
    const idEpisode = Number(firstSeen.split("/").pop());
    getEpisodes(idEpisode).then(setEpisode);
  }, []);

  const statusIcon = (status) => {
    switch (status) {
      case "Alive":
        return styles.iconAlive;
      case "Dead":
        return styles.iconDead;
      case "unknown":
        return styles.iconUnknown;
    }
  };
  return (
    <div key={characters.id} className={styles.containerCard}>
      <article className={styles.card}>
        <div className={styles.cardImg}>
          <img src={characters.image} alt={characters.name} />
        </div>
        <div className={styles.containerInfo}>
          <div className={styles.infoText}>
            <h2>{characters.name}</h2>
            <span className={styles.status}>
              <span className={statusIcon(characters.status)}></span>
              {characters.status} - {characters.species}
            </span>
          </div>
          <div className={styles.infoText}>
            <span>Last Know Location:</span>
            <h4>{characters.location.name}</h4>
          </div>
          <div className={styles.infoText}>
            <span>First Seen in:</span>
            <h4>{episode?.name}</h4>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
