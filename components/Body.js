import React, {Component, useState} from 'react';
import {View, Text, Button} from 'react-native';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Unfinished',
    };
  }

  change() {
    this.setState({
      status: 'Finished',
    });
  }

  render() {
    const {status} = this.state;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#FFFBE9',
          fontSize: 20,
        }}>
        <Text style={{fontSize: 25}}>EXERCISE 6</Text>
        <Text style={{fontSize: 18}}>Status: {status}</Text>
        <Button onPress={() => this.change()} title="Finish" color="#AD8B73" />
      </View>
    );
  }
}
