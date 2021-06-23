// battle function
// somehow get monster and player objects
export const rollDice = (numberOfSides) => {
  const min = Math.ceil(1);
  const max = Math.floor(numberOfSides);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
