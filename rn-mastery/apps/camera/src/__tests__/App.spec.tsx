import * as React from 'react';
import { render } from '@testing-library/react-native';

import _layout from '../app/_layout';

test('renders correctly', () => {
  const { getByTestId } = render(<_layout />);
  // @ts-ignore
  expect(getByTestId('heading')).toHaveTextContent('Welcome');
});
