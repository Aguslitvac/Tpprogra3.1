import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from "react-native";
import { db, auth } from "../firebase/config";
import firebase from "firebase/app";

class Comentar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: this.props.route.params.postId,
      comentarios: [],
      nuevoComentario: "",
    };
  }

  componentDidMount() {
    db.collection("posts").doc(this.state.postId).collection("comments").get().then((data) => {
        let listaComentarios = [];
        data.forEach(element => {
            listaComentarios.push(element.data())
        });

        this.setState({ comentarios: listaComentarios });
      });
  }

  comentar() {

    db.collection("posts").doc(this.state.postId).collection("comments").add({user: auth.currentUser.email,text: this.state.nuevoComentario,}).then(() => {
        let nuevo = {
          user: auth.currentUser.email,
          text: this.state.nuevoComentario,
        };
        let listaComentarios = this.state.comentarios;
        listaComentarios.push(nuevo);
        this.setState({
          comentarios: listaComentarios,
          nuevoComentario: "",
        });
      });
  }

  render() {
    return (
      <View style={styles.pantalla}>
        <Text style={styles.titulo}>Comentarios</Text>

        <FlatList
          data={this.state.comentarios}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.cajaComentario}>
              <Text style={styles.nombreUsuario}>{item.user}</Text>
              <Text>{item.text}</Text>
            </View>
          )}
        />

        <View style={styles.cajaInput}>
          <TextInput
            style={styles.campoTexto}
            placeholder="Escribí un comentario..."
            value={this.state.nuevoComentario}
            onChangeText={(text) => this.setState({ nuevoComentario: text })}
          />
          <Pressable style={styles.botonEnviar} onPress={() => this.comentar()}>
            <Text style={styles.textoBoton}>Enviar</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pantalla: { 
    flex: 1, 
    backgroundColor: "#fff", 
    padding: 15 
    },
  titulo: { 
    fontSize: 20, 
    fontWeight: "bold", 
    marginBottom: 10 
    },
  cajaComentario: { 
    padding: 10, 
    borderBottomWidth: 1, 
    borderColor: "#eee" 
    },
  nombreUsuario: { 
    fontWeight: "bold" 
    },
  cajaInput: { 
    flexDirection: "row", 
    marginTop: 10 
    },
  campoTexto: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  botonEnviar: {
    backgroundColor: "black",
    marginLeft: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  textoBoton: { color: "white", fontWeight: "bold" },
});

export default Comentar;