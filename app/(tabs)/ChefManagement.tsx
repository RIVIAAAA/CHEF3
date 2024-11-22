import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, FlatList, StyleSheet } from 'react-native';

export default function ChefManagementScreen({ navigation }) {
  const [menu, setMenu] = useState([]);
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');

  const addMenuItem = () => {
    const newItem = { id: Date.now().toString(), dishName, description, course, price };
    setMenu([...menu, newItem]);
    setDishName('');
    setDescription('');
    setPrice('');
  };

  const removeMenuItem = (id) => {
    setMenu(menu.filter(item => item.id !== id));
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
      <Picker selectedValue={course} onValueChange={(value) => setCourse(value)}>
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
            <Text>{item.dishName} - {item.course} (${item.price})</Text>
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
  input: { borderWidth: 1, padding: 8, marginBottom: 10 },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 },
});
