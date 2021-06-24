import React from 'react';
import { Image } from 'react-native';

import DiscordLogo from 'assets/discord-logo.png';
import styles from './styles';

export function GuildIcon(): JSX.Element {
  return <Image style={styles.image} source={DiscordLogo} resizeMode="cover" />;
}
