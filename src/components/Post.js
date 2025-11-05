import { Component } from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';

class Post extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        console.log(this.props)
    }
    render(){
        return(
            <View style={styles.postCard}>
                  <View style={styles.postInfo}>
                    <Text style={styles.postText}>{this.props.data.texto}</Text>
                    <Text style={styles.postDate}>{this.props.data.createdAt}</Text>
                    <Text style={styles.postDate}>{this.props.data.email}</Text>
                  </View>
                  {this.props.origen == "perfil" ? 
                  <Pressable
                    style={styles.deleteBtn}
                    onPress={() => this.props.deletePost(this.props.id)}
                  >
                    <Text style={styles.deleteTxt}>X</Text>
                  </Pressable> : null }
                </View>
        )
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

export default Post;