import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import Counter from '../../../src/component/Counter';

expect.extend({ toBeInTheDocument, });

// 強壯的測試案例，使用測試特徵尋找某個需要執行的 UI
// 只要 UI 本身的行為不變，測試結果就不變

const getRenderCounter = () => (
  render(<Counter />)
);

describe('Counter', () => {
  afterEach(cleanup);

  test('Render_WillInDocument', () => {
    // Arrange
    const { getByTestId, } = getRenderCounter();
    // Act
    const counter = getByTestId('counter');
    // Assert
    expect(counter).toBeInTheDocument();
  });

  test('ClickCounterButton_CountWillIncrease1', () => {
    // Arrange
    const { getByTestId, } = getRenderCounter();
    const counterText = getByTestId('counterText');
    const counterButton = getByTestId('counterButton');
    // Act
    fireEvent.click(counterButton);
    // Assert
    expect(counterText.innerHTML).toBe('1');
  });
});
