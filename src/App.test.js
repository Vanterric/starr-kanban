import { render, screen } from '@testing-library/react';
import StarrKanban from './Components/StarrKanban';

test('renders learn react link', () => {
  render(<StarrKanban />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
