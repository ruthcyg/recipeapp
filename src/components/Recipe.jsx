// Recipe.jsx


import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/RecipeStyles';

const Recipe = ({recipe, onViewDetails}) => {
  const handlePress = () => onViewDetails(recipe);

  return (
    <View style={styles.recipeContainer}>
      <Image
       
        source={recipe.image}
        style={styles.recipeImage}
        accessibilityLabel={`Image of ${recipe.name}`}
      />
      <Text style={styles.recipeTitle} accessibilityRole="header">
        {recipe.name}
      </Text>
      <Text style={styles.recipeDescription}>{recipe.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
        accessibilityLabel="View details">
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Recipe;
