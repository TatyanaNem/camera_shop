import { render, screen } from '@testing-library/react';
import { DescriptionTab } from '..';

describe('Component: Tabs', () => {
  const description = 'lorem ipsum';

  it('should render correctly', () => {
    render(<DescriptionTab text={description} />);

    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
