import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, Alert } from 'react-native';

const User = {
  Name: 'Usuario App', 
  email: 'usuario@app.com',
};

let Posts = [
  { id: 'a1', text: 'Mi primer post.', date: '01/11/2025' },
  { id: 'a2', text: 'Segundo intento.', date: '02/11/2025' },
];

class Profile extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      currentUser: { ...User, displayName: User.Name }, 
      posts: Posts,
    };
  }

  deletePost = (postId) => {
    
    const updatedPosts = this.state.posts.filter(post => post.id !== postId);
    this.setState({ posts: updatedPosts });
  };
  
 
   
 
  

  renderPostItem = ({ item }) => (
    <View style={styles.postCard}>
      <View style={styles.postInfo}>
        <Text style={styles.postText}>{item.text}</Text>
        <Text style={styles.postDate}>{item.date}</Text>
      </View>
      <Pressable
        style={styles.deleteBtn}
        onPress={() => this.deletePost(item.id)}
      >
        <Text style={styles.deleteTxt}>X</Text>
      </Pressable>
    </View>
  );

  render() {
    const { currentUser, posts } = this.state;

    return (
      <View style={styles.container}>

        <View style={styles.userBox}>
          <Text style={styles.nameTxt}>{currentUser.displayName}</Text>
          <Text style={styles.emailTxt}>{currentUser.email}</Text>
        </View>

        <Text style={styles.listTitle}>Tus Publicaciones</Text>
        
        <FlatList
          data={posts}
          renderItem={this.renderPostItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />

        
        <Pressable 
          style={styles.logoutButton} 
          onPress={() => this.props.navigation.navigate('Login')}> 
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15,
  },
  
  userBox: {
    padding: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  nameTxt: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  emailTxt: {
    fontSize: 16,
    color: '#666',
  },

  listTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },

  list: {
    flex: 1,
  },
  postCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
  },
  postInfo: {
    flex: 1,
  },
  postText: {
    fontSize: 15,
    color: '#333',
  },
  postDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  
  deleteBtn: {
    backgroundColor: 'red',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  deleteTxt: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  logoutButton: {
    backgroundColor: 'black', 
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;