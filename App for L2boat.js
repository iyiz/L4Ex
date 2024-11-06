import React from 'react';
import { Text, ScrollView, StatusBar, StyleSheet } from 'react-native';
import Boat from './components/Boat.js';

const AppForL2 = () => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <Text style={styles.header}>GetABoat - For Sale</Text>
            <Boat
                Icon_name="sailboat"
                name="Sea Ray 500 Sundancer"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                poster={require("./img/sea_ray.jpg")}
            />
            <Boat
                Icon_name="sailboat"
                name="Four Winns Horizon 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                poster={require("./img/four_winns.jpg")}
            />
            <Boat
                Icon_name="sailboat"
                name="Flipper 640 ST"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                poster={require("./img/flipper.jpg")}
            />
            <Boat
                Icon_name="sailboat"
                name="Princess V48"
                description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                poster={require("./img/princess.jpg")}
            />
            <Boat
                Icon_name="sailboat"
                name="Bayliner 175 Bowrider"
                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                poster={require("./img/bayliner.jpg")}
            />
            <Boat
                Icon_name="sailboat"
                name="Fairline Targa 47"
                description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                poster={require("./img/fairline.jpg")}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f0f4f8',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
});

export default AppForL2;
