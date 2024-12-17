import { View, Text, StyleSheet, FlatList, Button, Image, ImageBackground, ScrollView} from 'react-native'
import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const sateDetail = () => {
  const [progress, setProgress] = useState(0);

  const [Resep] = useState([
    {
      bahan: 'Bahan - bahan yang dibutuhkan untuk membuat sate ayam',
      bahan1: '-Dada atau paha ayam',
      bahan2: '-Bumbu halus (bawang merah, bawang putih, ketumbar, kunyit)',
      bahan3: '-Kecap manis',
      bahan4: '-Garam',
      bahan5: '-Cabe Rawit (opsional)',
      bahan6: '-Tusuk sate',
      langkah: 'Langkah - langkah yang dibutuhkan untuk membuat sate ayam',
      langkah1: '-Potong daging ayam menjadi dadu.',
      langkah2: '-Lumuri dengan bumbu halus dan kecap manis, diamkan beberapa saat.',
      langkah3: '-Tusuk daging pada tusuk sate.',
      langkah4: '-Panggang di atas bara api hingga matang.',
      langkah5: '-Sajikan dengan bumbu kacang.',
      tips: 'Tips yang dibutuhkan untuk membuat sate ayam',
      tips1: '-Pilih bagian ayam yang tender: Bagian paha atau dada tanpa tulang biasanya lebih empuk.',
      tips2: '-Bumbui dengan baik: Gunakan kombinasi bumbu yang pas seperti bawang merah, bawang putih, ketumbar, kunyit, kecap manis, dan sedikit air jeruk nipis.',
      tips3: '-Jaga jarak tusukan: Agar sate matang merata dan tidak gosong.',
      image: 
          require('../assets/sate ayam.png'),
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
            {'\n'}
            {item.tips}
            {'\n'}
            {item.tips1}
            {'\n'}
            {item.tips2}
            {'\n'}
            {item.tips3}
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
    justifyContent: 'center',
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
export default sateDetail