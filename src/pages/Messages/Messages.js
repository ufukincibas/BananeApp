import React, { useState } from "react";
import { Text , View } from "react-native";

import styles from "./Messages.styles"

import FloatingButton from "../../components/FloatingButton";
import ContentInputModal from "../../components/modal/ContentInputModal";

function Messages(){
    const [inputModalVisible , setInputModalVisible] = useState(false);

 
    function handleInputToggle(){
        setInputModalVisible(!inputModalVisible)
    }

    function handleSendContent({content}){
        //burada content aldıgım diger sayfadan bir text geliyor o
    }

    return(
<View style={styles.container}>
    <FloatingButton icon = "plus"/>
    <ContentInputModal visible={inputModalVisible} 
    onClose={handleInputToggle}
    onSend={handleSendContent}/>
</View>
)
}

export default Messages;