function formatChoices(weapons, ...choices) {
  const formatted = [];

  for (const choice of choices) {
    const isChoiceValidForWeapon = choice >= 0 && choice < weapons.length;
    if (isChoiceValidForWeapon) formatted.push(weapons[choice]);
  }

  return formatted;
}

export { formatChoices };
