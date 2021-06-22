import React from 'react';
import { Text, View, Image } from 'react-native';

import IllustrationImg from 'assets/illustration.png';

import { ButtonIcon } from 'components/ButtonIcon';
import styles from './styles';

export function SignIn(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}e organize suas{'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}
          favritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.75} />
      </View>
    </View>
  );
}
