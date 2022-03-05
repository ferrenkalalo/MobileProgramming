// import React, {Component, useState} from 'react';
// import {View, Text, Button} from 'react-native';

//------------------ ARROW FUNCTION ------------------ //

// // const Body2 = () => {
// //   const [status, setStatus] = useState('Unfinished');

// //   const change = () => {
// //     setStatus('Finished');
// //   };

// //   return (
// //     <View
// //       style={{
// //         flex: 2,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         backgroundColor: '#FFFBE9',
// //       }}>
// //       <Text style={{fontSize: 20}}>Status: {status}</Text>
// //       <Button onPress={() => change()} title="finish" color="#AD8B73" />
// //     </View>
// //   );
// // };

// // export default Body2;

//------------------ CLASS COMPONENT ------------------ //

// export default class Body2 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       status: 'Unfinished',
//     };
//   }

//   change() {
//     this.setState({
//       status: 'Finished',
//     });
//   }

//   render() {
//     const {status} = this.state;
//     return (
//       <View
//         style={{
//           flex: 2,
//           justifyContent: 'space-evenly',
//           alignItems: 'center',
//           backgroundColor: '#FFFBE9',
//         }}>
//         {/* <Text style={{fontSize: 18}}>Status: {status}</Text>
//         <Button onPress={() => this.change()} title="Finish" /> */}
//       </View>
//     );
//   }
// }
