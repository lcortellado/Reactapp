import { createStackNavigator } from "react-navigation-stack";
import MyAccountScreen from '../screens/MyAccount';

const AccontScreenStacks = createStackNavigator({
    MyAccount: {
        screen: MyAccountScreen,
        navigationOptions: () => ({
            title: "Mi Cuenta"
        })
    }
});

export default AccontScreenStacks;