// FilterScreen.tsx
import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useMenu } from './MenuContext';

export default function FilterScreen() {
  const { menu } = useMenu();
  const [selectedCourse, setSelectedCourse] = useState('All');

  const filteredMenu =
    selectedCourse === 'All' ? menu : menu.filter((item) => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedCourse}
        onValueChange={(value: string) => setSelectedCourse(value)}
        style={styles.picker}
      >
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.menuItem}>
            {item.course}: {item.dishName} (${item.price})
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  picker: { marginBottom: 10 },
  menuItem: { fontSize: 16, marginVertical: 5 },
});

