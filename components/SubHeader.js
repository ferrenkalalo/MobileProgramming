import React, {Component} from 'react';
import {View, Text} from 'react-native';

// export default class SubHeader extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           backgroundColor: '#CEAB93',
//           height: 40,
//           padding: 10,
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         <Text
//           style={{
//             color: '#ffffff',
//             fontWeight: 'bold',
//           }}>
//           {this.props.subtitle}
//         </Text>
//       </View>
//     );
//   }
// }

export default SubHeader = props => {
  const subtitle = props.subtitle;
  return (
    <View
      style={{
        backgroundColor: '#CEAB93',
        height: 35,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: '#ffffff',
          fontWeight: 'bold',
        }}>
        {subtitle}
      </Text>
    </View>
  );
};
