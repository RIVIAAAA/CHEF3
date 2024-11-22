// HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

// Define the parameter list for your navigation
type RootStackParamList = {
  Home: undefined; // 'Home' screen takes no parameters
  ChefManagement: undefined; // Add other screens as needed
};

// Define the route prop type for the 'Home' screen
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

// Define the props for the HomeScreen component
type HomeScreenProps = {
  route: HomeScreenRouteProp;
};

export default function HomeScreen({ route }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Text>Here is your dynamic menu:</Text>
      {/* Add any content dynamically based on the app logic */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

