import { render, screen } from '@testing-library/react';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Welcome />);
    expect(screen.getByText('Hessdalen mystery')).toHaveAttribute(
      'href',
      'http://hessdalen.org/'
    );
  });
});
