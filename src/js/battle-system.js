// battle function
// somehow get monster and player objects

//maybe create a fight function to give to storeStats as the statChangeFunction
//that means that the fight function will have the player/monster object passed to it
//have that roll a die to remove some health?
//some kind of check on health
//function that is passed the monster that is then passed to the storeStats?

export const rollDice = (numberOfSides) => {
  const min = Math.ceil(1);
  const max = Math.floor(numberOfSides);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
