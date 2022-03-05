import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Header extends Component {
  render() {
    // const color = this.props.color;
    // const title = this.props.title;
    const {color, title} = this.props;
    return (
      <View
        style={{
          backgroundColor: color,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#ffffff', fontWeight: 'bold'}}>{title}</Text>
      </View>
    );
  }
}
