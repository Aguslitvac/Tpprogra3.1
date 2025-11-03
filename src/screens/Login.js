import react, { Component } from "react";
import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import { auth } from "../firebase/config";

class Login extends Component {
constructor(props) {
super(props);
this.state = {
email: '',
pass: '',
error: ''
};
}

login(email, pass) {
auth.signInWithEmailAndPassword(email, pass)
.then(response => {
this.setState({ error: '' });
this.props.navigation.navigate('HomeMenu');
})
.catch(error => {
this.setState({ error: error.message });
});
}

onSubmit() {
this.login(this.state.email, this.state.pass);
}

render() {
return (
<View style={styles.container}>
<Text style={styles.title}>Formulario de Login</Text>

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
placeholder='Contraseña'
onChangeText={text => this.setState({ pass: text })}
value={this.state.pass}
/>

{this.state.error ? (
<Text style={styles.error}>{this.state.error}</Text>
) : null}

<Pressable style={styles.button} onPress={() => this.onSubmit()}>
<Text style={styles.buttonText}>Entrar en la App</Text>
</Pressable>

<Pressable onPress={() => this.props.navigation.navigate('Register')}>
<Text style={styles.link}>¿No tenés cuenta? Ir a Registro</Text>
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

export default Login;