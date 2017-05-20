const config = require('./config');

module.exports = (text = '', alphabet = config.alphabet, key = config.key) => {
  return text.split('')
    .map(letter => getLetterIndex(letter, alphabet))
    .map(index => getLetterByIndex(index, key))
    .join('');
};

function getLetterIndex(letter, alphabet) {
  return alphabet && alphabet.indexOf(letter);
}

function getLetterByIndex(index, alphabet) {
  return alphabet && alphabet[index];
}
