import axios from 'axios';
import userApi from '../../src/api/user';

// 為 axios 做 Mock
jest.mock('axios');

test('getUserInfo_Execute_ReturnUserInfo', () => {
  // Arrange
  const expected = { name: '神 Q 超人', };
  const res = { data: expected, };

  // 設置 Mock 的理想回傳值，隔離網路環境
  axios.get.mockResolvedValue(res);

  // Act
  return userApi.getUserInfo().then((resp) => {
    // Assert
    expect(resp).toEqual(expected);
  });
});
