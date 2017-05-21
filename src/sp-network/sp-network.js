const _ = require('lodash');
const Big = require('big.js');

module.exports.encrypt = config => {
  config = parse_config(config);
  
  return encrypt(
    config.key,
    config.text,
    config.permutation_block,
    config.substitution_blocks,
    config.cycles
  ).toString(16).toUpperCase().split('').join(' ');
};

module.exports.decrypt = () => {

};

function parse_config(config) {
  return {
    key: hex_to_dec(removeSpaces(config.key)),
    text: hex_to_dec(removeSpaces(config.text)),
    permutation_block: config.permutation_block.split(' ').map(item => +item),
    substitution_blocks: config.substitution_blocks.map(block => block.split(' ')),
    cycles: config.cycles
  };
}

function encrypt(key, text, permutation_block, substitution_blocks, cycles) {
  if (cycles !== 0) {
    const xored_key_with_text = dec_to_bin(key ^ text);
    const substituted = substitution(xored_key_with_text, substitution_blocks);
    const result = permutation(substituted, permutation_block);
    const recalculated_key = recalculate_key(key);
    
    return encrypt(
      recalculated_key,
      result,
      permutation_block,
      substitution_blocks,
      cycles - 1
    );
  } else {
    return text;
  }
}

function substitution(data, substitution_blocks) {
  const bites_in_chunk = 4;
  const splitted = _.chunk(data, bites_in_chunk);
  const substituted = _.zipWith(splitted, substitution_blocks, (data_block, s_block) => {
    const data_block_dec = +parseInt(data_block, 2).toString(10);
    return s_block[data_block_dec];
  }).join('');
  
  return hex_to_bin(substituted);
}

function permutation(data, permutation_block) {
  const result = new Array(permutation_block.length);
  
  _.forEach(data, (item, i) => {
    const new_position = permutation_block[i];
    result[new_position] = item;
  });
  
  return bin_to_dec(result.join(''));
}

function recalculate_key(key) {
  const delta = new Big(parseInt('11111', 2));
  const module = (new Big(2)).pow(32);
  key = new Big(key);
  
  return key.pow(3).plus(delta).mod(module).toString();
}

function removeSpaces(str) {
  return str.split(' ').join('');
}

function dec_to_bin(dec) {
  return parseInt(dec).toString(2);
}

function hex_to_bin(hex) {
  return parseInt(hex, 16).toString(2);
}

function hex_to_dec(hex) {
  return parseInt(hex, 16);
}

function bin_to_dec(bin) {
  return parseInt(bin, 2);
}
