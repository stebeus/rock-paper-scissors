function bindKey(key, action, ...parameters) {
  const keybinding = key.toLocaleLowercase();
  if (!keybinding) return;

  action(...parameters);
}
