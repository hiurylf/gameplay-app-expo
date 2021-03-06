import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from 'assets/illustration.png';

import { ButtonIcon } from 'components/ButtonIcon';
import { Background } from 'components/Background';

import styles from './styles';

export function SignIn(): JSX.Element {
  const navigation = useNavigation();

  function handleSingIn(): void {
    navigation.navigate('Home');
  }

  return (
    <Background>
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

          <ButtonIcon title="Entrar com Discord" onPress={handleSingIn} />
        </View>
      </View>
    </Background>
  );
}
