const serializeHtml = (value) =>
  value instanceof Element ? value.outerHTML : value;
