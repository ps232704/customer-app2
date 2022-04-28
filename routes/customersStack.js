import { createStackNavigator } from "react-navigation-stack";
import Customers from '../screens/customers';
import React from 'react';
import Header from '../header';

const screens = {
    Customers: {
        screen: Customers,
        navigationOptions: ({ navigation }) => {
            return {
                headerStyle: { backgroundColor: '#ddd' },
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    },
}

const CustomersStack = createStackNavigator(screens);

export default CustomersStack;
