import {useTheme} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Theme} from '../assets/styles';
import {staffs} from '../utils/staffs';
import {RootParamList} from './Staff';

type Props = StackScreenProps<RootParamList, 'Detail'>;

const colors = Theme.colors;

const StaffDetailScreen = ({route, navigation}: Props) => {
  const {nip} = route.params;

  const currentStaff = staffs.find(staff => staff.nip === nip);
  return (
    <View style={{flex: 1, padding: 15}}>
      <Text style={styles.title}>NIP</Text>
      <Text style={styles.body}>{currentStaff?.nip}</Text>
      <Text style={styles.title}>NIDN</Text>
      <Text style={styles.body}>{currentStaff?.nidn}</Text>
      <Text style={styles.title}>Nama</Text>
      <Text style={styles.body}>{currentStaff?.nama}</Text>
      <Text style={styles.title}>Jabatan Fungsional</Text>
      <Text style={styles.body}>{currentStaff?.jabatan}</Text>
      <Text style={styles.title}>Bidang Kepakaran</Text>
      <Text style={styles.body}>{currentStaff?.bidang}</Text>
      <Text style={styles.title}>Pendidikan</Text>
      <Text style={styles.body}>{`S1: ${currentStaff?.pendidkan.s1}`}</Text>
      <Text style={styles.body}>{`S2: ${currentStaff?.pendidkan.s2}`}</Text>
      <Text style={styles.body}>{`S3: ${currentStaff?.pendidkan.s3}`}</Text>
    </View>
  );
};

export default StaffDetailScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 7,
  },
  body: {
    fontSize: 16,
    color: colors.text,
  },
});
