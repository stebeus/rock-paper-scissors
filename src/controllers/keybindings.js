function bindKey(key, action, ...parameters) {
  const keybinding = key.toLocaleLowercase();
  if (!keybinding) return;

  action(...parameters);
}

function bindWeaponControlKeys(weapons, gameController) {
  for (const weapon of weapons) {
    const key = weapon.charAt(0);
    bindKey(key, gameController, weapon);
  }
}

export { bindWeaponControlKeys };
