import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { ProjectsPage } from './projectsPage';

describe('LandingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <ProjectsPage />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
