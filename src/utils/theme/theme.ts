export const colors = {
  white: '#fff',
  black: '#000',
  red: '#FF0000',
  grey100: '#A09B8C',
  grey150: '#5B5A56',
  grey200: '#3C3C41',
  grey300: '#1E2328',
  greyCool: '#1E282D',
  hextechBlack: '#010A13',
  gold100: '#F0E6D2',
  gold200: '#C8AA6E',
  gold400: '#C8983C',
  gold500: '#785A28',
  gold600: '#463714',
  gold700: '#32281E',
  blue100: '#CDFAFA',
  blue200: '#0AC8B9',
  blue300: '#0397AB',
  blue400: '#005A82',
  blue500: '#0A323C',
  blue600: '#091428',
  blue700: '#0A1428',
};

export const getColors = (colorName: keyof typeof colors) => {
  const currentColor = colors[colorName];
  if (!currentColor) {
    throw new Error(`Color ${colorName} is not defined`);
  }
  return colors[colorName];
};
