import React, { useState } from "react";
import { View , TextInput } from "react-native";

import styles from "./ContentInputModal.styles"
import Button from "../../Button";
import Modal from "react-native-modal";

function ContentInputModal({visible ,onClose, onSend}) {
    const [text , setText] = useState(null);

function handleSend(){
    if (!text) {
        return;
    } 
    onSend(text);
    setText(null);
}
    return(
        <Modal  style={styles.modal}
         isVisible={visible} 
        onSwipeComplete={onClose} //asagı suruklemeyi bıraktıgında
        onBackdropPress={onClose}//arka plana tıkladıgında 
        swipeDirection="down"
        >
        <View style={styles.container}>
            <View style={styles.input_container}>
            <TextInput 
            placeholder="Darla Hadi Milleti" 
            onChangeText={setText}
            multiline //sona gelince asagı ınmesi
            />
            </View>
            <Button title="Gönder" onPress={ handleSend}
                // onsend text i gonderiyor diger tarafa
                />
        </View>
        </Modal>
    )
}

export default ContentInputModal;