import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import theme from 'global/styles/theme';
import styles from './styles';

type Props = {
  urlImage: string;
};

export function Avatar({ urlImage }: Props): JSX.Element {
  const { secondary30, secondary40 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary30, secondary40]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
