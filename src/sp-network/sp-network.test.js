const sp = require('./sp-network');
const config = require('./config');

describe('SP network should work correctly', () => {
  test('sp-network encrypt correctly', () => {
    const calculation_config = config;
    calculation_config.text = config.base_text;
    
    expect(sp.encrypt(calculation_config)).toBe('');
  });
});
