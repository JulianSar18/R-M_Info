export async function getAllCharacters(page = 1) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const data = await response.json();
  return data;
}

export async function getSpecificCharacters(id = 1) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();
  return data;
}

export async function getSearchCharacter(name) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );
  const data = await response.json();
  return data;
}
