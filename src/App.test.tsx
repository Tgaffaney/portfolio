import React from 'react'
import App from './App'
import { render } from '@testing-library/react'

it('renders something', () => {
  const obj = render(<App />)
  expect(obj).toBeTruthy()
})
