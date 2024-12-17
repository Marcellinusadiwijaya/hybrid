      import React, { useState } from 'react';
      import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground } from 'react-native';
      import { useNavigation } from '@react-navigation/native'


      //membuat const untuk nama kaegori
      const Home = () => {

        const [kategori, setKategori] = useState([
            {
              nama: 'Makanan',
            },
            // {
            //   nama: 'Minuman'
            // },
          ]);
        // membuat const unuk menseleksi kategori
        const [kategoriSeleksi, setKategoriSeleksi] = useState(
          {
            nama: 'Makanan',
          },
        );
        //membuat const untuk isi dari data
        const [Data] = useState([
          {
            id: 1,
            namaResep: 'Nama: Nasi Goreng',
            category: 'Kategori: Makanan Utama',
            Durasi: 'Durasi: 20 - 30 menit',
            informasi: 
              'Informasi: Hidangan nasi goreng adalah salah satu yang paling populer di Indonesia. Nasi putih digoreng bersama bumbu-bumbu seperti bawang merah, bawang putih, cabai, kecap manis, dan telur. Bisa disajikan dengan berbagai lauk seperti ayam, sosis, atau udang.',
            image: 
              require('../assets/nasi goreng.png'),
            // imgage:
            //   'https://www.istockphoto.com/photo/nasi-goreng-indonesian-fried-rice-dish-with-egg-and-chicken-satay-gm514825223-48367800?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FNasi-Goreng&utm_medium=affiliate&utm_source=unsplash&utm_term=Nasi+Goreng%3A%3Aaffiliate-collections%3Acontrol',
          },
        ]);

        const [Data2] = useState([
          {
            id: 2,
            namaResep: 'Nama: Mie Goreng',
            category: 'Kategori: Makanan Utama',
            Durasi: 'Durasi: 20 - 30 menit',
            informasi: 
              'Informasi: Hidangan Mie goreng adalah salah satu yang paling populer di Indonesia. Mie digoreng bersama bumbu-bumbu seperti bawang merah, bawang putih, cabai, kecap manis, dan telur. Bisa disajikan dengan berbagai lauk seperti ayam, sosis, atau udang.',
            // image: 
            //   'https://www.istockphoto.com/photo/mie-tek-tek-or-javanese-fried-noodle-made-with-egg-noodles-with-chicken-cabbage-gm2153147676-574103511?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FMie-Goreng&utm_medium=affiliate&utm_source=unsplash&utm_term=Mie+Goreng%3A%3Aaffiliate-collections%3Acontrol',
              image: 
              require('../assets/mie goreng.png'),
          },

        ]);
        const [Data3] = useState([
          {

            id: 3,
            namaResep: 'Nama: Bihun Goreng',
            category: 'Kategori: Makanan Utama',
            Durasi: 'Durasi: 20 - 30 menit',
            informasi: 
              'Informasi: Hidangan Bihun goreng adalah salah satu yang paling populer di Indonesia. Bihun digoreng bersama bumbu-bumbu seperti bawang merah, bawang putih, cabai, kecap manis, dan telur. Bisa disajikan dengan berbagai lauk seperti ayam, sosis, atau udang.',
            // image: 
            //   'https://www.istockphoto.com/id/foto/tumis-mie-beras-ekonomi-cina-gm1358708826-432249728',
              image: 
              require('../assets/bihun goreng.png'),
          },
        ])
        const [Data4] = useState([
          {
            id: 4,
            namaResep: 'Nama: Sate Ayam',
            category: 'Kategori: Makanan Panggang',
            Durasi: 'Durasi: 30 - 45 menit',
            informasi: 
              'Informasi: Sate ayam adalah tusukan daging ayam yang dipanggang di atas bara api. Daging ayam sebelumnya dibumbui dengan campuran kecap manis, bawang putih, dan kunyit. Biasanya disajikan dengan bumbu kacang.',
            // image: 
            //   'https://www.istockphoto.com/photo/chicken-satay-or-sate-ayam-asian-famous-food-gm1898894403-554199931?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FSate-ayam&utm_medium=affiliate&utm_source=unsplash&utm_term=Sate+ayam%3A%3Aaffiliate-collections%3Acontrol',
              image: 
              require('../assets/sate ayam.png'),
          },
        ])
        const [Data5] = useState([
          {
            id: 5,
            namaResep: 'Nama: Gado - Gado',
            category: 'Kategori: Salad',
            Durasi: 'Durasi: 30 - 45 menit',
            informasi:
              'Gado-gado adalah salad khas Indonesia yang terdiri dari berbagai macam sayuran rebus seperti kangkung, tauge, kacang panjang, dan telur rebus. Semua bahan disiram dengan bumbu kacang yang gurih.',
            // image: 
            //   'https://www.istockphoto.com/id/foto/gado-gado-is-a-traditional-indonesian-salad-consisting-of-vegetables-potatoes-tempeh-gm2156465217-577224578',
              image: 
              require('../assets/gado-gado.png'),
          },
        ])
        const navigation = useNavigation();
      
        return (//agar dapat di scroll
          <ScrollView> 
          <ImageBackground
            source={require('../assets/login BG 3.jpg')}
            style={styles.background}
            >
            <View style ={styles.container}>
            <StatusBar backgroundColor='#F0F8FF' barStyle='dark-content' />
            <Text style={styles.title}><Text style={styles.RB}>R</Text><Text style={styles.RB2}>ecipe</Text> <Text style={styles.RB}>B</Text><Text style={styles.RB2}>ook</Text></Text>
            <View style={{textAlign: 'center'}}>
              <FlatList //menampilkan dafatra data secara horizontal
              data={kategori}
              horizontal
              style={{marginLeft: 10, textAlign: 'center'}}
              renderItem={({item})=> (
              <View style={{
                marginRight: 5, 
                backgroundColor: kategoriSeleksi.nama == item.nama ? '#4169e1' :'#FFFFFF', 
                elevation: 3, 
                paddingHorizontal: 15,
                paddingVertical: 8,
                marginBottom: 10,
                borderRadius: 15,
                marginLeft: 5,
                }}>
                <Text style={{color: kategoriSeleksi.nama == item.nama ? '#FFFFFF' :'#0000'}}>
                  {item.nama}
                </Text>
              </View>
              )}
              />
            </View>
            <View>
              <FlatList //menampilkan data secara vertical
              data={Data}
              vertical
              showsVerticalScrollIndicator={false} //agar bekas scroll tidak terlihat
              style={{marginLeft: 10}}
              renderItem={({item})=> (
              <View style={{
                marginRight: 5, 
                backgroundColor: '#FFFF', 
                elevation: 3, 
                paddingHorizontal: 15,
                paddingVertical: 20,
                marginBottom: 10,
                borderRadius: 15,
                marginLeft: 5,
                }}>
                <Image 
                  // source={{URL: item.image}}
                  source={item.image}
                  style={{width: 335, height: 150, marginBottom: 10, borderRadius: 25}}
                  resizeMode={'cover'}
                  />
                <Text style={styles.resep}>
                  {item.namaResep}
                </Text>
                <Text style={styles.resep}>
                  {item.category}
                </Text>
                <Text style={styles.resep}>
                  {item.Durasi}
                </Text>
                <Text style={styles.resep}>
                  {item.informasi}
                </Text>
                <View style={styles.button}>
                <Button style={styles.buttonText}
                 title="Detail"
                  // style={styles.button}
                  onPress={() => navigation.navigate('nasgorDetail')}// untuk navigasi ke page selanjutnya
                />
              </View>
              </View>
              )}
              />
            </View>
            <View>
              <FlatList
              data={Data2}
              vertical
              showsVerticalScrollIndicator={false}
              style={{marginLeft: 10}}
              renderItem={({item})=> (
              <View style={{
                marginRight: 5, 
                backgroundColor: '#FFFF', 
                elevation: 3, 
                paddingHorizontal: 15,
                paddingVertical: 20,
                marginBottom: 10,
                borderRadius: 15,
                marginLeft: 5,
                }}>
                <Image 
                  // source={{URL: item.image}}
                  source={item.image}
                  style={{width: 335, height: 150, marginBottom: 10, borderRadius: 25}}
                  resizeMode={'cover'}
                  />
                <Text style={styles.resep}>
                  {item.namaResep}
                </Text>
                <Text style={styles.resep}>
                  {item.category}
                </Text>
                <Text style={styles.resep}>
                  {item.Durasi}
                </Text>
                <Text style={styles.resep}>
                  {item.informasi}
                </Text>
                <View style={styles.button}>
                <Button style={styles.buttonText}
                 title="Detail"
                  // style={styles.button}
                  onPress={() => navigation.navigate('miegorDetail')}
                />
              </View>
              </View>
              )}
              />
            </View>
            <View>
              <FlatList
              data={Data3}
              vertical
              showsVerticalScrollIndicator={false}
              style={{marginLeft: 10}}
              renderItem={({item})=> (
              <View style={{
                marginRight: 5, 
                backgroundColor: '#FFFF', 
                elevation: 3, 
                paddingHorizontal: 15,
                paddingVertical: 20,
                marginBottom: 10,
                borderRadius: 15,
                marginLeft: 5,
                }}>
                <Image 
                  // source={{URL: item.image}}
                  source={item.image}
                  style={{width: 335, height: 150, marginBottom: 10, borderRadius: 25}}
                  resizeMode={'cover'}
                  />
                <Text style={styles.resep}>
                  {item.namaResep}
                </Text>
                <Text style={styles.resep}>
                  {item.category}
                </Text>
                <Text style={styles.resep}>
                  {item.Durasi}
                </Text>
                <Text style={styles.resep}>
                  {item.informasi}
                </Text>
                <View style={styles.button}>
                <Button style={styles.buttonText}
                 title="Detail"
                  // style={styles.button}
                  onPress={() => navigation.navigate('bihungorDetail')}
                />
              </View>
              </View>
              )}
              />
            </View>
            <View>
              <FlatList
              data={Data4}
              vertical
              showsVerticalScrollIndicator={false}
              style={{marginLeft: 10}}
              renderItem={({item})=> (
              <View style={{
                marginRight: 5, 
                backgroundColor: '#FFFF', 
                elevation: 3, 
                paddingHorizontal: 15,
                paddingVertical: 20,
                marginBottom: 10,
                borderRadius: 15,
                marginLeft: 5,
                }}>
                <Image 
                  // source={{URL: item.image}}
                  source={item.image}
                  style={{width: 335, height: 150, marginBottom: 10, borderRadius: 25}}
                  resizeMode={'cover'}
                  />
                <Text style={styles.resep}>
                  {item.namaResep}
                </Text>
                <Text style={styles.resep}>
                  {item.category}
                </Text>
                <Text style={styles.resep}>
                  {item.Durasi}
                </Text>
                <Text style={styles.resep}>
                  {item.informasi}
                </Text>
                <View style={styles.button}>
                <Button style={styles.buttonText}
                 title="Detail"
                  // style={styles.button}
                  onPress={() => navigation.navigate('sateDetail')}
                />
              </View>
              </View>
              )}
              />
            </View>
            <View>
              <FlatList
              data={Data5}
              vertical
              showsVerticalScrollIndicator={false}
              style={{marginLeft: 10}}
              renderItem={({item})=> (
              <View style={{
                marginRight: 5, 
                backgroundColor: '#FFFF', 
                elevation: 3, 
                paddingHorizontal: 15,
                paddingVertical: 20,
                marginBottom: 10,
                borderRadius: 15,
                marginLeft: 5,
                }}>
                <Image 
                  // source={{URL: item.image}}
                  source={item.image}
                  style={{width: 335, height: 150, marginBottom: 10, borderRadius: 25}}
                  resizeMode={'cover'}
                  />
                <Text style={styles.resep}>
                  {item.namaResep}
                </Text>
                <Text style={styles.resep}>
                  {item.category}
                </Text>
                <Text style={styles.resep}>
                  {item.Durasi}
                </Text>
                <Text style={styles.resep}>
                  {item.informasi}
                </Text>
                <View style={styles.button}>
                <Button style={styles.buttonText}
                 title="Detail"
                  // style={styles.button}
                  onPress={() => navigation.navigate('gadoDetail')}
                />
              </View>
              </View>
              )}
              />
            </View>
            </View>
          </ImageBackground>
          </ScrollView>
          
        );
      };

const styles = StyleSheet.create({// const untuk stylesheet
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
  color: '#DC143C'
},
RB2: {
  fontSize: 18,
  marginBottom: 20,
  textAlign: 'left',
  color: '#1E90FF',
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

      export default Home;