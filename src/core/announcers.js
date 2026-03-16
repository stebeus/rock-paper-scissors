class Announcement {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

function announceRoundWinner(humanChoice, computerChoice, result) {
  let content = ['Tie!', `${humanChoice} ties with ${computerChoice}`];

  if (result === 1) {
    content = ['You win!', `${humanChoice} beats ${computerChoice}`];
  }

  if (result === 2) {
    content = ['You lose!', `${computerChoice} beats ${humanChoice}`];
  }

  return new Announcement(...content);
}

function announceGameWinner([humanScore, computerScore]) {
  const description =
    humanScore > computerScore
      ? 'You beat the computer'
      : 'The computer beat you';

  return new Announcement('Game over!', description);
}

export { announceGameWinner, announceRoundWinner };
