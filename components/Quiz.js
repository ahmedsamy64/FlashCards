import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { getDeck } from '../utils/data';



class Quiz extends Component {

    state = {
        ques_ans: [],
        quesIndex: 0,
        correct: 0,
        Incorrect: 0,
        answer: 'Show the Answer'
    }

    componentDidMount = () => {
        getDeck(this.props.route.params).then((res) => this.setState({ ques_ans: res['questions'] }))
    }

    correctPressed = () => {
        this.state.quesIndex == this.state.ques_ans.length - 1 ?
            this.setState({ correct: this.state.correct + 1 }, () => this.props.navigation.navigate('Result', { correct: this.state.correct, Incorrect: this.state.Incorrect, deckName: this.props.route.params })) :
            this.setState({ correct: this.state.correct + 1, quesIndex: this.state.quesIndex + 1, answer: 'Show the Answer' })
    }
    IncorrectPressed = () => {
        this.state.quesIndex == this.state.ques_ans.length - 1 ?
            this.setState({ Incorrect: this.state.Incorrect + 1 }, () => this.props.navigation.navigate('Result', { correct: this.state.correct, Incorrect: this.state.Incorrect, deckName: this.props.route.params })) :
            this.setState({ Incorrect: this.state.Incorrect + 1, quesIndex: this.state.quesIndex + 1, answer: 'Show the Answer' })
    }
    showAnswer = () => {
        this.setState({ answer: this.state.ques_ans[this.state.quesIndex]['answer'] })
    }

    render() {


        return (
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 30 }}>Quiz</Text>
                <Text>{this.state.quesIndex + 1}/{this.state.ques_ans.length}</Text>
                <View>
                    {this.state.ques_ans[this.state.quesIndex] ?
                        <Text>{this.state.ques_ans[this.state.quesIndex]['question']}</Text> : null}
                    <TouchableOpacity onPress={this.showAnswer}><Text>{this.state.answer}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={this.correctPressed}><Text>correct</Text></TouchableOpacity>
                    <TouchableOpacity onPress={this.IncorrectPressed}><Text>incorrect</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default Quiz;