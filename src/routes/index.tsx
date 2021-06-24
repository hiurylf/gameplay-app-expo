import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from 'routes/auth.routes';

export default function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
