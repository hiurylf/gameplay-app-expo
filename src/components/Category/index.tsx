import React from 'react';
import { Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import theme from 'global/styles/theme';
import styles from './styles';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasChecked?: boolean;
  checked?: boolean;
};

export function Category({
  title,
  icon: Icon,
  checked,
  hasChecked = false,
  ...rest
}: Props): JSX.Element {
  const { secondary40, secondary50, secondary70, secondary75 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.45 }]}
          colors={[checked ? secondary75 : secondary50, secondary40]}
        >
          {hasChecked && (
            <View style={checked ? styles.check : styles.checked} />
          )}

          <Icon width={48} height={48} />

          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}
