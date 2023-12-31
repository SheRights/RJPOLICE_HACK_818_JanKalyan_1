// CarouselComponent.js

import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window');

const sliderWidth = width; 
const itemWidth = width; 

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
    overflow: 'hidden', 
  },
  image: {
    flex: 1,
    width: width-35,
    height: '100%', 
    borderRadius: 20,
  },
});

export default CarouselComponent;
