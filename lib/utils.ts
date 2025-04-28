export const darkenHexColor = (hex: string, amount: number): string => {
  // Remove o '#' se houver
  if (hex.startsWith("#")) hex = hex.slice(1);

  // Converte a cor hex em componentes RGB
  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);

  // Aplica o escurecimento (diminui os valores RGB)
  r = Math.max(0, r - amount);
  g = Math.max(0, g - amount);
  b = Math.max(0, b - amount);

  // Converte os componentes RGB de volta para hex
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};
