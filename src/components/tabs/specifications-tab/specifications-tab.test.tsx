import { render, screen } from '@testing-library/react';
import { SpecificationsTab } from '..';
import { CameraCategory, CameraLevel, CameraType } from '../../../common/const';

describe('Component: Tabs', () => {
  const vendorCode = '12345';
  const category = CameraCategory.Photo;
  const type = CameraType.Collection;
  const level = CameraLevel.Amateur;

  it('should render correctly', () => {
    render(<SpecificationsTab vendorCode={vendorCode} category={category} type={type} level={level} />);

    expect(screen.getByText('Артикул:')).toBeInTheDocument();
  });
});
