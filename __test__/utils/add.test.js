import add from '../../src/utils/add';

// 對誰做＿做了什麼（怎麼做）＿期望結果
// Ｏ add_UseParam1and1_Return2
// Ｘ add_UseTwoNumbers_RrturnSum

test('add_useParam1and1_return2', () => {
  const expected = 2;
  const actual = add(1, 1);
  expect(actual).toBe(expected);
});

test('add_useStringType_willThrowError', () => {
  const expected = 'The parameter type is not number!';
  const actual = () => { add('1', 1); };
  expect(actual).toThrowError(expected);
});

test('add_useOneParame_willThrowError', () => {
  const expected = 'The parameter type is not number!';
  const actual = () => { add(1); };
  expect(actual).toThrowError(expected);
});
