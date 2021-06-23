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

describe("changeName function", () => {
  it("should return object with Brian", () => {
    const inputName = "Brian";
    const characterName = character.changeName("name")(inputName)({});
    expect(characterName.name).toEqual(inputName);
  });
});

describe("storeStats function", () => {
  it("should return object with name Joe, class warrior, health 14", () => {
    const inputClass = "warrior";
    const characterClass = character.characterCreator(inputClass);
    const inputName = "Joe";
    const playerCharacter = characterClass(inputName);
    const warriorStats = { health: 10 };
    const warriorInitialStats = character.storeStats(warriorStats);
    const playerWithStats = warriorInitialStats(playerCharacter);
    const increaseHealthByTwo = character.changeNumberStat("health")(2);
    playerWithStats(increaseHealthByTwo);
    const playerWithIncreasedHealth = playerWithStats(increaseHealthByTwo);
    expect(playerWithIncreasedHealth.health).toEqual(14);
  });
});
