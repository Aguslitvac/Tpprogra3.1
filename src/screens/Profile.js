import react, {Component} from "react";
import {View, Text} from "react-native";
import { Pressable } from "react-native";



class Profile extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View >

               <Text>Formulario de Profile</Text>

                <Pressable
                               onPress={ ()=> this.props.navigation.navigate('Login')}>
                               <Text>Ir a Login  </Text>
                               </Pressable>
            </View>
        )
    }
}


     

export default Profile;