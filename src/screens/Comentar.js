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
    console.log(this.props)
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
                  <Text style={styles.sporti}>Sportify</Text>
        
        <Text style={styles.titulo}>Comentarios</Text>


        <Text style={styles.postText}>{this.props.route.params.data.texto}</Text>
                  <Text style={styles.usuario}>{this.props.route.params.data.email}</Text>

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
    backgroundColor: "#87CEEB",
    padding: 15,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },

  postText: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 5,
    
  },


  sporti: {
    padding: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: "center"

  },


  usuario: {
    color: "#333",
    fontSize: 13,
    marginBottom: 10,
    textAlign: "right",
    fontStyle: "italic",
  },

  cajaComentario: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    
  },

  nombreUsuario: {
    fontWeight: "bold",
    color: "#1E90FF",
    marginBottom: 3,
  },

  cajaInput: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 8,
    padding: 8,
    
  },

  campoTexto: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    fontSize: 15,
    padding: 5
  },

  botonEnviar: {
    backgroundColor: "#1E90FF",
    marginLeft: 8,
    borderRadius: 8,
    justifyContent: "center",
    padding: 10
  
  },

  textoBoton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});


export default Comentar;