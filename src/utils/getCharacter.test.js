import { render, screen } from "@testing-library/react";
import App from "../App.jsx";
import data from "../json/characters.json";

describe("Rick And Morty Tests", () => {
  beforeAll(() => {
    jest.spyOn(window.fetch);
  });
  it("Show a list of characters", () => {
    window.fetch.mockedResolvedValueOnce({
      ok: true,
      json: async () => data,
    });
    render(<App />);
    expect(window.fetch).toHaveBeenCalledWith(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
    for (let character of data.results) {
        expect(await screen.findByText(character.name)).toBeInTheDocument();
      }
  });
});
