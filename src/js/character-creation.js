//initial creation will name input, type, initialize stuff
export const characterCreator = (characterClass) => {
  let currentCharacter = { class: characterClass };
  return (characterName) => {
    return (currentCharacter = { ...currentCharacter, name: characterName });
  };
};

export const storeStats = (initialStats) => {
  return (characterObject) => {
    let characterWithStats = { ...characterObject, ...initialStats };
    return (statChangeFunction) => {
      const newStats = statChangeFunction(characterWithStats);
      characterWithStats = { ...newStats };
      return newStats;
    };
  };
};

export const changeName = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: value,
    });
  };
};

export const changeNumberStat = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

console.log();
