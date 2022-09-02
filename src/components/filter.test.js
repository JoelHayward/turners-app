const filterPunctuation = require('./filter')

describe('replace filterPunctuation with appropriate space', () => {
  const expected = 'hello world'
  test('hello%world', () => {
    const actual = filterPunctuation('hello%world')
    expect(actual).toBe(expected)
  });
  test('!hello world', () => {
    const actual = filterPunctuation('!hello world')
    expect(actual).toBe(expected)
  });
  test(';hello?world!', () => {
    const actual = filterPunctuation(';hello?world!')
    expect(actual).toBe(expected)
  });
  test('hello;world', () => {
    const actual = filterPunctuation('hello;world')
    expect(actual).toBe(expected)
  });
  test('hello world?', () => {
    const actual = filterPunctuation('hello world?')
    expect(actual).toBe(expected)
  });
});

