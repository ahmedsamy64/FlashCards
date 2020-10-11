import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { getDeck, removeData } from '../utils/data'

class Deck extends Component {

    state = {
        deckName: this.props.route.params,
        cardNums: null
    }

    componentDidMount() {
        this.getDeckInfo()
    }

    getDeckInfo = () => {
        getDeck(this.state.deckName).then((res) => res.hasOwnProperty('questions') ? this.setState({ cardNums: res['questions'].length }) : null)
    }

    render() {

        /* this.getDeck("React").then((res) => {
            console.log(res['questions'])
        }) */

        /* removeData() */
        this.props.navigation.addListener('focus', () => {
            this.getDeckInfo()
        })
        //this.props.route.params.id !== undefined ? this.getDeckInfo() : null
        //console.log(this.props.route.params)
        const { deckName, cardNums } = this.state

        return (
            <View style={{ flex: 1, padding: 20 }}>
                <View>
                    <Text>{deckName}</Text>
                    <Text>{cardNums ? cardNums : 'this Deck has no Cards, tap below to add'}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCard', deckName)}><Text>Add Card</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => cardNums ? this.props.navigation.navigate('Quiz', deckName) : Alert.alert('this Deck has no Cards')}
                    ><Text>Start Quiz</Text></TouchableOpacity>
                </View>


            </View>
        );
    }
}

export default Deck;