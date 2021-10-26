import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Display extends Component {

    render() {
        const { data } = this.props
        return (
            <View style={styles.display}>
                <Text style={styles.text}>{data}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    display: {
        flex: 2,
        backgroundColor: 'black',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20
    },
    text: {
        color: 'white',
        fontSize: 25
    }
});