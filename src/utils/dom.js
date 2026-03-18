function delegateEventListener(type, selector, listener, parent = document) {
  function handleDelegation(event) {
    const element = event.target.closest(selector);
    if (element == null) return;

    listener(event);
  }

  parent.addEventListener(type, handleDelegation);
}

export { delegateEventListener };
