import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Item extends Component {
  state = {

  }

  render() {
    const { data, handleClick, background } = this.props
    return (
      <TouchableOpacity
        style={{ ...styles.button, backgroundColor: background }}
        onPress={() => { handleClick(data) }}
      >
        <Text style={styles.text}> {data} </Text>
      </TouchableOpacity>

    );
  }
}


const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 30
  }
});
