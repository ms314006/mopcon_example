import add from '../src/utils/add';

test('add_useParam1and1_return2', () => {
  const expected = 2;
  const actual = add(1, 1);
  expect(actual).toBe(expected);
});

test('add_useStringType_willThrowError', () => {
  const expected = 'The parameter is undefined or type is not number!';
  const actual = () => { add('1', 1); };
  expect(actual).toThrowError(expected);
});

test('add_useOneParame_willThrowError', () => {
  const expected = 'The parameter is undefined or type is not number!';
  const actual = () => { add(1); };
  expect(actual).toThrowError(expected);
});
