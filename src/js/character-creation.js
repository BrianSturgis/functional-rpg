//initial creation will name input, type, initialize stuff
const characterCreator = (characterClass) => {
  let currentCharacter = { class: characterClass };
  return (characterName) => {
    return (currentCharacter = { ...currentCharacter, name: characterName });
  };
};

const storeStats = (initialStats) => {
  const newCharacterStats = initialStats;
  return (characterObject) => {
    let characterWithStats = { ...characterObject, ...newCharacterStats };
    return (statChangeFunction) => {
      const newStats = statChangeFunction(characterWithStats);
      characterWithStats = { ...newStats };
      return newStats;
    };
  };
};

const changeStats = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

console.log();
