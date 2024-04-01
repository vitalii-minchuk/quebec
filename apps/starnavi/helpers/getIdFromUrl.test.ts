import { getIdFromUrl } from './getIdFromUrl';

describe('getIdFromUrl', () => {
  test('should return empty string for undefined url', () => {
    expect(getIdFromUrl()).toBe('');
  });

  test('should return empty string for empty url', () => {
    expect(getIdFromUrl('')).toBe('');
  });

  test('should return empty string for invalid url', () => {
    expect(getIdFromUrl('invalid_url')).toBe('');
  });

  test('should return correct id from valid url', () => {
    const url = 'https://sw-api.starnavi.io/people/1/';
    expect(getIdFromUrl(url)).toBe('1');
  });

  test('should return correct id from valid url with multiple slashes', () => {
    const url = 'https://sw-api.starnavi.io///people/1/';
    expect(getIdFromUrl(url)).toBe('1');
  });
});