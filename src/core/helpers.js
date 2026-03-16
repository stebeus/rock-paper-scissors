function getRandomIndex({ length }) {
  const randomIndex = Math.random() * length;
  return Math.floor(randomIndex);
}

export { getRandomIndex };
