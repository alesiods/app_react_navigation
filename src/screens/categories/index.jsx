import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants/theme';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <Button
        title="ver productos"
        onPress={() => navigation.navigate('Products')}
        color={theme.colors.primary}
      />
    </View>
  );
};

export default Categories;
