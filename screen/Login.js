import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <ImageBackground
    source={require('../assets/login BG 3.jpg')}
    style={styles.background}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.button}>
        <Button style={styles.buttonText}
          title="  LOGIN  "
          // style={styles.button}
          onPress={() => navigation.navigate('Home')}
        />
        <Text>
          {'\n'}
        </Text>
        <Button style={styles.buttonText}
          title="REGISTER"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Menambahkan transparansi agar teks lebih jelas
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    maxWidth: 400,
    minWidth: 280,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    maxWidth: 400,
    minWidth: 280,
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // linkText: {
  //   color: '#0645AD', // Warna biru mirip link
  //   textDecorationLine: 'underline', // Efek underline seperti link
  // },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
export default Login;