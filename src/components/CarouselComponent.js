// CarouselComponent.js

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const sliderWidth = 500; 
const itemWidth = 500; 

const CarouselComponent = ({ data }) => {
  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide} key={index}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
    );
  };

  return (
    <Carousel   
    autoplay={true}
    autoplayDelay={1000}
      data={data}   
      renderItem={_renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      loop={true}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width: "100%",
    height: 150, 
    borderRadius: 8,
    overflow: 'hidden', // Ensure the image is clipped to the rounded corners
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%', 
  },
});

export default CarouselComponent;
