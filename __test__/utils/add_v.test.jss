import add from '../../src/utils/add';

// 對誰做_怎麼做_回傳什麼
test('add_UseParam1and1_Return2', () => {
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

const getNewError = () => (
  new Error('The parameter is undefined or type is not number!')
);

test('add_UseStringParam_WillThrowError', () => {
  // Arrange
  const expected = getNewError();
  // Act
  const actual = () => { add(1); };
  // Assert
  expect(actual).toThrowError(expected);
});

test('add_UseOneParam_WillThrowError', () => {
  // Arrange
  const expected = getNewError();
  // Act
  const actual = () => { add(1); };
  // Assert
  expect(actual).toThrowError(expected);
});
