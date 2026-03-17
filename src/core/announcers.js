function announceOutcome([humanChoice, computerChoice], roundWinner) {
  const outcomes = [
    `${humanChoice} ties with ${computerChoice}!`,
    `${humanChoice} beats ${computerChoice}!`,
    `${humanChoice} doesn't beat ${computerChoice}...`,
  ];

  if (roundWinner == null) return outcomes[0];

  return roundWinner === 0 ? outcomes[1] : outcomes[2];
}

const announceGameWinner = ([humanScore, computerScore]) =>
  humanScore > computerScore ? 'You win!' : 'You lose...';

export { announceGameWinner, announceOutcome };
