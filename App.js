import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, ScrollView, View, Image, Button, Alert, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const App = () => {
    const [answers, setAnswers] = useState(Array(3).fill(''));

    const questions = [
        {
            question: "What animal is this?",
            image: require('./imgs/deer.jpg'),
            options: [
                { label: 'Deer', value: 'Deer' },
                { label: 'Cat', value: 'Cat' },
                { label: 'Dog', value: 'Dog' },
            ],
            correctAnswer: 'Deer'
        },
        {
            question: "What animal is this?",
            image: require('./imgs/leopard.jpg'),
            options: [
                { label: 'Fish', value: 'Fish' },
                { label: 'Bird', value: 'Bird' },
                { label: 'Leopard', value: 'Leopard' },
            ],
            correctAnswer: 'Leopard'
        },
        {
            question: "What animal is this?",
            image: require('./imgs/tiger.jpg'),
            options: [
                { label: 'Elephant', value: 'Elephant' },
                { label: 'Tiger', value: 'Tiger' },
                { label: 'Zebra', value: 'Zebra' },
            ],
            correctAnswer: 'Tiger'
        },
    ];

    const handleSubmit = () => {
        const correctCount = answers.filter((answer, index) => answer === questions[index].correctAnswer).length;
        let feedback = correctCount === questions.length ? "Well done!" : correctCount > questions.length / 2 ? "Good job!" : "You can do better next time.";

        Alert.alert(`You got ${correctCount} out of ${questions.length} correct. ${feedback}`);
    };

    return (
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <Text style={styles.header}>Animal Quiz</Text>
            {questions.map((q, index) => (
                <View key={index} style={styles.questionContainer}>
                    <Image source={q.image} style={styles.image} />
                    <Text style={styles.questionText}>{q.question}</Text>
                    <RNPickerSelect
                        onValueChange={(value) => {
                            const newAnswers = [...answers];
                            newAnswers[index] = value;
                            setAnswers(newAnswers);
                        }}
                        items={q.options}
                        style={pickerSelectStyles}
                    />
                </View>
            ))}
            <Button title="Submit Answers" onPress={handleSubmit} color="#4682B4" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
    },
    questionContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },
});

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#ccc',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
    },
};

export default App;
