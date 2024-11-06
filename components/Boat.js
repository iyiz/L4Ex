import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({ Icon_name, name, description, poster }) => {
    return (
        <View style={styles.boatContainer}>
            <View style={styles.headerContainer}>
                <Icon name={Icon_name} size={30} style={styles.icon} />
                <Text style={styles.title}>{name}</Text>
            </View>
            <Image source={poster} style={styles.image} />
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    boatContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        marginBottom: 15,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
        color: '#333',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
});

export default Boat;
