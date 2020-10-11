import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { saveDeckTitle } from '../utils/data'

class AddDeck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newDeckTitle: ''
        };
    }


    render() {

        const obj = {}
        obj[this.state.newDeckTitle] = { title: this.state.newDeckTitle, questions: [] }

        return (
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 50 }}>What is the title of your new deck?</Text>
                <Input
                    value={this.state.newDeckTitle}
                    placeholder='Deck Title'
                    onChangeText={(newDeckTitle) => this.setState({ newDeckTitle })}
                    clearTextOnFocus={false}
                />
                <Button onPress={() => saveDeckTitle(obj).then(() => this.setState({ newDeckTitle: '' }))
                    .then(() => this.props.navigation.navigate('DeckList', { id: 0 }))}
                    title='submit'
                />

            </View>
        );
    }
}

export default AddDeck;