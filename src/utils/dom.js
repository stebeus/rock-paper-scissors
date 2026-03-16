const serializeHtml = (value) =>
  value instanceof Element ? value.outerHTML : value;

const getRawHtml = (strings, ...values) =>
  String.raw({ raw: strings }, ...values.map(serializeHtml));
