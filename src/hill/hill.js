const config = require('./config');
const vect = require('vectorious');
const _ = require('lodash');

module.exports.encrypt = (text = '', key = config.key, alphabet = config.alphabet) => {
  const indexes = textToIndexes(text, alphabet);
  const splitted = splitOnChunks(indexes, key);
  
  return _
    .chain(splitted)
    .map(mulKeyOnBlock(key, alphabet))
    .flatten()
    .map(indexesToText(alphabet))
    .value()
    .join('');
};

module.exports.decrypt = (text = '', key = config.key, alphabet = config.alphabet) => {
  const indexes = textToIndexes(text, alphabet);
  const splitted = splitOnChunks(indexes, key);
  const inversed_key = inverse_key();
  
  return _
    .chain(splitted)
    .map(mulKeyOnBlock(inversed_key, alphabet))
    .flatten()
    .map(indexesToText(alphabet))
    .value()
    .join('');
};

function textToIndexes(text, alphabet) {
  return text.split('').map(letter => alphabet.indexOf(letter));
}

function indexesToText(alphabet) {
  return index => alphabet[index];
}

function splitOnChunks(text, key) {
  const chunk_size = _.flatten(key).length / 2;
  
  return _.chunk(text, chunk_size);
}

function mulKeyOnBlock(key, alphabet) {
  return block => {
    return key
      .map(row => _.zipWith(block, row, (a, b) => a * b))
      .map(row => row.reduce((a, b) => a + b, 0))
      .map(index => index % alphabet.length);
  }
}

function inverse_key() {
  return config.inv_key;
}
