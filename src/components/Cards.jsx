import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";
import Card from "./Card";

const Cards = () => {
  const { character } = useContext(CharacterContext);
  return (
    <>
      {character?.results?.map((characters) => (
        <Card key={characters.id} characters={characters} />
      ))}
    </>
  );
};

export default Cards;
