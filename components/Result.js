import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Result extends Component {

    state = {
        questionNum: 0,
        correctques: 0,
        Incorrectques: 0
    }

    componentDidMount = () => {
        this.setState({
            questionNum: this.props.route.params.correct + this.props.route.params.Incorrect,
            correctques: this.props.route.params.correct, Incorrectques: this.props.route.params.Incorrect
        })
    }
    render() {
        const { questionNum, correctques, Incorrectques } = this.state
        const percentage = (correctques / questionNum) * 100
        return (
            <View style={{ padding: 20 }}>
                <Text>You have Completed the Quiz</Text>
                <Text>you answered {correctques} questions correct out of {questionNum} {"\n"}with percentage of {percentage}%</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Deck', this.props.route.params)}>
                    <Text>go back to deck</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckList')}>
                    <Text>go back to deckList</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Result;