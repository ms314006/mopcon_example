import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import Counter from '../../../src/component/Counter';

expect.extend({ toBeInTheDocument, });

const getRenderCounter = () => (
  render(<Counter />)
);

describe('Counter', () => {
  afterEach(cleanup);

  test('Render_WillInDocument', () => {
    const { getByTestId, } = getRenderCounter();
    const counter = getByTestId('counter');
    expect(counter).toBeInTheDocument();
  });

  test('ClickCounterButton_CountWillIncrease1', () => {
    const { getByTestId, } = getRenderCounter();
    const counterText = getByTestId('counterText');
    const counterButton = getByTestId('counterButton');

    fireEvent.click(counterButton);

    expect(counterText.innerHTML).toBe('1');
  });
});
