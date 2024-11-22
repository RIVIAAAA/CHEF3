// HomeScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function HomeScreen({ route }) {
  const { menu = [] } = route.params || {}; // Receive menu from the navigation params.

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      {menu.length > 0 ? (
        <>
          <FlatList
            data={menu}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Text style={styles.menuItem}>
                {item.dishName} - {item.course} (${item.price})
              </Text>
            )}
          />
          <Text>Total Dishes: {menu.length}</Text>
        </>
      ) : (
        <Text>No menu items available.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, marginBottom: 10 },
  menuItem: { marginVertical: 5 },
});
