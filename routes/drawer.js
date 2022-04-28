import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './homeStack';
import CustomersStack from './customersStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Customers: {
        screen: CustomersStack,
    }
});

export default createAppContainer(RootDrawerNavigator);
