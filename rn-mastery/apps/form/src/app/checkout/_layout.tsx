import { Stack } from 'expo-router';
import React from 'react';
import _ from 'lodash';

const screens = ['personal', 'payment', 'confirm'];

export default function CheckoutLayout() {
  return (
    <Stack>
      {screens.map(screen => (
        <Stack.Screen
          key={screen}
          name={screen}
          options={{ title: _.startCase(screen) }}
        />
      ))}
    </Stack>
  );
}
