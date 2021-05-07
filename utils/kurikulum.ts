interface Peminatan {
  nama: string;
  data: {
    nama: string;
    matkul: Matkul[];
    totalSks: number;
  }[];
}

interface Matkul {
  kode: string;
  nama: string;
  sks: number;
}

export const kurikulum: Peminatan[] = [
  {
    nama: 'Wajib',
    data: [
      {
        nama: 'Semester 1',
        totalSks: 21,
        matkul: [
          {
            kode: 'Q10A.W11',
            nama: 'Geologi Dasar / Basic Geology',
            sks: 3,
          },
          {
            kode: 'Q10A.W12',
            nama:
              'Geomorfologi & Pengindraan Jauh / Geomorphology and Remote Sensing',
            sks: 3,
          },
          {
            kode: 'Q10A.W13',
            nama: 'Mineralogi / Mineralogy',
            sks: 3,
          },
          {
            kode: 'Q10A.W14',
            nama: 'Matematika I / Mathematics I',
            sks: 2,
          },
          {
            kode: 'Q10A.W15',
            nama: 'Kimia Dasar / Basic Chemistry',
            sks: 2,
          },
          {
            kode: 'Q10A.W16',
            nama: 'Praktikum Kimia Dasar / Basic Chemistry Practice',
            sks: 1,
          },
          {
            kode: 'Q10A.W17',
            nama: 'Fisika Dasar  / Basic Physics',
            sks: 2,
          },
          {
            kode: 'Q10A.W18',
            nama: 'Praktikum Fisika Dasar / Basic Physics Pactice',
            sks: 1,
          },
          {
            kode: 'Q10A.W19',
            nama: 'Ilmu Budaya Dasar / Basic Cultural Sciences',
            sks: 2,
          },
          {
            kode: 'Q10A.W10',
            nama: 'Pendidikan Agama / Religion Education',
            sks: 2,
          },
        ],
      },
      {
        nama: 'Semester 2',
        totalSks: 21,
        matkul: [
          {
            kode: 'Q10A.W21',
            nama: 'Petrologi / Petrology',
            sks: 3,
          },
          {
            kode: 'Q10A.W22',
            nama: 'Sedimentologi  / Sedimentology',
            sks: 3,
          },
          {
            kode: 'Q10A.W23',
            nama: 'Paleontologi / Paleontology',
            sks: 3,
          },
          {
            kode: 'Q10A.W24',
            nama: 'Analisis Geomorfologi / Geomorphological Analysis',
            sks: 3,
          },
          {
            kode: 'Q10A.W25',
            nama: 'Matematika II / Mathematics II',
            sks: 2,
          },
          {
            kode: 'Q10A.W26',
            nama: 'Bahasa Indonesia / Indonesian',
            sks: 2,
          },
          {
            kode: 'Q10A.W27',
            nama: 'Geokimia Dasar / Basic Geochemistry',
            sks: 3,
          },
          {
            kode: 'Q10A.W28',
            nama:
              'Kartografi dan Ilmu Ukur tanah / Cartography and Land Measurement Science',
            sks: 2,
          },
        ],
      },
      {
        nama: 'Semester 3',
        totalSks: 21,
        matkul: [
          {
            kode: 'Q10A.W31',
            nama: 'Petrografi / Petrography',
            sks: 3,
          },
          {
            kode: 'Q10A.W32',
            nama: 'Mikropaleontologi / Micropaleontology',
            sks: 3,
          },
          {
            kode: 'Q10A.W33',
            nama: 'Prinsip Stratigrafi / Stratigraphic Principles',
            sks: 3,
          },
          {
            kode: 'Q10A.W34',
            nama: 'Geologi Struktur / Geological Structure',
            sks: 3,
          },
          {
            kode: 'Q10A.W35',
            nama: 'Geologi Sejarah / Historical Geoogy',
            sks: 2,
          },
          {
            kode: 'Q10A.W36',
            nama: 'Gambar Teknik / Engineering drawings',
            sks: 2,
          },
          {
            kode: 'Q10A.W37',
            nama: 'Metode Pemetaan Geologi / Geological Mapping Methods',
            sks: 3,
          },
          {
            kode: 'Q10A.W38',
            nama: 'Pelaporan  Geologi / Geological Reporting',
            sks: 2,
          },
        ],
      },
      {
        nama: 'Semester 4',
        totalSks: 19,
        matkul: [
          {
            kode: 'Q10A.W41',
            nama:
              'Pemetaan Gologi Pendahuluan / Preliminary Geological Mapping',
            sks: 3,
          },
          {
            kode: 'Q10A.W42',
            nama: 'Geofisika / Geophysics',
            sks: 3,
          },
          {
            kode: 'Q10A.W43',
            nama: 'Analisis Stratigrafi / Stratigraphic Analysis',
            sks: 3,
          },
          {
            kode: 'Q10A.W44',
            nama: 'Analisis Geologi Struktur / Structural Geological Analysis',
            sks: 3,
          },
          {
            kode: 'Q10A.W45',
            nama: 'Analisis Batuan / Rock Analysis',
            sks: 3,
          },
          {
            kode: 'Q10A.W46',
            nama: 'Pemrosesan Data / Data Processing',
            sks: 3,
          },
          {
            kode: 'Q10A.W47',
            nama: 'Bahasa Inggris / English (I)',
            sks: 1,
          },
        ],
      },
    ],
  },
  {
    nama: 'Energi',
    data: [
      {
        nama: 'Semester 5',
        totalSks: 20,
        matkul: [
          {
            kode: 'Q10A.E51',
            nama: 'Evolusi Geologi / Geological Evolution',
            sks: 3,
          },
          {kode: 'Q10A.E52', nama: 'Hidrogeologi / Hidrogeology', sks: 3},
          {
            kode: 'Q10A.E53',
            nama: 'Geologi Minyak dan Gas Bumi / Petroleum Geology',
            sks: 3,
          },
          {
            kode: 'Q10A.E54',
            nama: 'Geologi Batubara / The Geology of coal',
            sks: 3,
          },
          {
            kode: 'Q10A.E55',
            nama: 'Geologi Panas Bumi / Geothermal Geology',
            sks: 3,
          },
          {
            kode: 'Q10A.E56',
            nama:
              'Geologi Kelautan / Marine geology or geological oceanography',
            sks: 2,
          },
          {
            kode: 'Q10A.E57',
            nama: 'Geologi Teknik / Geological engineering',
            sks: 3,
          },
        ],
      },
      {
        nama: 'Semester 6',
        totalSks: 23,
        matkul: [
          {
            kode: 'Q10A.E61',
            nama: 'Suksesi Vulkanik / Volcanic Succession',
            sks: 3,
          },
          {
            kode: 'Q10A.E62',
            nama: 'Analisis Cekungan / Basin Analysis',
            sks: 3,
          },
          {
            kode: 'Q10A.E63',
            nama: 'Eksplorasi Migas / Oil and Gas Exploration',
            sks: 2,
          },
          {
            kode: 'Q10A.E64',
            nama: 'Eksplorasi Batubara / Coal Exploration',
            sks: 2,
          },
          {
            kode: 'Q10A.E65',
            nama: 'Eksplorasi Panas Bumi /  Geothermal Exploration',
            sks: 2,
          },
          {
            kode: 'Q10A.E66',
            nama: 'Geologi Lingkungan / Environmental Geology',
            sks: 3,
          },
          {kode: 'Q10A.W61', nama: 'KKNM / Community Service', sks: 3},
          {kode: 'Q10A.W62', nama: 'Bahasa Inggris / English (II)', sks: 1},
          {
            kode: 'Q10A.W63',
            nama: 'Pendidikan Kewarganegaraan / Civic Education',
            sks: 2,
          },
          {
            kode: '        ',
            nama: ' Mikrofosil Non Foram / Microfosil Non Foram',
            sks: 2,
          },
        ],
      },
      {
        nama: 'Semester 7',
        totalSks: 13,
        matkul: [
          {kode: 'Q10A.E71', nama: 'Regulasi ESDM / ESDM Regulation', sks: 2},
          {
            kode: 'Q10A.E72',
            nama: 'Pemodelan Geologi Energi / Energy Geological Modeling',
            sks: 3,
          },
          {
            kode: 'Q10A.W71',
            nama: 'Pemetaan Geologi Lanjut / Advanced Geological Mapping',
            sks: 4,
          },
          {
            kode: 'Q10A.W72',
            nama: 'Pendidikan Pancasila / Pancasila Education',
            sks: 2,
          },
          {
            kode: 'Q10A.W73',
            nama: 'Filsafat Ilmu / Science Phylosophy',
            sks: 2,
          },
        ],
      },
      {
        nama: 'Semester 8',
        totalSks: 6,
        matkul: [
          {kode: 'Q10A.W81', nama: 'Skripsi / Thesis', sks: 4},
          {
            kode: 'Q10A.W82',
            nama: 'Sidang Komprehensif / Comprehensive Session',
            sks: 2,
          },
        ],
      },
    ],
  },
  {
    nama: 'Mineral',
    data: [
      {
        nama: 'Semester 5',
        totalSks: 23,
        matkul: [
          {
            kode: 'Q10A.M51',
            nama: 'Evolusi Geologi / Geological Evolution',
            sks: 3,
          },
          {kode: 'Q10A.M52', nama: 'Hidrogeologi / Hidrogeology', sks: 3},
          {
            kode: 'Q10A.M53',
            nama: 'Geologi Sumberdaya Mineral / Geology of mineral resources',
            sks: 3,
          },
          {kode: 'Q10A.M54', nama: 'Thermodinamika / Thermodynamic', sks: 2},
          {
            kode: 'Q10A.M55',
            nama: 'Petrologi Batuan Metamorf / Metamorphic Rock Petrology',
            sks: 2,
          },
          {
            kode: 'Q10A.M55',
            nama:
              'Mineral Industri dan Batu Mulia / Industry of Minerals and Gemstone',
            sks: 3,
          },
          {kode: 'Q10A.M56', nama: 'Vulkanologi / Vulcanology', sks: 2},
          {
            kode: 'Q10A.M57',
            nama:
              'Geologi Kelautan / Marine geology or geological oceanography',
            sks: 2,
          },
          {
            kode: 'Q10A.M58',
            nama: 'Geologi Teknik / Geological engineering',
            sks: 3,
          },
        ],
      },
      {
        nama: 'Semester 6',
        totalSks: 18,
        matkul: [
          {
            kode: 'Q10A.M61',
            nama: 'Geokimia Terapan / Applied Geochemistry',
            sks: 2,
          },
          {
            kode: 'Q10A.M62',
            nama: 'Petrologi Mineral Ubahan / Altered Mineral Petrology',
            sks: 2,
          },
          {
            kode: 'Q10A.M63',
            nama: 'Mikroskopik Bijih / Microscopic Ore',
            sks: 2,
          },
          {
            kode: 'Q10A.M64',
            nama:
              'Eksplorasi sumberdaya mineral / Exploration of mineral resources',
            sks: 3,
          },
          {
            kode: 'Q10A.M65',
            nama: 'Geologi Lingkungan / Environmental Geology',
            sks: 3,
          },
          {kode: 'Q10A.W61', nama: 'KKNM / Community Service', sks: 3},
          {kode: 'Q10A.W62', nama: 'Bahasa Inggris / English (II)', sks: 1},
          {
            kode: 'Q10A.W63',
            nama: 'Pendidikan Kewarganegaraan / Civic Education',
            sks: 2,
          },
        ],
      },
      {
        nama: 'Semester 7',
        totalSks: 13,
        matkul: [
          {kode: 'Q10A.M71', nama: 'Regulasi ESDM / ESDM Regulation', sks: 2},
          {
            kode: 'Q10A.M72',
            nama:
              'Pemodelan Keteknikan Geologi / Geological Engineering Modeling',
            sks: 3,
          },
          {
            kode: 'Q10A.W71',
            nama: 'Pemetaan Geologi Lanjut / Advanced Geological Mapping',
            sks: 4,
          },
          {
            kode: 'Q10A.W72',
            nama: 'Pendidikan Pancasila / Pancasila Education',
            sks: 2,
          },
          {
            kode: 'Q10A.W73',
            nama: 'Filsafat Ilmu / Science Phylosophy',
            sks: 2,
          },
        ],
      },
      {
        nama: 'Semester 8',
        totalSks: 6,
        matkul: [
          {kode: 'Q10A.W81', nama: 'Skripsi / Thesis', sks: 4},
          {
            kode: 'Q10A.W82',
            nama: 'Sidang Komprehensif / Comprehensive Session',
            sks: 2,
          },
        ],
      },
    ],
  },
  {
    nama: 'Keteknikan Geologi',
    data: [
      {
        nama: 'Semester 5',
        totalSks: 20,
        matkul: [
          {
            kode: 'Q10A.T51',
            nama: 'Evolusi Geologi / Geological Evolution',
            sks: 3,
          },
          {kode: 'Q10A.T52', nama: 'Hidrogeologi / Hidrogeology', sks: 3},
          {kode: 'Q10A.T53', nama: 'Geologi Urban / Urban Geology', sks: 2},
          {
            kode: 'Q10A.T54',
            nama:
              'Hidrolika dan Hidrokimia Airtanah / Hydraulics and Hydrochemistry of Groundwater',
            sks: 3,
          },
          {kode: 'Q10A.T55', nama: 'Tataguna lahan / Land use', sks: 2},
          {
            kode: 'Q10A.T55',
            nama: 'Mitigasi Bencana Geologi / Geological Disaster Mitigation',
            sks: 2,
          },
          {
            kode: 'Q10A.T56',
            nama:
              'Geologi Kelautan / Marine geology or geological oceanography',
            sks: 2,
          },
          {
            kode: 'Q10A.T57',
            nama: 'Geologi Teknik / Geological engineering',
            sks: 3,
          },
        ],
      },
      {
        nama: 'Semester 6',
        totalSks: 21,
        matkul: [
          {kode: 'Q10A.T61', nama: 'Vulkanologi / Vulcanology', sks: 2},
          {
            kode: 'Q10A.T62',
            nama:
              'Eksplorasi Geologi Teknik / Geological Engineering exploration',
            sks: 3,
          },
          {
            kode: 'Q10A.T63',
            nama: 'Manajemen Airtanah / Groundwater Management',
            sks: 2,
          },
          {
            kode: 'Q10A.T64',
            nama: 'Analisis Kemiringan Lereng / Slope Analysis',
            sks: 2,
          },
          {
            kode: 'Q10A.T65',
            nama: 'Geologi Lingkungan / Environmental Geology',
            sks: 3,
          },
          {kode: 'Q10A.T66', nama: 'Geoteknik / Geotechnical', sks: 3},
          {kode: 'Q10A.W61', nama: 'KKNM / Community Service', sks: 3},
          {kode: 'Q10A.W62', nama: 'Bahasa Inggris / English (II)', sks: 1},
          {
            kode: 'Q10A.W63',
            nama: 'Pendidikan Kewarganegaraan / Civic Education',
            sks: 2,
          },
          {kode: '        ', nama: 'Geomekanika / Geomechanics', sks: 2},
        ],
      },
      {
        nama: 'Semester 7',
        totalSks: 13,
        matkul: [
          {
            kode: 'Q10A.T71',
            nama: 'Regulasi Lingkungan Hidup / Environmental Regulation',
            sks: 2,
          },
          {
            kode: 'Q10A.T72',
            nama:
              'Pemodelan Keteknikan Geologi / Geological Engineering Modeling',
            sks: 3,
          },
          {
            kode: 'Q10A.W71',
            nama: 'Pemetaan Geologi Lanjut / Advanced Geological Mapping',
            sks: 4,
          },
          {
            kode: 'Q10A.W72',
            nama: 'Pendidikan Pancasila / Pancasila Education',
            sks: 2,
          },
          {
            kode: 'Q10A.W73',
            nama: 'Filsafat Ilmu / Science Phylosophy',
            sks: 2,
          },
        ],
      },
      {
        nama: 'Semester 8',
        totalSks: 6,
        matkul: [
          {kode: 'Q10A.W81', nama: 'Skripsi / Thesis', sks: 4},
          {
            kode: 'Q10A.W82',
            nama: 'Sidang Komprehensif / Comprehensive Session',
            sks: 2,
          },
        ],
      },
    ],
  },
  {
    nama: 'Peneliti Bidang Geologi',
    data: [
      {
        nama: 'Semester 5',
        totalSks: 20,
        matkul: [
          {
            kode: 'Q10A.P51',
            nama: 'Evolusi Geologi / Geological Evolution',
            sks: 3,
          },
          {kode: 'Q10A.P52', nama: 'Hidrogeologi / Hidrogeology', sks: 3},
          {
            kode: 'Q10A.P53',
            nama: 'Geologi Sumberdaya Mineral / Mineral Resource Geology',
            sks: 3,
          },
          {
            kode: 'Q10A.P54',
            nama: 'Geologi Pengembangan Wilayah / Regional Development Geology',
            sks: 2,
          },
          {kode: 'Q10A.P55', nama: 'Vulkanologi / Vulcanology', sks: 2},
          {
            kode: 'Q10A.P56',
            nama:
              'Geologi Sumberdaya Energi (Migas, Batubara dan Panas bumi) / Energy Resources Geology (Oil and Gas, Coal and Geothermal)',
            sks: 2,
          },
          {
            kode: 'Q10A.P57',
            nama:
              'Geologi Kelautan / Marine geology or geological oceanography',
            sks: 2,
          },
          {
            kode: 'Q10A.P58',
            nama: 'Geologi Teknik / Geological engineering',
            sks: 3,
          },
        ],
      },
      {
        nama: 'Semester 6',
        totalSks: 21,
        matkul: [
          {
            kode: 'Q10A.P61',
            nama: 'Geodiversity, Geoheritage dan Geopark',
            sks: 3,
          },
          {
            kode: 'Q10A.P62',
            nama: 'Geologi Eksplorasi / Exploration Geology',
            sks: 3,
          },
          {
            kode: 'Q10A.P63',
            nama: 'Geofisika Eksplorasi / Exploration Geophysics',
            sks: 2,
          },
          {
            kode: 'Q10A.P64',
            nama: 'Kebencanaan Geologi / Geological Disaster',
            sks: 2,
          },
          {
            kode: 'Q10A.P65',
            nama: 'Geologi Lingkungan / Environmental Geology',
            sks: 3,
          },
          {kode: 'Q10A.W61', nama: 'KKNM / Community Service', sks: 3},
          {kode: 'Q10A.W62', nama: 'Bahasa Inggris / English (II)', sks: 1},
          {
            kode: 'Q10A.W63',
            nama: 'Pendidikan Kewarganegaraan / Civic Education',
            sks: 2,
          },
          {kode: '        ', nama: 'Palinologi / Palinology', sks: 2},
        ],
      },
      {
        nama: 'Semester 7',
        totalSks: 13,
        matkul: [
          {
            kode: 'Q10A.P71',
            nama:
              'Regulasi Sumberdaya Geologi / Geological Resources Regulation',
            sks: 2,
          },
          {
            kode: 'Q10A.P72',
            nama:
              'Pemodelan Geologi Energi, Geologi Mineral dan Keteknikan Geologi / Modeling of Geological Energy, Mineral Geology and Geological Engineering',
            sks: 3,
          },
          {
            kode: 'Q10A.W71',
            nama: 'Pemetaan Geologi Lanjut / Advanced Geological Mapping',
            sks: 4,
          },
          {
            kode: 'Q10A.W72',
            nama: 'Pendidikan Pancasila / Pancasila Education',
            sks: 2,
          },
          {
            kode: 'Q10A.W73',
            nama: 'Filsafat Ilmu / Science Phylosophy',
            sks: 2,
          },
        ],
      },
      {
        nama: 'Semester 8',
        totalSks: 6,
        matkul: [
          {kode: 'Q10A.W81', nama: 'Skripsi / Thesis', sks: 4},
          {
            kode: 'Q10A.W82',
            nama: 'Sidang Komprehensif / Comprehensive Session',
            sks: 2,
          },
        ],
      },
    ],
  },
];
