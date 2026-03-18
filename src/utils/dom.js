function elementFromHtml(strings, ...values) {
  const serializeHtml = (value) =>
    value instanceof Element ? value.outerHTML : value;

  const getRawHtml = () =>
    String.raw({ raw: strings }, ...values.map(serializeHtml));

  const template = document.createElement('template');
  const rawHtml = getRawHtml();

  template.innerHTML = rawHtml;

  return template.content.firstElementChild;
}

function delegateEventListener(type, selector, listener, parent = document) {
  function handleDelegation(event) {
    const element = event.target.closest(selector);
    if (element == null) return;

    listener(event);
  }

  parent.addEventListener(type, handleDelegation);
}

export { delegateEventListener, elementFromHtml };
