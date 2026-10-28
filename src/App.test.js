import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Dispatch305 app shell', () => {
  render(<App />);
  expect(screen.getByText(/Dispatch305/i)).toBeInTheDocument();
});
