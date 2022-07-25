export const getEpisodes = async (episode) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode/${episode}`
  );
  const data = await response.json();
  return data;
};
