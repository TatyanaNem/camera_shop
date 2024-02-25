import { render, screen } from '@testing-library/react';
import { CameraCategory, CameraLevel, CameraType, ProductTab } from '../../common/const';
import Tabs from '.';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Component: Tabs', () => {
  const vendorCode = '12345';
  const category = CameraCategory.Photocamera;
  const type = CameraType.Collection;
  const level = CameraLevel.Hobby;
  const description = 'lorem ipsum';

  it('should render correctly', () => {
    render(<Tabs vendorCode={vendorCode} category={category} type={type} level={level} description={description}/>, {wrapper: BrowserRouter});

    expect(screen.getByTestId('tabs')).toBeInTheDocument();
  });

  it('should change tab when user clicks particular tab', async () => {
    render(<Tabs vendorCode={vendorCode} category={category} type={type} level={level} description={description}/>, {wrapper: BrowserRouter});

    await userEvent.click(screen.getByTestId('tab-button-0'));

    expect(screen.getByText(ProductTab.Characteristic)).toBeInTheDocument();
  });
});
