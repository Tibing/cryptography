const hill = require('./hill');

describe('Hill\'s cipher should encrypt correctly', () => {
  test('correctly encrypt and decrypt back my text', () => {
    const text = 'БУМАГА_ВСЕ_СТЕРПИТ';
    const result = 'НШЧОПЪЗМ_ЭЧТЪЕПЦ_Б';
    
    expect(hill.encrypt(text)).toBe(result);
    expect(hill.decrypt(result)).toBe(text);
  });
});
