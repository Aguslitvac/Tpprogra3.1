import { React, Component } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Profile from "../screens/Profile";


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
                    name="Profile"
                    component={Profile}
                    options={ { headerShown: false } }
                     />


            </Tab.Navigator>


        )
    }
}




export default HomeMenu;
