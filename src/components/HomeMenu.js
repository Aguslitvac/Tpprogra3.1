import { React, Component } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Posting from "../screens/Posting";


const Tab = createBottomTabNavigator();


class HomeMenu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Tab.Navigator>

                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={ { headerShown: false } }
                    />
                
                <Tab.Screen
                    name="Posting"
                    component={Posting}
                    options={ { headerShown: false } }
                    />

                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={ { headerShown: false } }
                     />


            </Tab.Navigator>


        )
    }
}




export default HomeMenu;
