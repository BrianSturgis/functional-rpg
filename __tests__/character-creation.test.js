import * as character from "../src/js/character-creation.js";

describe("character-creation functions", () => {
  it("should return object with class warrior and name Joe", () => {
    const inputClass = "warrior";
    const characterClass = character.characterCreator(inputClass);
    const inputName = "Joe";
    const playerCharacter = characterClass(inputName);
    expect(playerCharacter.class).toEqual(inputClass);
    expect(playerCharacter.name).toEqual(inputName);
  });
});
