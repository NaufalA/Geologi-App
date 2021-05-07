import React from 'react';
import {View, Text} from 'react-native';
import {Theme} from '../assets/styles';

const Footer = () => {
  const {colors} = Theme;

  return (
    <View style={{flex: 1, padding: 20, backgroundColor: colors.text}}>
      <Text
        style={{
          flex: 1,
          fontSize: 24,
          fontWeight: 'bold',
          color: colors.background,
        }}>
        Hubungi Kami
      </Text>
      <View style={{marginVertical: 5}}>
        <Text
          style={{
            flex: 1,
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.background,
          }}>
          Jam Kerja
        </Text>
        <Text style={{color: colors.background}}>
          Senin - Jumat : Pukul 8:00 - 16:00 WIB
        </Text>
      </View>
      <View style={{marginVertical: 5}}>
        <Text
          style={{
            flex: 1,
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.background,
          }}>
          Lokasi
        </Text>
        <Text style={{color: colors.background}}>
          Humas Fakultas Teknik Geologi Universitas Padjadjaran Gedung FTG Lt. 1
        </Text>
        <Text style={{color: colors.background}}>
          Jln. Raya Bandung-Sumedang KM 21 Jatinangor, Kab. Sumedang, 45363
        </Text>
        <Text style={{color: colors.background}}>Phone : (022) 7796545</Text>
        <Text style={{color: colors.background}}>Fax : (022) 7796545</Text>
        <Text style={{color: colors.background}}>Email : ftg@unpad.ac.id</Text>
      </View>
    </View>
  );
};

export default Footer;
