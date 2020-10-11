import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Deck from './Deck'
import Quiz from './Quiz';
import AddDeck from './AddDeck'
import AddCard from './AddCard'
import Result from './Result'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import DeckList from './DeckList';



const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const DeckStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="DeckList" component={DeckList} />
            <Stack.Screen name='Deck' component={Deck} />
            <Stack.Screen name='AddCard' component={AddCard} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name='Result' component={Result} />
        </Stack.Navigator>
    );
};


class Dashboard extends Component {


    render() {
        return (
            <NavigationContainer>
                <Tabs.Navigator>
                    <Tabs.Screen name='Decks' component={DeckStack} />
                    <Tabs.Screen name='Add Deck' component={AddDeck} />
                </Tabs.Navigator>
            </NavigationContainer>
        );
    }
}

export default Dashboard;