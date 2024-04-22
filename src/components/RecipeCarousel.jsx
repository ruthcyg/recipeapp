


import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselItem from './CarouselItem';

const screenWidth = Dimensions.get('window').width;

const RecipeCarousel = ({data}) => {
  const renderItem = ({item}) => <CarouselItem item={item} />;

  // Make sure that data is an array before passing it to Carousel
  if (!Array.isArray(data) || data.length === 0) {
    // Handle the case where data is not an array or is empty
    // You might want to return null or some placeholder component
    return null;
  }

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={screenWidth}
      itemWidth={300}
      loop={true}
    />
  );
};

export default RecipeCarousel;
