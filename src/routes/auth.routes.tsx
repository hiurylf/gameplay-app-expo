import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import theme from 'global/styles/theme';

import { Home } from 'pages/Home';
import { SignIn } from 'pages/SignIn';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(): JSX.Element {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.secondary100 },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
