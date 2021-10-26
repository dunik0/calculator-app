import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Item from './Item';
import Display from './Display';


export default class Calculator extends Component {

    buttons = {
        numbers: [
            ['7', '8', '9'],
            ['6', '5', '4'],
            ['1', '2', '3'],
            ['.', '0', '=']
        ],
        operations: [
            'C', '/', '*', '-', '+'
        ]
    }

    state = {
        displayedText: ''
    }

    handleClick = (input) => {
        this.setState(prevState => {
            const { displayedText } = prevState

            switch (input) {
                case '=':
                    try {
                        return { displayedText: eval(displayedText) }
                    }
                    catch {
                        return { displayedText: 'error' }
                    }
                case 'C':
                    if (displayedText != 'error')
                        return { displayedText: displayedText.toString().slice(0, -1) }
                    else
                        break
                default:
                    if (displayedText != 'error')
                        return { displayedText: displayedText + input }
                    else
                        return { displayedText: input }
            }
        })


    }

    render() {
        const { displayedText } = this.state
        console.log(displayedText)
        const numberItems = this.buttons.numbers.map(row => (
            row.map(item => (
                < Item
                    data={item}
                    key={item}
                    handleClick={this.handleClick}
                    background='#484848'
                />
            ))
        ))

        const operationItems = this.buttons.operations.map(item => (
            <Item
                data={item}
                key={item}
                handleClick={this.handleClick}
                background='#B0B0B0'
            />
        ))

        const leftRows = numberItems.map((row, index) => (
            <View style={styles.row} key={index}>
                {row}
            </View>
        ))
        return (
            <View style={styles.main} >
                <Display data={displayedText} />

                <View style={styles.panelContainer}>
                    <View style={styles.leftPanel}>
                        {leftRows}
                    </View>

                    <View style={styles.rightPanel}>
                        {operationItems}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%'
    },
    container: {
        flexDirection: 'column',
    },
    panelContainer: {
        flex: 4,
        flexDirection: 'row',
        backgroundColor: 'gray'
    },
    display: {
        flex: 2,
        backgroundColor: 'yellow',

    },
    leftPanel: {
        flex: 3
    },
    rightPanel: {
        flex: 1
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    }
});

