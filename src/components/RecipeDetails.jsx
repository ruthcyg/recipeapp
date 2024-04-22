
// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, Button, Alert } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import ModalComponent from './ModalComponent';
// import styles from '../styles/RecipeStyles';  // Adjust the path as necessary


// const RecipeDetails = ({route}) => {
//   const {recipe} = route.params;
//   const [modalVisible, setModalVisible] = useState(false);
//   const [note, setNote] = useState('');




//     useEffect(() => {
//       const loadNote = async () => {
//         try {
//           const storedNote = await AsyncStorage.getItem(`note_${recipe.id}`);
//           if (storedNote !== null) {
//             setNote(storedNote);
//           }
//         } catch (error) {
//           Alert.alert('Error', 'Failed to load the note.');
//         }
//       };

//       loadNote();
//     }, [recipe.id]);

//     const addNoteToRecipe = async newNote => {
//       try {
//         await AsyncStorage.setItem(`note_${recipe.id}`, newNote);
//         setNote(newNote);
//         Alert.alert('Success', 'Note saved successfully!');
//       } catch (error) {
//         Alert.alert('Error', 'Failed to save the note.');
//       }
//     };

//   return (
//     <View style={styles.container}>
//       <Image
//           resizeMode="contain"
//            source={recipe.image}
        
//         style={styles.recipeImage}
//       />
//       <Text style={styles.recipeTitle}>{recipe.name}</Text>
//       <Text style={styles.recipeDescription}>{recipe.description}</Text>
//       {note && <Text style={styles.note}>Note: {note}</Text>}
//       <Button
//         title="Add Note"
//         onPress={() => setModalVisible(true)}
//         color={styles.button.backgroundColor} // Using style directly for properties where possible
//       />
//       <ModalComponent
//         isVisible={modalVisible}
//         onClose={() => setModalVisible(false)}
//         onSubmit={addNoteToRecipe}
//         recipeName={recipe.name}
//       />
//     </View>
//   );
// };


//  export default RecipeDetails;

// import React, {useState, useEffect} from 'react';
// import {View, Text, Image, Button, Alert, StyleSheet} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import ModalComponent from './ModalComponent';
// import styles from '../styles/RecipeStyles'; // Ensure this is the correct path

// const RecipeDetails = ({route}) => {
//   const {recipe} = route.params;
//   const [modalVisible, setModalVisible] = useState(false);
//   const [note, setNote] = useState('');
//   const [editingNote, setEditingNote] = useState(false); // State to track whether we're adding or editing a note

//   useEffect(() => {
//     loadNote();
//   }, [recipe.id]);

//   const loadNote = async () => {
//     try {
//       const storedNote = await AsyncStorage.getItem(`note_${recipe.id}`);
//       if (storedNote !== null) {
//         setNote(storedNote);
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to load the note.');
//     }
//   };

//   const handleSaveNote = async newNote => {
//     try {
//       await AsyncStorage.setItem(`note_${recipe.id}`, newNote);
//       setNote(newNote);
//       Alert.alert('Success', 'Note saved successfully!');
//       setModalVisible(false); // Close modal after saving
//     } catch (error) {
//       Alert.alert('Error', 'Failed to save the note.');
//     }
//   };

//   const handleEditNote = () => {
//     setEditingNote(true);
//     setModalVisible(true); // Open the modal for editing
//   };

//   const handleDeleteNote = async () => {
//     try {
//       await AsyncStorage.removeItem(`note_${recipe.id}`);
//       setNote('');
//       Alert.alert('Success', 'Note deleted successfully!');
//     } catch (error) {
//       Alert.alert('Error', 'Failed to delete the note.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         resizeMode="contain"
//         source={recipe.image}
//         style={styles.recipeImage}
//       />
//       <Text style={styles.recipeTitle}>{recipe.name}</Text>
//       <Text style={styles.recipeDescription}>{recipe.description}</Text>
//       {note ? (
//         <>
//           <Text style={styles.note}>Note: {note}</Text>
//           <Button title="Edit Note" onPress={handleEditNote} />
//           <Button title="Delete Note" onPress={handleDeleteNote} />
//         </>
//       ) : (
//         <Button title="Add Note" onPress={() => setModalVisible(true)} />
//       )}
//       <ModalComponent
//         isVisible={modalVisible}
//         onClose={() => setModalVisible(false)}
//         onSubmit={handleSaveNote}
//         initialValue={editingNote ? note : ''}
//         editing={editingNote}
//       />
//     </View>
//   );
// };

// export default RecipeDetails;



import React, {useState, useEffect} from 'react';
import {View, Text, Image, Button, Alert, StyleSheet, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalComponent from './ModalComponent';
import styles from '../styles/RecipeStyles'; // Ensure this is the correct path
import {globalStyles, colors} from '../styles/globalStyles';

const RecipeDetails = ({route}) => {
  const {recipe} = route.params || {};
  const [modalVisible, setModalVisible] = useState(false);
  const [note, setNote] = useState('');
  const [editingNote, setEditingNote] = useState(false); // State to track whether we're adding or editing a note

  useEffect(() => {
    if (recipe && recipe.id) {
      loadNote();
    }
  }, [recipe?.id]);

  const loadNote = async () => {
    try {
      const storedNote = await AsyncStorage.getItem(`note_${recipe.id}`);
      if (storedNote !== null) {
        setNote(storedNote);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load the note.');
    }
  };

  const handleSaveNote = async newNote => {
    try {
      await AsyncStorage.setItem(`note_${recipe.id}`, newNote);
      setNote(newNote);
      Alert.alert('Success', 'Note saved successfully!');
      setModalVisible(false); // Close modal after saving
    } catch (error) {
      Alert.alert('Error', 'Failed to save the note.');
    }
  };

  const handleEditNote = () => {
    setEditingNote(true);
    setModalVisible(true); // Open the modal for editing
  };

  const handleDeleteNote = async () => {
    try {
      await AsyncStorage.removeItem(`note_${recipe.id}`);
      setNote('');
      Alert.alert('Success', 'Note deleted successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to delete the note.');
    }
  };
  

 
  if (!recipe) {
    return (
      <View style={globalStyles.container}>
        <Text style={styles.titleText}>
          Oops! No recipe data found. 😊 Please go back and click on a view recipe
          detail.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={recipe.image}
        style={styles.recipeImage}
      />
      <Text style={styles.recipeTitle}>{recipe.name}</Text>
      <Text style={styles.recipeDescription}>{recipe.description}</Text>
      {note ? (
        <>
          <Text style={styles.note}>Note: {note}</Text>
          <Button title="Edit Note" onPress={handleEditNote} />
          <Button title="Delete Note" onPress={handleDeleteNote} />
        </>
      ) : (
        <Button title="Add Note" onPress={() => setModalVisible(true)} />
      )}
      <ModalComponent
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleSaveNote}
        initialValue={editingNote ? note : ''}
        editing={editingNote}
      />
    </View>
  );
};

export default RecipeDetails;
