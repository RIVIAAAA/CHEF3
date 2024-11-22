// HomeScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useMenu } from './MenuContext';

export default function HomeScreen() {
  const { menu } = useMenu();

  const calculateAveragePrice = (course: string) => {
    const filteredItems = menu.filter((item) => item.course === course);
    const total = filteredItems.reduce((sum, item) => sum + item.price, 0);
    return filteredItems.length > 0 ? (total / filteredItems.length).toFixed(2) : '0.00';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our Menu</Text>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.menuItem}>
            {item.course}: {item.dishName} (${item.price})
          </Text>
        )}
      />
      <Text style={styles.average}>
        Average Prices: 
        Starters - ${calculateAveragePrice('Starters')}, 
        Mains - ${calculateAveragePrice('Mains')}, 
        Desserts - ${calculateAveragePrice('Desserts')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, marginBottom: 10 },
  menuItem: { fontSize: 16, marginVertical: 5 },
  average: { fontSize: 16, marginTop: 10, fontWeight: 'bold' },
});


