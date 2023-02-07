import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { LandingPage } from './landingPage';

describe('LandingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
