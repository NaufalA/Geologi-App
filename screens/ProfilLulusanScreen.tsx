import {useTheme} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Linking, Button, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootParamList} from './ProgramPendidikanScreen';

type Props = StackScreenProps<RootParamList, 'ProfilLulusan'>;

const ProfilLulusanScreen = (props: Props) => {
  const {colors} = useTheme();

  const profilLulusan = [
    {
      nama: 'Ahli Muda Geologi Eksplorasi Energi',
      gambar: require('../assets/images/profil-energi.png'),
    },
    {
      nama: 'Ahli Muda Geologi Eksplorasi Mineral',
      gambar: require('../assets/images/profil-mineral.png'),
    },
    {
      nama: 'Ahli Muda Keteknikan Geologi',
      gambar: require('../assets/images/profil-keteknikan.png'),
    },
    {
      nama: 'Peneliti Muda Bidang Geologi',
      gambar: require('../assets/images/profil-peneliti.png'),
    },
  ];

  const openURL = (url: string) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <ScrollView>
      <View style={{padding: 15}}>
        <Text
          style={{
            textAlign: 'center',
            color: colors.primary,
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          Profil Lulusan Program Studi Sarjana (S1)
        </Text>
        <Text style={{textAlign: 'center', color: colors.text}}>
          Profil lulusan Program Studi Teknik Geologi mengacu pada Kurikulum
          Pendidikan Tinggi (KPT) Tahun 2012 (UUPT no. 12/2012 dan KKNI Perpres
          no. 8/2020)
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {profilLulusan.map(profil => (
            <View
              key={profil.nama}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                minWidth: '50%',
              }}>
              <Image
                source={profil.gambar}
                style={{
                  width: 170,
                  height: 140,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{color: colors.text, textAlign: 'center'}}>
                {profil.nama}
              </Text>
            </View>
          ))}
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={{textAlign: 'center'}}>
            Untuk melihat capaian pembelajaran dari masing-masing profil lulusan
            di atas silahkan unduh file berikut
          </Text>
          <View style={{marginVertical: 2}}>
            <Button
              title="Unduh Dokumen"
              color={colors.primary}
              onPress={() =>
                openURL(
                  'http://teknikgeologi.ftgeologi.unpad.ac.id/wp-content/uploads/2020/09/Profil-lulusan-Capaian-Pembelajaran-indonesia-inggris.docx',
                )
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfilLulusanScreen;
