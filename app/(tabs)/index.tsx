// index.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Define the navigation stack type
type RootStackParamList = {
  Home: undefined;
  ChefManagement: undefined;
};

// Create a specific type for the navigation prop
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>(); // Use typed navigation
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const handleChefLogin = () => {
    if (password === 'Ramsey') {
      navigation.navigate('ChefManagement'); // Navigate to Chef Management
    } else {
      Alert.alert('Incorrect Password', 'Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! Please choose your role:</Text>
      <Button title="Client" onPress={() => navigation.navigate('Home')} />
      <Button title="Chef" onPress={() => setRole('Chef')} />
      {role === 'Chef' && (
        <View>
          <TextInput
            placeholder="Enter Password"
            secureTextEntry
            style={styles.input}
            onChangeText={setPassword}
          />
          <Button title="Login as Chef" onPress={handleChefLogin} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
  input: { borderWidth: 1, padding: 8, marginVertical: 10, width: 200 },
});



