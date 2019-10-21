const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseAlphabet = lowerCaseAlphabet.toUpperCase();

const shiftChar = (char, shiftFactor) => {
  const lowerCaseAlphabetIndex = lowerCaseAlphabet.indexOf(char);

  if (lowerCaseAlphabet !== -1) {
    const newIndex = (lowerCaseAlphabetIndex + shiftFactor) % lowerCaseAlphabet.length;
    return lowerCaseAlphabet[newIndex];
  }

  const upperCaseAlphabetIndex = upperCaseAlphabet.indexOf(char);

  if (upperCaseAlphabet !== -1) {
    const newIndex = (upperCaseAlphabetIndex + shiftFactor) % upperCaseAlphabet.length;
    return upperCaseAlphabet[newIndex];
  }

  return char;
};

export const caesarCipher = (input, shiftFactor = 1) => {
  const chars = input.split('');
  const shiftedChars = chars.map((char) => shiftChar(char, shiftFactor));

  return shiftedChars.join('');
};
