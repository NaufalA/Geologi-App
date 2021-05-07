import {ImageSourcePropType} from 'react-native';

interface Media {
  mediaUrl: ImageSourcePropType;
  desc?: string;
}

export const homeheader: Media[] = [
  {
    mediaUrl: require('../assets/images/geologi-1.jpg'),
  },
  {
    mediaUrl: require('../assets/images/geologi-2.jpg'),
  },
  {
    mediaUrl: require('../assets/images/geologi-3.jpg'),
  },
  {
    mediaUrl: require('../assets/images/geologi-4.jpg'),
  },
];
