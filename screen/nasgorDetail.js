import { View, Text, StyleSheet, FlatList, Button, Image, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const nasgorDetail = () => {
    const [progress, setProgress] = useState(0);

    const [Resep] = useState([
        {
          bahan: 'Bahan - bahan yang dibutuhkan untuk membuat nasi goreng',
          bahan1: '-Nasi dingin',
          bahan2: '-Telur',
          bahan3: '-Bawang merah',
          bahan4: '-Bawang putih',
          bahan5: '-Cabe Rawit (opsional)',
          bahan6: '-Kecap Manis',
          bahan7: '-Saus Tiram',
          bahan8: '-Garam',
          bahan9: '-Kaldu Bubuk',
          bahan10: '-Minyak Goreng',
          bahan11: '-Lauk tambahan (ayam, sosis, bakso) dan sayuran (wortel, sawi) (opsional)',
          langkah: '-Langkah - langkah yang dibutuhkan untuk membuat nasi goreng',
          langkah1: '-Panaskan minyak, tumis bawang merah, bawang putih, dan cabai hingga harum.',
          langkah2: '-Masukkan telur, orak-arik/ceplok.',
          langkah3: '-Masukkan nasi, aduk rata.',
          langkah4: '-Tambahkan kecap manis, saus tiram, garam, dan kaldu bubuk. Aduk hingga bumbu meresap.',
          langkah5: '-Masukkan lauk dan sayuran tambahan, masak hingga matang.',
          langkah6: '-Sajikan dengan acar dan kerupuk.',
          image: 
              require('../assets/nasi goreng.png'),
        },
      ]);
  return (
    <ScrollView>
    <ImageBackground
    source={require('../assets/login BG 3.jpg')}
    style={styles.background}
    >
    <View style={styles.container}>
    <FlatList
    data={Resep}
    Vertical
    style={{marginLeft: '10'}}
    renderItem={({item})=>(
        <View style={{
            marginRight: 5,
            // backgroundColor: '#FFFF', 
            // elevation: 3, 
            // paddingHorizontal: 15,
            // paddingVertical: 20,
            // marginBottom: 10,
            // borderRadius: 15,
            marginLeft: 5,
        }}>
        <Image
           source={item.image}
            style={{width: 380, height: 250, marginBottom: 10, borderRadius: 10}}
            resizeMode={'cover'} 
        />
        <Text style={styles.resep}>
            {item.bahan}
            {'\n'}
            {item.bahan1}
            {'\n'}
            {item.bahan2}
            {'\n'}
            {item.bahan3}
            {'\n'}
            {item.bahan4}
            {'\n'}
            {item.bahan5}
            {'\n'}
            {item.bahan6}
            {'\n'}
            {item.bahan7}
            {'\n'}
            {item.bahan8}
            {'\n'}
            {item.bahan9}
            {'\n'}
            {item.bahan10}
            {'\n'}
            {item.bahan11}
            {'\n'}
            {'\n'}
            {item.langkah}
            {'\n'}
            {item.langkah1}
            {'\n'}
            {item.langkah2}
            {'\n'}
            {item.langkah3}
            {'\n'}
            {item.langkah4}
            {'\n'}
            {item.langkah5}
            {'\n'}
            {item.langkah6}
        </Text>
        </View>
    )}>

    </FlatList>
    <View style={{ padding: 20 }}>
      <ProgressBar progress={progress} />
      <Button title="Increase Progress" onPress={() => setProgress(progress + 10)} />
    </View>
    </View>
    </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
// Tambahkan styles di sini untuk mengatur tampilan
container: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
},

background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
},
centeredText: {
    textAlign: 'center',
},
input: {
    width: '80%',
    maxWidth: 400,
    minWidth: 280,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    borderRadius: 5,
    textAlign: 'left'
},
title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    marginLeft: 20,
},
resep: {
    color: '#000',
    fontSize: 18,
},
RB: {
    fontSize: 30,
    color: '#00FFFF'
},
RB2: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'left',
},

button: {
    width: '80%',
    maxWidth: 400,
    minWidth: 280,
    padding: 12,
    borderRadius: 5,
    alignItems: 'flex-start',
    marginTop: 2,
    marginLeft: -10,
    },
// transparentText: {
//   opacity: 0.1, // Sesuaikan nilai opacity sesuai kebutuhan
// },
});

export default nasgorDetail

// import { View, Text } from 'react-native'
// import React, { useState } from 'react'
// import { ImageBackground, ScrollView } from 'react-native-web';


// const nasgorDetail = () => {

//     const [Resep] = useState([
//         {
//           bahan: 'Bahan - bahan yang dibutuhkan untuk membuat nasi goreng',
//           bahan1: 'Nasi dingin',
//           bahan2: 'Telur',
//           bahan3: 'Bawang merah',
//           bahan4: 'Bawang putih',
//           bahan5: 'Cabe Rawit (opsional)',
//           bahan6: 'Kecap Manis',
//           Bahan7: 'Saus Tiram',
//           bahan8: 'Garam',
//           bahan9: 'Kaldu Bubuk',
//           bahan10: 'Minyak Goreng',
//           bahan11: 'Lauk tambahan (ayam, sosis, bakso) dan sayuran (wortel, sawi) (opsional)',
//           langkah: 'Langkah - langkah yang dibutuhkan untuk membuat nasi goreng',
//           langkah1: 'Panaskan minyak, tumis bawang merah, bawang putih, dan cabai hingga harum.',
//           langkah2: 'Masukkan telur, orak-arik/ceplok.',
//           langkah3: 'Masukkan nasi, aduk rata.',
//           langkah4: 'Tambahkan kecap manis, saus tiram, garam, dan kaldu bubuk. Aduk hingga bumbu meresap.',
//           langkah5: 'Masukkan lauk dan sayuran tambahan, masak hingga matang.',
//           langkah6: 'Sajikan dengan acar dan kerupuk.',
//           image: 
//               require('../assets/nasi goreng.png'),
//         },
//       ]);
//   return (
//     <ScrollView>
//         <ImageBackground>
//             source={require('../assets/login BG 3.jpg')}
//             style={styles.background}
//         <View>
//               <FlatList
//               data={Resep}
//               vertical
//               // showsVerticalScrollIndicator={false}
//               style={{marginLeft: 10}}
//               renderItem={({item})=> (
//               <TouchableOpacity style={{
//                 marginRight: 5, 
//                 backgroundColor: '#FFFF', 
//                 elevation: 3, 
//                 paddingHorizontal: 15,
//                 paddingVertical: 20,
//                 marginBottom: 10,
//                 borderRadius: 15,
//                 marginLeft: 5,
//                 }}>
//                 <Image 
//                   // source={{URL: item.image}}
//                   source={item.image}
//                   style={{width: 200, height: 150, marginBottom: 10, borderRadius: 3}}
//                   resizeMode={'cover'}
//                   />
//                 <Text style={styles.resep}>
//                   {item.Resep}
//                 </Text>
//               </TouchableOpacity>
//               )}
//               />
//             </View>
//         </ImageBackground>
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
// // Tambahkan styles di sini untuk mengatur tampilan
// container: {
//     flex: 1,
//     padding: 10,
//     textAlign: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.4)',
// },

// background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center'
// },
// centeredText: {
//     textAlign: 'center',
// },
// input: {
//     width: '80%',
//     maxWidth: 400,
//     minWidth: 280,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginBottom: 12,
//     borderRadius: 5,
//     textAlign: 'left'
// },
// title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'left',
//     marginLeft: 20,
// },
// resep: {
//     color: '#000',
//     fontSize: 18,
// },
// RB: {
//     fontSize: 30,
//     color: '#00FFFF'
// },
// RB2: {
//     fontSize: 18,
//     marginBottom: 20,
//     textAlign: 'left',
// },

// button: {
//     width: '80%',
//     maxWidth: 400,
//     minWidth: 280,
//     padding: 12,
//     borderRadius: 5,
//     alignItems: 'flex-start',
//     marginTop: 2,
//     marginLeft: -10,
//     },
// // transparentText: {
// //   opacity: 0.1, // Sesuaikan nilai opacity sesuai kebutuhan
// // },
// });

// export default nasgorDetail