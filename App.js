import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Pressable, Alert, ActivityIndicator } from 'react-native';
import { useState } from 'react';
export default function App() {
  const createButtonAlert = () =>
    Alert.alert(
      "Alert",
      [
        { text: "Press", onPressIn: () => console.log("OK Pressed") }
      ]
    );

    const [showLoading, setShowloading] = useState(true);
    

  return (
    <ScrollView style={[styles.container, { backgroundColor: `#5f9ea0` }]}>
      <View style={styles.text}>
        <Text style={[styles.title,
        { marginTop: 80 },
        { marginBottom: 80 }
        ]}>
          Hello React Native !
        </Text>
        <Text style={[styles.paragraph, {
          marginTop: 80,
          marginBottom: 80

        }]}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Text>
        <Text style={{
          marginTop: 80,
          marginBottom: 80
        }}>
          Ciao World
        </Text>
      </View>
      <Image
        source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
        style={{ width: 80, height: 80, resizeMode: 'contain' }}
      />
      <Image source={require('./konexio-logo_1.png')} />
      <Pressable style={styles.press} onPressIn={createButtonAlert}
onPress={() => {setShowloading(false)}}>     
  </Pressable>
      <View style={ styles.horizontal}>
      <ActivityIndicator size="large" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  text: {
    backgroundColor: "",
    fontWeight: "bolder",

  },
  title: {
    fontSize: 30

  },
  paragraph: {
    textAlign: "center"

  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 90
  },
  press: {
    padding: 20,
    margin: 120,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',

  }
});
