import {useTheme} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootParamList} from './ProgramPendidikanScreen';

type Props = StackScreenProps<RootParamList, 'Home'>;

const ProgPendidikanHomeScreen = ({navigation}: Props) => {
  const {colors} = useTheme();
  return (
    <ScrollView>
      <Image
        source={require('../assets/images/akreditasi.png')}
        style={{
          width: 350,
          height: 280,
          alignSelf: 'center',
          resizeMode: 'contain',
        }}
      />
      <View style={{padding: 15}}>
        <View style={{margin: 2}}>
          <Button
            title="Kurikulum"
            onPress={() => navigation.navigate('Kurikulum', {})}
            color={colors.primary}
          />
        </View>
        <View style={{margin: 2}}>
          <Button
            title="Profil Lulusan"
            onPress={() => navigation.navigate('ProfilLulusan', {})}
            color={colors.primary}
          />
        </View>
      </View>
      <View style={{padding: 15}}>
        <Text style={{...styles.section, color: colors.primary}}>
          Tujuan dan Sasaran
        </Text>
        <Text style={styles.subSection}>Tujuan</Text>
        <Text style={{color: colors.text, marginVertical: 2}}>
          Menghasilkan sarjana geologi dengan kompetensi dibidang eksplorasi
          energi, eksplorasi mineral, keteknikan geologi dan peneliti bumi yang
          diakui ditingkat regional, berlandaskan moral dan etika yang baik.
        </Text>
        <Text style={{color: colors.text, marginVertical: 2}}>
          Menghasilkan lulusan yang memiliki kompetensi dalam pemetaan geologi,
          penguasaan dan pengaplikasian konsep dasar teknologi didukung oleh
          penguasaan piranti lunak.
        </Text>
        <Text style={{color: colors.text, marginVertical: 2}}>
          Menghasilkan produk penelitian berdasarkan sains dan teknologi geologi
          yang berorientasi pada eksplorasi energi (termasuk energi terbarukan
          khususnya panas bumi dan energi air), eksplorasi mineral dan
          lingkungan (kajian konservasi dan kontaminasi air tanah, geopark,
          kebencanaan geologi, perencanaan dan daya dukung lahan).
        </Text>
        <Text style={{color: colors.text, marginVertical: 2}}>
          Menerapkan hasil penelitian sebagai bentuk pengabdian yang dapat
          langsung dirasakan masyarakat, pemerintah, dan pelaku stakeholder
          terkait.
        </Text>
        <Text style={{color: colors.text, marginVertical: 2}}>
          Pengelolaan akademik yang efesien dan profesional non akademik.
        </Text>
        <View>
          <Text style={styles.subSection}>Sasaran</Text>
          <Text style={{color: colors.text, marginVertical: 2}}>
            Menghasilkan lulusan sarjana geologi handal dan berkarakter serta
            mampu berkompetensi (kompetensi geologi lapangan yang unggul), dapat
            mengamalkan ilmu Pengetahuan dan Teknologi melalui penalaran ilmiah,
            menjadi intelektual dan/atau ilmuwan yang berbudaya, mampu memasuki
            dan/atau menciptakan lapangan kerja, serta mampu mengembangkan diri
            menjadi profesional geologi.
          </Text>
          <Text style={{color: colors.text, marginVertical: 2}}>
            Menyelenggarakan penelitian yang berorientasi sains (konseptual
            geologi) dan pengembangan aplikasi ilmu pengetahuan teknologi
            geologi untuk kepentingan pembangunan nasional sektor energi,
            mineral dan keteknikan geologi.
          </Text>
          <Text style={{color: colors.text, marginVertical: 2}}>
            Meningkatnya kompetensi tenaga pendidik mengikuti perkembangan ilmu
            pengetahun dan teknologi di bidang geologi serta kebutuhan
            stakeholder.
          </Text>
        </View>
      </View>
      <View style={{padding: 15}}>
        <Text
          style={{
            ...styles.section,
            color: colors.primary,
            textAlign: 'center',
          }}>
          Metode Pembelajaran
        </Text>
        <Text style={{...styles.subSection, textAlign: 'center'}}>
          Student Centered Learning
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            marginVertical: 10,
          }}>
          <Text style={{color: colors.text, margin: 5}}>
            Problem based learning
          </Text>
          <Text style={{color: colors.text, margin: 5}}>Role Play</Text>
          <Text style={{color: colors.text, margin: 5}}>Simulasi</Text>
          <Text style={{color: colors.text, margin: 5}}>Diskusi</Text>
        </View>
        <Text style={{...styles.subSection, textAlign: 'center'}}>
          Beban Studi Kumulatif : 144 – 146 SKS
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProgPendidikanHomeScreen;

const styles = StyleSheet.create({
  section: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subSection: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
