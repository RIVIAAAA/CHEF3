// ChefManagementScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Define the type for menu items
type MenuItem = {
  id: string;
  dishName: string;
  description: string;
  course: string;
  price: string;
};

export default function ChefManagementScreen() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');

  const addMenuItem = () => {
    if (!dishName || !description || !price) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    if (isNaN(Number(price)) || Number(price) <= 0) {
      Alert.alert('Error', 'Price must be a positive number.');
      return;
    }

    const newItem: MenuItem = {
      id: Date.now().toString(),
      dishName,
      description,
      course,
      price,
    };

    setMenu([...menu, newItem]);
    setDishName('');
    setDescription('');
    setPrice('');
  };

  const removeMenuItem = (id: string) => {
    setMenu(menu.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Management</Text>
      <TextInput
        placeholder="Dish Name"
        style={styles.input}
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        placeholder="Description"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Picker
        selectedValue={course}
        onValueChange={(value: string) => setCourse(value)}
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
      <TextInput
        placeholder="Price"
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Button title="Add Dish" onPress={addMenuItem} />
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>
              {item.dishName} - {item.course} (${item.price})
            </Text>
            <Button title="Remove" onPress={() => removeMenuItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, marginBottom: 20 },
  input: { borderWidth: 1, padding: 8, marginBottom: 10, borderRadius: 5 },
  picker: { borderWidth: 1, marginBottom: 10 },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});



