// import {StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
//   recipeContainer: {
//     padding: 20,
//     marginHorizontal: 10,
//     marginBottom: 20,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3, // For Android shadow effect
//   },
//   recipeImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   recipeTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//   },
//   recipeDescription: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
 
// });

// export default styles;


// styles.js or any specific component style file like RecipeStyles.js
import { StyleSheet } from 'react-native';
import { commonStyles } from './commonStyles';

const styles = StyleSheet.create({
  recipeContainer: {
    ...commonStyles.container,
    ...commonStyles.shadow,
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  recipeTitle: {
    ...commonStyles.title,
    marginBottom: 5,
  },
  recipeDescription: {
    ...commonStyles.text,
    marginBottom: 10,
  },
  button: {
    ...commonStyles.button,
  },
  buttonText: {
    ...commonStyles.buttonText,
  },
  // Add to your styles.js
  note: {
    fontStyle: 'italic',
    color: '#666', // Matching the description color for a cohesive look
    padding: 10, // Ensuring it has some space around
  },
});

export default styles;
