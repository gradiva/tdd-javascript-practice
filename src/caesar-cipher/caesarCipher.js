const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseAlphabet = lowerCaseAlphabet.toUpperCase();

// https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
const mod = (a, n) => ((a % n) + n) % n;

const shiftChar = (char, shiftFactor) => {
  let index = lowerCaseAlphabet.indexOf(char);

  if (index !== -1) {
    const newIndex = mod(index + shiftFactor, lowerCaseAlphabet.length);

    return lowerCaseAlphabet[newIndex];
  }

  index = upperCaseAlphabet.indexOf(char);

  if (index !== -1) {
    const newIndex = mod(index + shiftFactor, upperCaseAlphabet.length);

    return upperCaseAlphabet[newIndex];
  }

  return char;
};

export const caesarCipher = (input, shiftFactor = 1) => {
  const chars = input.split('');
  const shiftedChars = chars.map((char) => shiftChar(char, shiftFactor));

  return shiftedChars.join('');
};
