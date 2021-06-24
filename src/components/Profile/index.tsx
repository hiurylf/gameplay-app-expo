import React from 'react';
import { Text, View } from 'react-native';

import { Avatar } from 'components/Avatar';
import styles from './styles';

type Props = {
  name: string;
};

export function Profile({ name }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/hiurylf.png" />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá, </Text>

          <Text style={styles.username}>{name}</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
