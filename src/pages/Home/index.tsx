import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import { Profile } from 'components/Profile';
import { ButtonAdd } from 'components/ButtonAdd';
import { CategorySelect } from 'components/CategorySelect';
import { ListHeader } from 'components/ListHeader';
import { Appointment } from 'components/Appointment';
import { ListDivider } from 'components/ListDivider';
import { Background } from 'components/Background';

import styles from './styles';

export function Home(): JSX.Element {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
  ];

  function handleCategory(categoryId: string): void {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile name="Hiury Ferreira" />

        <ButtonAdd />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategory}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          renderItem={({ item }) => <Appointment data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
          keyExtractor={(item) => item.id}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );
}
