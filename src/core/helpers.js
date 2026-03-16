function getRandomIndex({ length }) {
  const randomIndex = Math.random() * length;
  return Math.floor(randomIndex);
}

const getScoreDifference = ([human, computer]) => Math.abs(human - computer);

function getWeaponIndexes(weapons, ...playerChoices) {
  const getWeaponIndex = (weapon) => weapons.indexOf(weapon);
  return playerChoices.map(getWeaponIndex);
}

export { getRandomIndex, getScoreDifference, getWeaponIndexes };
