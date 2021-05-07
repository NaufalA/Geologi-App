import React from 'react';
import {Text, View, Image, ImageSourcePropType, ScrollView} from 'react-native';
import {Theme} from '../assets/styles';

interface Media {
  mediaUrl: ImageSourcePropType;
  desc?: string;
}

const MediaCarousel = (props: {media: Media[]}) => {
  const {colors} = Theme;
  const {media} = props;

  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      style={{width: '100%', height: 300}}>
      {media.map(item => (
        <View key={`${item.mediaUrl}`}>
          <Image source={item.mediaUrl} style={{width: 393, height: 300}} />
          {item.desc && (
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: colors.text,
                marginVertical: 2,
              }}>
              {item.desc}
            </Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default MediaCarousel;
