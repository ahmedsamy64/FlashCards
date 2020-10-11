import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { addCardToDeck } from '../utils/data'

class AddCard extends Component {

    state = {
        question: '',
        answer: '',
        deckName: this.props.route.params
    }


    /* addCardFun = (deckName, quesObj) => {

        return AsyncStorage.getItem('DECKS').then((res) => {
            const data = JSON.parse(res)
            return data[this.state.deckName]
        }).then((res) => {
            const questionObj = {
                question: this.state.question,
                answer: this.state.answer
            }, obj = {}
            res['questions'].push(questionObj)
            obj[this.state.deckName] = res
            return (
                AsyncStorage.mergeItem('DECKS', JSON.stringify(obj))
            )
        })
    } */

    /* addCardFun = (deckName, quesObj) => {

        return AsyncStorage.getItem('DECKS').then((res) => {
            const data = JSON.parse(res)
            return data[deckName]
        }).then((res) => {
            const obj = {}
            res['questions'].push(quesObj)
            obj[deckName] = res
            return (
                AsyncStorage.mergeItem('DECKS', JSON.stringify(obj))
            )
        })
    } */




    render() {
        const questionObj = {
            question: this.state.question,
            answer: this.state.answer
        }

        return (
            <View style={{ padding: 20 }}>
                <Input
                    value={this.state.question}
                    placeholder='Write your question here'
                    onChangeText={(question) => this.setState({ question })} />

                <Input
                    value={this.state.answer}
                    placeholder='write the answer of the question here'
                    onChangeText={(answer) => this.setState({ answer })} />

                <Button
                    title='Submit Card'
                    onPress={() => addCardToDeck(this.state.deckName, questionObj)
                        .then(() => this.props.navigation.navigate('Deck', { id: 0 }))}
                />
            </View>
        );
    }
}

export default AddCard;