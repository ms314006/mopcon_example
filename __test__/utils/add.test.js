import add from '../../src/utils/add';

// 對誰做＿做了什麼（怎麼做）＿期望結果
// Ｏ add_UseParam1and1_Return2
// Ｘ add_UseTwoNumbers_RrturnSum

test('add_useParam1and1_return2', () => {
  // Arrange 安排
  const expected = 2;

  // Act 作為
  const actual = add(1, 1);

  // Assert 斷言
  // 1. 確認回傳結果
  // 2. 確認狀態改變
  // 3. 確認某個函式是否有執行
  expect(actual).toBe(expected);
});

test('add_useStringType_willThrowError', () => {
  // Arrange
  const expected = 'The parameter type is not number!';
  // Act
  const actual = () => { add('1', 1); };
  // Assert
  expect(actual).toThrowError(expected);
});

test('add_useOneParame_willThrowError', () => {
  // Arrange
  const expected = 'The parameter type is not number!';
  // Act
  const actual = () => { add(1); };
  // Assert
  expect(actual).toThrowError(expected);
});
