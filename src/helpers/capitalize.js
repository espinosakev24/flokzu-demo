export const capitalize = str => {
  const [first, ...rest] = str;
  return [first.toUpperCase(), ...rest].join('');
};
