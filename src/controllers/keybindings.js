function bindKey(eventKey, key, action, ...parameters) {
  const keybinding = eventKey.toLowerCase();
  if (keybinding !== key) return;

  action(...parameters);
}

function bindWeaponControlKeys(eventKey, weapons, gameController) {
  for (const weapon of weapons) {
    const key = weapon.charAt(0);
    bindKey(eventKey, key, gameController, weapon);
  }
}

export { bindKey, bindWeaponControlKeys };
