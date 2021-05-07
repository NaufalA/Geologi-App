import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ScrollView, SectionList, FlatList, View, Text} from 'react-native';
import {kurikulum} from '../utils/kurikulum';

const KurikulumScreen = () => {
  const {colors} = useTheme();

  return (
    <SectionList
      style={{flex: 1}}
      sections={kurikulum}
      keyExtractor={(item, index) => `${item.nama}-${index}`}
      renderSectionHeader={({section: {nama}}) => (
        <View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: colors.primary,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              {nama}
            </Text>
          </View>
        </View>
      )}
      renderItem={({item}) => (
        <View>
          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 20,
              flex: 1,
              flexDirection: 'row',
              backgroundColor: colors.text,
            }}>
            <Text style={{color: colors.background, flex: 3, marginRight: 5}}>
              {item.nama}
            </Text>
            <Text
              style={{color: colors.background, flex: 1, textAlign: 'right'}}>
              {item.totalSks}
            </Text>
          </View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              flex: 1,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                flex: 1,
                color: colors.primary,
              }}>
              Kode
            </Text>
            <Text
              style={{
                color: colors.primary,
                flex: 3,
                marginRight: 5,
              }}>
              Mata Kuliah
            </Text>
            <Text style={{flex: 1, color: colors.primary, textAlign: 'right'}}>
              SKS
            </Text>
          </View>
          <View>
            <FlatList
              data={item.matkul}
              keyExtractor={(item, index) => `${item.kode}-${index}`}
              renderItem={({item}) => (
                <View
                  style={{
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <Text style={{flex: 1}}>{item.kode}</Text>
                  <Text style={{flex: 3, marginRight: 5}}>{item.nama}</Text>
                  <Text style={{flex: 1, textAlign: 'right'}}>{item.sks}</Text>
                </View>
              )}
            />
          </View>
        </View>
      )}
    />
  );
};

export default KurikulumScreen;
