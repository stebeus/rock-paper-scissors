function bindKey(eventKey, key, action, ...parameters) {
  const keybinding = eventKey.toLocaleLowercase();
  if (keybinding !== key) return;

  action(...parameters);
}

function bindWeaponControlKeys(weapons, gameController) {
  for (const weapon of weapons) {
    const key = weapon.charAt(0);
    bindKey(key, gameController, weapon);
  }
}

export { bindWeaponControlKeys };
