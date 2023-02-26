import * as React from 'react';
import { Button, Text, View, StyleSheet, AsyncStorage } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const getItems = () => {
    // Get All Keys
    const keys = AsyncStorage.getAllKeys().then((keys) => {
      // Loop through keys
      keys.forEach((key) => {
        // Get data against each key
        AsyncStorage.getItem(key).then((item) => {
          // log data of key
          console.log(`Data of ${key} is ${item}`);
        });
      });
    });
  };
  const addItems = async () => {
    await AsyncStorage.setItem('@store1', 'Value of store1');
    await AsyncStorage.setItem('@store2', 'Value of store2');
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.paragraph}>
          Demonstration of AsyncStorage Synchronously (without async-await)
        </Text>
      </View>
      <View>
        <Text style={styles.paragraph}>
          - Add Item will add data to two stores
          {'\n'}- Get Item will retrieve data from all stores and log in console
        </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button title="Add Items" onPress={addItems} />
        <Button title="Get Items" onPress={getItems} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
