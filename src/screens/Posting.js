import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { db, auth } from "../firebase/config";

class Posting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: '',
            error: '',
        };
    }

    CrearPost() {

        db.collection('posts')
            .add({
                email: auth.currentUser.email,
                texto: this.state.texto,
                createdAt: Date.now(),
                likes: []
            })
            .then(() => {
                this.setState({
                    texto: '',
                    error: ''
                });
            })

            .catch(error => {
                console.log(error);
                this.setState({ error: 'Error al crear el post.' });
            });




    };

    render() {
        return (
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Publicación Nueva</Text>

                <TextInput
                    style={styles.campoTexto}
                    placeholder="Escribe tu posteo aquí..."
                    value={this.state.texto}
                    onChangeText={text => this.setState({ texto: text })}
                />

                {this.state.error ? (
                    <Text style={styles.error}>{this.state.error}</Text>
                ) : null}


                <Pressable style={styles.boton} onPress={() => this.CrearPost()}>
                    <Text style={styles.textoBoton}>Publicar</Text>
                </Pressable>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 25,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
        textAlign: 'center',
    },
    campoTexto: {
        width: '100%',
        height: 180,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 15,
        fontSize: 16,
        borderColor: '#AAA',
        borderWidth: 1,
        textAlignVertical: 'top',
        marginBottom: 30,
    },
    boton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        width: '100%',
    },
    textoBoton: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    error: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center'
    }
});

export default Posting;