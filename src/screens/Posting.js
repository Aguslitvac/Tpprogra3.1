import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, Alert } from "react-native";

class Posting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descripcion: '',
            emailUsuario: 'usuario@app.com', 
        };
    }

    CrearPost = () => {
        const { descripcion, emailUsuario } = this.state;
        
        

        const nuevoPost = {
            texto: descripcion,
            email: emailUsuario,
            likes: [], 
        };
        
        console.log("Posteo listo para Firebase:", nuevoPost);

        this.setState({ descripcion: '' });
       
 
    };

    render() {
        return (
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Publicación Nueva</Text>
                
                <TextInput
                    style={styles.campoTexto}
                    placeholder="Escribe tu posteo aquí..."
                    value={this.state.descripcion}
                    onChangeText={(text) => this.setState({ descripcion: text })}
                />

                <Pressable
                    style={styles.boton}
                    onPress={this.CrearPost}
                >
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
});

export default Posting;