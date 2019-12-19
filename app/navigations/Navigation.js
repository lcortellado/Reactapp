import React from 'react';
import { Icon } from "react-native-elements";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs"

import RestaurantsScreenStacks from "./RestaurantsStacks";
import TopListsScreenStacks from './TopListsStacks';
import SearchScreenStacks from './SearchStacks';
import AccountScreenStacks from './AccountStacks';

const NavigationStacks = createBottomTabNavigator({
    Restaurants: {
        screen: RestaurantsScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Restaurantes",
            tabBarIcon: ({ tinColor }) => (
                <Icon 
                
                    type= "material-community"
                    name="compass-outline"
                    size={22}
                    color={tinColor}
                />
            )
        })
    },
    TopLists: {
        screen: TopListsScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Ranking",
            tabBarIcon: ({ tinColor }) => (
                <Icon
                type="material-community"
                name="star-outline"
                size={22}
                color={tinColor}
                />
            )
        })
    },
    Search: {
        screen: SearchScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Buscar",
            tabBarIcon: ({ tinColor }) => (
                <Icon
                type="material-community"
                name="magnify"
                size={22}
                color={tinColor}
                />
            )
        })
    },
    Account: {
        screen: AccountScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Cuenta",
            tabBarIcon: ({ tinColor }) => (
                <Icon
                type="material-community"
                name="home-outline"
                size={22}
                color={tinColor}
                />
            )
        })
    },
},

{
    initialRouteName: "Restaurants",
    order: ["Restaurants", "TopLists", "Search", "Account"],
    tabBarOptions: {
        inactiveTintColor: "#646464",
        activeTintColor: "#00a680"
    }
}

);

export default createAppContainer(NavigationStacks);