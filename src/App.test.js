import { render, screen } from '@testing-library/react';
import Modul3_t from './Modul3_t';

test('renders learn react link', () => {
  render(<Modul3_t />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
