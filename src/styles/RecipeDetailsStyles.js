// // Assuming RecipeStyles.js is where your shared styles are defined
// import {StyleSheet} from 'react-native';
// import commonStyles from './RecipeStyles'; // Import common styles

// const styles = StyleSheet.create({
//   ...commonStyles, // Spread common styles to inherit them
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   note: {
//     fontStyle: 'italic',
//     marginBottom: 20,
//     color: '#666', // Matching your description color for consistency
//   },
// });

// export default styles;


// Specific styles for RecipeDetails component, importing common styles.
import { StyleSheet } from 'react-native';
import { commonStyles } from './commonStyles';

const styles = StyleSheet.create({
  ...commonStyles, // Use common styles
  // Override or add specific styles for RecipeDetails
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    ...commonStyles.shadow, // Reuse shadow style
  },
  title: {
    ...commonStyles.title, // Reuse title style
    fontSize: 24,
    marginBottom: 10,
  },
  description: {
    ...commonStyles.text, // Reuse text style
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  note: {
    fontStyle: 'italic',
    ...commonStyles.text, // Reuse text style
    marginBottom: 20,
  },
  // No need to repeat button and buttonText styles here if they're the same
});

export default styles;
