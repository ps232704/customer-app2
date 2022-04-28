import { createStackNavigator } from "react-navigation-stack";
import Home from '../screens/home';
import Header from '../header';
import React from "react";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerStyle: { backgroundColor: '#ddd' },
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default HomeStack;
