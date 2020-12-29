import { render, screen } from '@testing-library/react'
import Home from '../Home'

test('renders home', () => {
  render(<Home />)
  const linkElement = screen.getByText(/Home/i)
  expect(linkElement).toBeInTheDocument()
})
