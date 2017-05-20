const simple_replacement = require('./simple-replacement');

describe('Simple replacement code should encrypt correctly', () => {
  test('correctly encrypt my text', () => {
    const text = 'ИОРДАНИЯ';
    const result = 'ФШЁГДВФЪ';
    
    expect(simple_replacement(text)).toBe(result);
  });
  
  test('correctly encrypt Halezof text', () => {
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    const key = 'ЦВЮЕНПЛЖЭКЩАЪУЙЯОБГЗЁДФЬИХЫЧСРМТШ';
    const text = 'ИНДОНЕЗИЯ';
    const result = 'КЙНЯЙПЭКШ';
    
    expect(simple_replacement(text, alphabet, key)).toBe(result);
  });
  
  test('correctly encrypt Politay text', () => {
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    const key = 'КПЦОАЕНЗИРУЬГЙЖШВЛЭЩФМЫТДСБЁЮХЧЪЯ';
    const text = 'ГОНКОНГ';
    const result = 'ОШЖЬШЖО';
    
    expect(simple_replacement(text, alphabet, key)).toBe(result);
  });
  
  test('correctly encrypt Drozd text', () => {
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    const key = 'ХРЬБЁКШЩУЯЙМЕЛЖФИЧВЫТСЮПНЭАЗОГДЦЪ';
    const text = 'ДОМИНИКА';
    const result = 'ЁФЛЯЖЯМХ';
    
    expect(simple_replacement(text, alphabet, key)).toBe(result);
  });
  
  test('correctly encrypt Zenkevich text', () => {
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    const key = 'ЖЧЮАНДМФЦЛЕЯЙОРЪЩИЬШЁЗЭКТБВЫГХСУП';
    const text = 'ДЖИБУТИ';
    const result = 'НФЛЧЁШЛ';
    
    expect(simple_replacement(text, alphabet, key)).toBe(result);
  });
  
  test('correctly encrypt Aliluiko text', () => {
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    const key = 'ЕНТЯХШРЩЬБВОГЧЗЛУДЪЮЭМКЁЙЦСИЫФАПЖ';
    const text = 'ИЗРАИЛЬ';
    const result = 'БЬДЕБГФ';
    
    expect(simple_replacement(text, alphabet, key)).toBe(result);
  });
});

