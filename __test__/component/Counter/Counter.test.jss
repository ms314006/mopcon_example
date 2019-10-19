import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import Counter from '../../../src/component/Counter';

expect.extend({ toBeInTheDocument, });

test('Counter_Render_WillInDocument', () => {
  const { container, } = render(<Counter />);
  const counter = container.querySelector('.counter');
  expect(counter).toBeInTheDocument();
});

test('Counter_ClickCounterButton_CountWillIncrease1', () => {
  const { container, } = render(<Counter />);
  const counter = container.querySelector('.counter');
  const counterText = counter.children[0];
  const counterButton = counter.children[1];

  fireEvent.click(counterButton);

  expect(counterText.innerHTML).toBe('1');
});
