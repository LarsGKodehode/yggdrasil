import { render } from '@testing-library/react';

import ReactCommonUi from './ReactCommonUi';

describe('ReactCommonUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactCommonUi />);
    expect(baseElement).toBeTruthy();
  });
});
