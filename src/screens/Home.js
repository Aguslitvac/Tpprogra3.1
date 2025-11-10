import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { auth, db } from '../firebase/config';
import Post from '../components/Post';

class Home extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      currentUser: {}, 
      posts: [],
    
    };
  }

   

  componentDidMount() {

    db.collection("users").where("email", "==", auth.currentUser.email).onSnapshot(data => {
      data.forEach(element => {
        this.setState({currentUser: element.data()})
      });
    })
    db.collection("posts")
    .orderBy("createdAt", "desc")
    .onSnapshot(data => {
      let posteos = []
      data.forEach(element => {
        posteos.push({id: element.id, data: element.data()})
      }); 
      console.log(posteos)
      this.setState({posts: posteos})
    })
  }

  
   
 


  render() {
    const { currentUser, posts } = this.state;

    return (
      <View style={styles.container}>

        <View style={styles.userBox}>
                    <Text style={styles.nameTxt}>Sportify</Text>

        </View>

        
        <FlatList
          data={this.state.posts}
          renderItem={({item}) => <Post data = {item.data} origen = "home" id = {item.id} navigation={this.props.navigation}/>}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}

        /> 

        
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    padding: 15,
  },
  
  userBox: {
    padding: 20,
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

export default Home;
