function renderComputerOutput(computerChoice = '') {
  const computerOutput = document.querySelector('.computer-output');
  computerOutput.textContent = computerChoice;
}

export { renderComputerOutput };
