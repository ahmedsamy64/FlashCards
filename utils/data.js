import { AsyncStorage } from 'react-native';


export const DECKS_STORAGE_KEY = 'DECKS'

//dummy data
const dummy = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}
// will be called once in the beginning of the program to fill the object with data
export async function storeIntialData() {

    try {
        await AsyncStorage.setItem(
            DECKS_STORAGE_KEY,
            JSON.stringify(dummy)
        );
    } catch (error) {
        // Error saving data
        console.log(error)
    }
};

//function to get all decks from the storage
export function getAllDecks() {

    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((res) => {
        const decks = JSON.parse(res)
        return decks
    })
}
//function to get data of the deck
export function getDeck(DeckId) {

    return AsyncStorage.getItem('DECKS').then((res) => {
        const data = JSON.parse(res)
        return data[DeckId]
    })
}
//function to add card to the deck
export function addCardToDeck(deckName, quesObj) {

    return AsyncStorage.getItem('DECKS').then((res) => {
        const data = JSON.parse(res)
        return data[deckName]
    })
        .then((res) => {
            const obj = {}
            res['questions'].push(quesObj)
            obj[deckName] = res
            return (
                AsyncStorage.mergeItem('DECKS', JSON.stringify(obj))
            )
        })
}
//function to add deckTitle
export function saveDeckTitle(obj) {

    return AsyncStorage.getItem(DECKS_STORAGE_KEY, () => {
        AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(obj))

    })
}


export async function removeData() {

    return await AsyncStorage.getItem('React').then((result) => {
        const temp2 = JSON.parse(result)
        temp2 = undefined
        AsyncStorage.setItem('React', JSON.stringify(temp2))

    })
}
