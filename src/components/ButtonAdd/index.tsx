import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from 'global/styles/theme';
import styles from './styles';

export function ButtonAdd({ ...rest }: RectButtonProps): JSX.Element {
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialCommunityIcons
        color={theme.colors.heading}
        name="plus"
        size={24}
      />
    </RectButton>
  );
}
