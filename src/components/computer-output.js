function renderComputerOutput(message = 'First to score a 2-point lead wins') {
  const computerOutput = document.querySelector('#computer');
  computerOutput.textContent = message;
}

export { renderComputerOutput };
