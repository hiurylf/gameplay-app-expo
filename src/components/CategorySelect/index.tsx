import React from 'react';
import { ScrollView } from 'react-native';
import { Category } from 'components/Category';

import { categories } from 'utils/categories';
import styles from './styles';

type Props = {
  categorySelected: string;
  hasChecked?: boolean;
  // eslint-disable-next-line no-unused-vars
  setCategory: (categoryId: string) => void;
};

export function CategorySelect({
  categorySelected,
  setCategory,
  hasChecked = false,
}: Props): JSX.Element {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          hasChecked={hasChecked}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
