function getRandomIndex({ length }) {
  const randomIndex = Math.random() * length;
  return Math.floor(randomIndex);
}

const getScoreDifference = ([human, computer]) => Math.abs(human - computer);

export { getRandomIndex, getScoreDifference };
