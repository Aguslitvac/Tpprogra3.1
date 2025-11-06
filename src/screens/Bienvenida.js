import React, { Component } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido</Text>

        <Pressable
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => this.props.navigation.navigate('HomeMenu')}
        >
          <Text style={styles.buttonText}>Entrar sin cuenta</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Welcome;
