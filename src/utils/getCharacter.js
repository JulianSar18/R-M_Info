export async function getAllCharacters(page = 1, name) {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}${
    name ? `&name=${name}` : ""
  }`;
  const response = await fetch(url);
  if (response.status === 404) {
    throw new NetworkError();
  }
  const data = await response.json();
  return data;
}

class NetworkError extends Error {
  constructor() {
    super("Not found character whit this name");
  }
}
