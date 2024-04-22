// MostPopularRecipe.js
import React from 'react';
import {Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

const MostPopularRecipe = ({data}) => {
  const mostPopular = data.reduce(
    (prev, current) => (prev.views > current.views ? prev : current),
    data[0],
  );

  return (
    <Text style={globalStyles.paragraph}>
      Most Popular Recipe: {mostPopular.name}
    </Text>
  );
};

export default MostPopularRecipe;
