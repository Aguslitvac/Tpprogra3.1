import react, { Component } from "react";
import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import { auth, db } from "../firebase/config";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      error: '',
      user: ''
    };
  }

   componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.props.navigation.navigate('HomeMenu');
            }


        })}

        
  register(email, pass, user) {
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        db.collection('users' ).add({
          email: email,
          userName: user,
        });
      })


      .then(response => {
        this.setState({error: '' });
        this.props.navigation.navigate('Login');
      })
      .catch(error => {
        this.setState({ error: "Datos ingresados incorrectos" });
      });
  }

  onSubmit() {
    const email = this.state.email ;
    const pass  = this.state.pass ;
    const user = this.state.user ;
    if (email == '' || pass == '' || user == '') { 
      this.setState({ error: 'Por favor completá todos los campos.' });
      return;
    }
    this.register(email, pass, user);
  }



  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Formulario de Registro</Text>

        <TextInput
          style={styles.input}
          keyboardType='email-address'
          placeholder='Email'
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
        />
        
        <TextInput
          style={styles.input}
          keyboardType='default'
          placeholder='Usuario'
          onChangeText={text => this.setState({ user: text })}
          value={this.state.user}
        />

        
        <TextInput
          style={styles.input}
          keyboardType='default'
          placeholder='Contraseña'
          secureTextEntry={true}
          onChangeText={text => this.setState({ pass: text })}
          value={this.state.pass}
        />

        {this.state.error ? (
          <Text style={styles.error}>{this.state.error}</Text>
        ) : null}

        <Pressable style={styles.button} onPress={() => this.onSubmit()}>
          <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>

        <Pressable onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.link}>¿Ya tenés cuenta? Ir a Login</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
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
    marginBottom: 15,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  link: {
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 10
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center'
  }
});

export default Register;
