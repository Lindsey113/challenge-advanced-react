// Write your tests here
import React from 'react';
import AppFunctional from './AppFunctional';
import { render, screen, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

// test('sanity', () => {
//   expect(true).toBe(false)
// })

test('reset button functions', async () => {
  const {container} = render(<AppFunctional />)
  const resetButton = container.querySelector('#reset')

  expect(resetButton).toBeInTheDocument()
  fireEvent.click(resetButton)
})

test('six buttons render to screen', () => {
  render(<AppFunctional />)
  const buttons = screen.queryAllByRole('button')

  expect(buttons.length).toBe(6)
})

test('form renders without errors', () => {
  render(<AppFunctional />)
})

test('submit button works', async () => {
  const {container} = render(<AppFunctional />)
  const submitButton = container.querySelector('#submit')

  expect(submitButton).toBeInTheDocument()
  fireEvent.click(submitButton)
})
