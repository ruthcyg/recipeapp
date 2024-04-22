// src/components/ModalComponent.jsx
import React, {useState} from 'react';
import {Modal, View, Text, Button, TextInput} from 'react-native';
import {globalStyles, colors} from '../styles/globalStyles'; // Import global styles

const ModalComponent = ({isVisible, onClose, onSubmit, recipeName}) => {
  const [note, setNote] = useState('');

  const handleSave = () => {
    onSubmit(note);
    onClose(); // Close the modal after saving
    setNote(''); // Reset note input after closing
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={globalStyles.centeredView}>
        <View style={globalStyles.modalView}>
          <Text style={globalStyles.modalText}>
            Add a note for {recipeName}:
          </Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={setNote}
            value={note}
            placeholder="Enter your note here"
            multiline
            numberOfLines={4}
          />
          <Button
            title="Save Note"
            onPress={handleSave}
            color={colors.button}
          />
          <Button title="Cancel" onPress={onClose} color="red" />
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
