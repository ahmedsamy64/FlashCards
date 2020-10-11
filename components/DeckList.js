import React, { Component, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { getAllDecks, storeIntialData, removeData } from '../utils/data'
import { useIsFocused } from '@react-navigation/native'


class DeckList extends Component {



    state = {
        decks: null,
        test: 0

    }
    componentDidMount() {
        //storeIntialData()
        //getAllDecks().then((res) => this.setState({ decks: res }))
        this.getDecks()
    }

    /*     setDecksInfo = () => {
            return (
                getDecks()
                )
        } */


    getDecks = () => {
        return (
            getAllDecks().then((res) => this.setState({ decks: res }))
        )
    }
    /* getDecks() {
        const DECKS_STORAGE_KEY = 'DECKS'
        const value = AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, res) => res)
        return (
            value
        )

    } */
    /* _retrieveData = () => {

        return AsyncStorage.getItem('DECKS').then((res) => {
            const decks = JSON.parse(res)
            return decks
        })
    } */

    render() {
        //this._retrieveData().then((res) => console.log(res))

        /* this.state.decks ?
            console.log((this.state.decks["React"]["questions"]).length) : null */

        //this._retrieveData().then((res) => console.log(res))
        //const parsed = JSON.parse(data)
        //const str = JSON.stringify(parsed)
        // console.log(this.props.route.params.id)

        this.props.navigation.addListener('focus', () => {
            this.getDecks()
        })
        /* this.props.route.params
            ? this.props.route.params.id == 0 ? this.getDecks() : null
            : null */

        return (

            <ScrollView style={{ padding: 20 }}>
                { this.state.decks ?
                    Object.keys(this.state.decks).map((deckname) => (
                        this.state.decks[deckname].hasOwnProperty('questions') ?
                            <TouchableOpacity onPress={(navigation) => (this.props.navigation.navigate('Deck', deckname))} key={deckname}>
                                <Text>{deckname}</Text>
                                <Text>{JSON.stringify(this.state.decks[deckname]["questions"].length)}</Text>
                            </TouchableOpacity>
                            : <TouchableOpacity onPress={() => this.props.navigation.navigate('Deck', deckname)} key={deckname}>
                                <Text>{deckname}</Text>
                            </TouchableOpacity>


                    )) :
                    <View></View>

                }

            </ScrollView >
        );
    }
}

export default DeckList;