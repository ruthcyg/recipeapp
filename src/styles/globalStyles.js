// src/styles/globalStyles.js
// src/styles/globalStyles.js
// import { StyleSheet } from 'react-native';

// export const colors = {
//     primary: '#3498db',      // blue
//     accent: '#f1c40f',       // yellow
//     background: '#ecf0f1',   // light gray
//     text: '#2c3e50',         // navy
//     button: '#2980b9',       // button color blue
//     buttonText: '#ffffff',   // white
//     modalBackground: '#ffffff', // white
// };

// export const globalStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: colors.background,
//   },
//   titleText: {
//     fontSize: 20,
//     color: colors.text,
//     fontWeight: 'bold',
//   },
//   paragraph: {
//     marginVertical: 8,
//     lineHeight: 20,
//     color: colors.text,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     padding: 10,
//     fontSize: 18,
//     borderRadius: 6,
//   },
//   button: {
//     backgroundColor: colors.button,
//     color: colors.buttonText,
//     padding: 10,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: colors.buttonText,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   modalContent: {
//     padding: 20,
//     backgroundColor: colors.modalBackground,
//   },
//   link: {
//     color: colors.primary,
//   },

//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adding transparency for modal background
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: colors.modalBackground,
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//     color: colors.text, // Assuming this is defined in your color scheme
//     fontSize: 18,
//   },
//   input: {
//     width: '100%', // adjusted for consistency
//     height: 100,
//     marginBottom: 10,
//     padding: 10,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//   },

 
//   // Example additions or updates to globalStyles
//   carouselItem: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 10,
//     marginLeft: 25,
//     marginRight: 25,
//     alignItems: 'center', // Center items horizontally in the carousel item
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },
//   titleText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   subtitleText: {
//     fontSize: 14,
//     color: 'blue', // Make it stand out as interactive
//     padding: 10,
//   },
// });




import {StyleSheet, Dimensions} from 'react-native';

export const colors = {
  primary: '#3498db', // blue
  accent: '#f1c40f', // yellow
  background: '#ecf0f1', // light gray
  text: '#2c3e50', // navy
  button: '#2980b9', // button color blue
  buttonText: '#ffffff', // white
  modalBackground: '#ffffff', // white
};

const {width, height} = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  titleText: {
    fontSize: 20,
    color: colors.text,
    fontWeight: 'bold',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  button: {
    backgroundColor: colors.button,
    color: colors.buttonText,
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: colors.buttonText,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContent: {
    padding: 20,
    backgroundColor: colors.modalBackground,
  },
  link: {
    color: colors.primary,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adding transparency for modal background
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.modalBackground,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: colors.text,
    fontSize: 18,
  },
  carouselItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
    alignItems: 'center', // Center items horizontally in the carousel item
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitleText: {
    fontSize: 14,
    color: 'blue',
    padding: 10,
  },
});
