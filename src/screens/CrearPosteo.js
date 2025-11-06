import React, { Component } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { db, auth } from "../firebase/config";

class NuevoPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      error: ''
    };
  }

  crearPost() {
    db.collection('posts')
      .add({
        owner: auth.currentUser.email,
        description: this.state.description,
        createdAt: Date.now()
      })
      .then(() => {
        this.setState({
          description: '',
          error: ''
        });
      })
      .catch(e => {
        console.log(e);
        this.setState({ error: 'Error al crear el post.' });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nuevo Post</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribí tu mensaje..."
          onChangeText={text => this.setState({ description: text })}
          value={this.state.description}
        />

        {this.state.error ? (
          <Text style={styles.error}>{this.state.error}</Text>
        ) : null}

        <Pressable style={styles.button} onPress={() => this.crearPost()}>
          <Text style={styles.buttonText}>Publicar</Text>
        </Pressable>


        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    textAlignVertical: 'top',
    marginBottom: 15
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center'
  }
});

export default NuevoPost;
