import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Body from './components/Body';
import Body2 from './components/Body2';

// ----- FUNCTIONAL COMPONENET -----

// export default App = () => {
//   return (
//     <View>
//       <Text> Hello World </Text>
//       <Text> Exercise 6 </Text>
//     </View>
//   );
// };

// CARA SEDERHANA:
//1.
// export default () => {
//   return(
//     <View>
//       <Text>Hello World, Exercise 6</Text>
//     </View>
//   );
// }

//2.
// export default () => (
//   <View>
//     <Text> Hello World, Exericse 6</Text>
//   </View>
// )

//functional componenet digunakan untuk membuat fungsi-fungsi sederhana

// -------------------------------------------------------------------

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Header title="MOBILE PROGRAMMING" color="#AD8B73" />
        <SubHeader subtitle="GROUP 4" />
        {/* <SubHeader subtitle="GROUP 4" /> */}
        <Body />
        {/* <Body2 /> */}
      </View>
    );
  }
}

/*    PROPS & STATE

1. PROPS
-Props berfungsi untuk passing value dari satu komponene ke komponen lain (dari komponen parents ke komponen child)
-Cara mengambil value atau nilainya yaitu dengan
    {this.props.namapropsnya}
-Untuk props karena itu adalah jsx maka harus menggunakan kurung kurawal{}
-Namanya harus sesuai, karena kalau tidak sesuai nilainya tidak akan muncul
-Agar lebih mudah untuk memangil propsnya kita bisa mendeklarasikan this.props.namapropsnya sebelum return
    const color = this.props.color;
    const title = this.props.title;
  dan pada bagian yang ingin diberi nilia tinggal memanggil color dan title saja
-Atau untuk lebih sederhananya kita bisa mendeklarasikannya dengan
    const {color, title} = this.props;


2. STATE
-State berfungsi untuk menyimpan atau menangani data yang dapat berubah-ubah
-Props = tetap, state = dapat berubah

*/
