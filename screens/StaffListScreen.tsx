import {useTheme} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {FlatList, SectionList, Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {staffs} from '../utils/staffs';
import {RootParamList} from './Staff';

type Props = StackScreenProps<RootParamList, 'List'>;

const StaffListScreen = ({navigation}: Props) => {
  const {colors} = useTheme();
  return (
    <FlatList
      data={staffs}
      keyExtractor={item => item.nip}
      ListHeaderComponent={() => (
        <View
          style={{
            paddingVertical: 5,
            paddingHorizontal: 20,
            flex: 1,
            flexDirection: 'row',
          }}>
          <View style={{flex: 2}}>
            <Text
              style={{
                flex: 1,
                color: colors.primary,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Nama
            </Text>
            <Text style={{flex: 1, fontSize: 14, color: colors.text}}>
              NIP / NIDN
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                flex: 1,
                color: colors.primary,
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'right',
              }}>
              Jabatan
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 14,
                color: colors.text,
                textAlign: 'right',
              }}>
              Bidang Kepakaran
            </Text>
          </View>
        </View>
      )}
      renderItem={({item}) => (
        <TouchableHighlight
          onPress={() => navigation.navigate('Detail', {nip: item.nip})}
          underlayColor={colors.primary}>
          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 20,
              flex: 1,
              flexDirection: 'row',
            }}>
            <View style={{flex: 2}}>
              <Text style={{flex: 1}}>{item.nama}</Text>
              <Text style={{flex: 1, fontSize: 12, color: colors.text}}>
                {`${item.nip} / ${item.nidn}`}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{flex: 1, textAlign: 'right'}}>{item.jabatan}</Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 12,
                  color: colors.text,
                  textAlign: 'right',
                }}>
                {item.bidang}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      )}
    />
  );
};

export default StaffListScreen;
