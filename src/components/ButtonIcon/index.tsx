import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native';

import DiscordImg from 'assets/discord.png';
import styles from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};

export const ButtonIcon: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
