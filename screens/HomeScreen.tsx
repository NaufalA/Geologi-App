import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {MediaCarousel} from '../components';
import {homeheader} from '../utils/homeheader';

const HomeScreen = () => {
  const {colors} = useTheme();
  return (
    <ScrollView style={{flex: 1}}>
      <MediaCarousel media={homeheader} />
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            color: colors.text,
          }}>
          Visi & Misi
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            color: colors.text,
          }}>
          Dalam merespon perubahan dunia yang begitu cepat dan menjawab
          tantangan serta kebutuhan akan sumber daya bagi kehidupan, Program
          Studi Sarjana Teknik Geologi telah mengembangkan visi dan misi
          berdasarkan rekomendasi yang hadir dari proses perencanaan strategis
          di tingkat fakultas dan universitas. Visi dan misi inilah yang akan
          membimbing prioritas prodi selama beberapa tahun mendatang.
        </Text>
        <View style={{flex: 1, marginVertical: 10}}>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: colors.text,
            }}>
            Visi
          </Text>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              color: colors.text,
            }}>
            Menjadi institusi pendidikan geologi yang merespon dan mendorong
            pengembangan sumberdaya geologi melalui penguasaan konsep teoritis
            bidang pengetahuan dan keterampilan geologi dengan berorientasi pada
            pemuliaan lingkungan, serta pengembangan institusi berdaya saing
            Internasional.
          </Text>
        </View>
        <View style={{flex: 1, marginVertical: 10}}>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: colors.text,
            }}>
            Misi
          </Text>
          <View
            style={{
              flex: 1,
            }}>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                color: colors.text,
                marginVertical: 5,
              }}>
              Menyelenggarakan pendidikan geologi yang dapat meluluskan sarjana
              geologi yang handal, berkarakter, berbudaya dan bernalar ilmiah,
              serta mampu bersaing di tingkat internasional.
            </Text>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                color: colors.text,
                marginVertical: 5,
              }}>
              Menyelenggarakan pendidikan geologi yang dapat meluluskan sarjana
              geologi yang mampu memasuki dan atau menciptakan lapangan kerja,
              serta mampu mengembangkan diri menjadi profesional geologi.
            </Text>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                color: colors.text,
                marginVertical: 5,
              }}>
              Menyelenggarakan penelitian dasar dan terapan geologi untuk
              kepentingan pembangunan nasional sektor energi, mineral, geologi
              teknik, hidrogeologi, ilmu kebumian, dan geologi lingkungan,
              kewirausahaan geologi.
            </Text>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                color: colors.text,
                marginVertical: 5,
              }}>
              Menerapkan hasil penelitian dasar dan terapan geologi untuk
              kepentingan masyarakat, pemerintah dan stakeholderterkait.
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            color: colors.text,
          }}>
          Sejarah
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            color: colors.text,
            marginVertical: 5,
          }}>
          Jurusan Geologi didirikan pada tahun 1959 oleh Prof. Moestopo dan Drs.
          M. Koesmono dibantu oleh Drs. Sartono, Drs. R. Soeria Atmaja dan Drs.
          Asikin. Jurusan Geologi terus berkembang baik kualitas maupun
          kuantitas pendidikannya, hal ini tercermin dari jumlah mahasiswa dan
          lulusan yang bekerja pada berbagai bidang baik di dalam maupun luar
          negeri.
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            color: colors.text,
            marginVertical: 5,
          }}>
          Jurusan Geologi berkembang menjadi Fakultas Teknik Geologi pada bulan
          Oktober tahun 2007, dengan Program Studi Teknik Geologi (S1). Di bawah
          Fakultas Teknik Geologi, dengan ijin Dikti pada tahun 2009 dibuka
          Program Magister dan pada tahun 2011 dibuka Program Doktor.
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            color: colors.text,
            marginVertical: 5,
          }}>
          Sejak Tahun 2012 Program Studi Teknik Geologi sudah terakreditasi A,
          dan telah diperpanjang dengan SK BAN-PT No. 0719/SK/BAN-PT/Akred/S/I
          II/2017 berlaku sampai dengan tanggal 21 Maret 2022.
        </Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
