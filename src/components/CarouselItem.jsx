// // CarouselItem.js
// import React from 'react';
// import {View, Text, Image, Alert} from 'react-native';
// import {globalStyles} from '../styles/globalStyles';

// const CarouselItem = ({item}) => {
//   const showDetails = () => {
//     Alert.alert(
//       item.name,
//       `Nutrition Facts:\nCalories: ${item.nutritionFacts.calories}\nFat: ${item.nutritionFacts.fat}\nCarbs: ${item.nutritionFacts.carbs}\nProtein: ${item.nutritionFacts.protein}\n\nServing Size: ${item.servingSize}`,

     
//       [{text: 'OK'}],
//     );
//   };

//   return (
//     <View style={globalStyles.carouselItem}>
//       <Image
//         source={item.image}
//         style={{width: 300, height: 200, borderRadius: 10}}
//         resizeMode="cover"
//       />
//       <Text style={globalStyles.titleText}>{item.name}</Text>
//       <Text onPress={showDetails} style={globalStyles.subtitleText}>
//         Tap me for details!
//       </Text>
//     </View>
//   );
// };

// export default CarouselItem;


import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

const CarouselItem = ({item}) => {
  const showDetails = () => {
    Alert.alert(
      item.name,
      `Nutrition Facts:\nCalories: ${item.nutritionFacts.calories}\nFat: ${item.nutritionFacts.fat}\nCarbs: ${item.nutritionFacts.carbs}\nProtein: ${item.nutritionFacts.protein}\n\nServing Size: ${item.servingSize}`,
      [{text: 'OK'}],
    );
  };

  return (
    <View style={globalStyles.carouselItem}>
      <Image
        source={item.image}
        style={{width: 300, height: 200, borderRadius: 10}}
        resizeMode="cover"
      />
      <Text style={globalStyles.titleText}>{item.name}</Text>
      <Text onPress={showDetails} style={globalStyles.subtitleText}>
        Tap me for details!
      </Text>
    </View>
  );
};

export default CarouselItem;
