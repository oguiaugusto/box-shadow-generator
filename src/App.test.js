import { render, screen } from '@testing-library/react';
import App from './App';

describe('Expects App', () => {
  beforeEach(() => render(<App />));
  it('To have a title', () => {
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
  });
})
