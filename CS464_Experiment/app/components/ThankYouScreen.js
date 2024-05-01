// ThankYouScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ThankYouScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thank You!</Text>
            <Text style={styles.message}>Thank you for participating in the experiment.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    message: {
        fontSize: 18,
        textAlign: 'center',
    },
});

export default ThankYouScreen;