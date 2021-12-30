import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {gedung} from '../utils/gedung';

const FasilitasScreen = () => {
  const {colors} = useTheme();
  return (
    <ScrollView style={{padding: 15}}>
      <Text
        style={{
          padding: 10,
          color: colors.text,
          textAlign: 'center',
        }}>
        Sejak tahun 2016 Fakultas Teknik Geologi (FTG) Unpad resmi menempati 3
        (tiga) gedung baru yang dibangun dari dana Islamic Development Bank
        (IDB). Ketiga gedung tersebut terletak di bagian utara Kampus Unpad
        Jatinangor, berdekatan dengan Gedung Rektorat, Gedung Pusat Program
        Basic Science (PPBS), Fakultas Peternakan, Fakultas Teknologi Industri
        Pertanian, Fakultas Perikanan dan Kelautan, dan Fakultas Farmasi.
      </Text>
      <View>
        {gedung.map(gedung => (
          <View style={{flex: 1}}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: colors.primary}}>
              {gedung.nama}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{flex: 1, width: '40%', height: 100}}
                resizeMode="contain"
                source={gedung.imgUrl}
              />
              <Text
                style={{flex: 1, padding: 5, margin: 5, color: colors.text}}>
                {gedung.desc}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <Text
        style={{
          padding: 10,
          fontSize: 12,
          color: colors.text,
          textAlign: 'center',
        }}>
        Keseluruhan prasarana tersebut sebagian besar sudah dilengkapi dengan
        sarana berupa AC, LCD Projector, meubel/furniture, komputer, sound
        system, alat-alat laboratorium, dan lain sebagainya. Sarana-sarana
        tersebut merupakan barang milik negara yang dibawa dari gedung lama
        Fakultas Teknik Geologi dan barang hibah dari IDB. Selain menempati 3
        (tiga) gedung baru di Jatinangor, kegiatan Tridharma Perguruan Tinggi
        oleh Fakultas Teknik Geologi, dilaksanakan pula di Gedung 4 Lantai 2
        Kampus Iwa Koesoemasoemantri di Dipati Ukur, Bandung. Selain fasilitas
        ruang kuliah, ruang sidang, ruang dosen, ruang pengelola, terdapat pula
        ruang-ruang studio yang dipergunakan sebagai pusat kegiatan penelitian
        dan pengabdian masyarakat oleh Pusat-pusat Studi di Fakultas Teknik
        Geologi.
      </Text>
    </ScrollView>
  );
};

export default FasilitasScreen;
