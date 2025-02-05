import * as React from 'react';
import { render } from '@testing-library/react-native';

import index from '../app';

test('renders correctly', () => {
  const { getByTestId } = render(<index />);
  // @ts-ignore
  expect(getByTestId('heading')).toHaveTextContent('Welcome');
});
