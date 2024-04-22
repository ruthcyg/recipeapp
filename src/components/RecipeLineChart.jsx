// RecipeLineChart.js
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const RecipeLineChart = ({data}) => {
  return (
    <LineChart
      data={data}
      width={screenWidth - 40}
      height={220}
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {borderRadius: 16},
        propsForDots: {r: '6', strokeWidth: '2', stroke: '#ffa726'},
      }}
      bezier
      style={{marginVertical: 8, borderRadius: 16}}
    />
  );
};

export default RecipeLineChart;
