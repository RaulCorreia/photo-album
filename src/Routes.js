import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'native-base';


import Login from './components/auth/Login';
import Principal from './components/principal/Principal';
import Print from './components/principal/Print';
import More from './components/principal/More';

const AuthStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        },
    },
});

const MainTabs = createBottomTabNavigator({
    Principal: {
        screen: Principal,
        navigationOptions: {
            tabBarLabel: 'Feed de Imagens',
            tabBarIcon: ({ tintColor }) => (
                <Icon style={{ color: tintColor }} type="FontAwesome" name="feed" />
            )
        },
    },
    Print: {
        screen: Print,
        navigationOptions: {
            tabBarLabel: 'Tirar Foto',
            tabBarIcon: ({ tintColor }) => (
                <Icon style={{ color: tintColor }} type="FontAwesome" name="camera" />
            )
        },
    },
    More: {
        screen: More,
        navigationOptions: {
            tabBarLabel: 'Mais',
            tabBarIcon: ({ tintColor }) => (
                <Icon style={{ color: tintColor }} type="MaterialCommunityIcons" name="dots-horizontal" />
            )
        },
    },

}, {
    initialRouteName: "Principal",
    tabBarOptions: {
        activeTintColor: '#e91e63',
        inactiveTintColor: '#000000',
    }
});

const Routes = createSwitchNavigator({
    Auth: {
      screen: AuthStack,
    },
    App: {
      screen: MainTabs,
    },
}, {
    initialRouteName: "Auth"
});

export default createAppContainer(Routes);