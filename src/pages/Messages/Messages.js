import React, { useEffect, useState } from "react";
import { FlatList, Text , View } from "react-native";

import styles from "./Messages.styles"

import database from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth"

import FloatingButton from "../../components/FloatingButton";
import ContentInputModal from "../../components/modal/ContentInputModal";
import ParseContentData from "../../utils/parseContentData";
import MessageCard from "../../Card/MessageCard";

function Messages(){
    const [inputModalVisible , setInputModalVisible] = useState(false);
    const [contentList , setContentList] = useState([])

    useEffect( () => {
        database()
        .ref("Messages/")
        .on('value', snapshot => {
            const contentData = snapshot.val();

           
           const parsedData = ParseContentData(contentData || {});
           setContentList(parsedData)
          }); //realtime changes
    } , [])

 
    function handleInputToggle(){
        setInputModalVisible(!inputModalVisible)
        console.log('Modal görünürlük durumu:', !inputModalVisible); // Kontrol için
    }

    function handleSendContent(content){
        handleInputToggle();
        sendContent(content); // Gönderilen içeriği kontrol et
}

function sendContent(content){

 const userMail = auth().currentUser.email

    const contentObje = {
       text : content ,
       username : userMail.split("@")[0]  ,     //@ ten oncesini gonder
       date : (new Date()).toISOString(),
       dislike : 0
    }
    database().ref("Messages/").push(contentObje) //messages ın altına git push islemi gerceklestir database e yolladı
}

function handleBanane (item) {
    database()
        .ref(`Messages/${item.id}/`)
        .update({dislike: item.dislike + 1});
}

const renderContent = ({item}) => (  <MessageCard message={item} onBanane={() => handleBanane(item)} />)

    return(
<View style={styles.container}>

        <FlatList 
        data={contentList}
        renderItem={renderContent}
        />

    <FloatingButton iconName='chat-plus-outline' onPress={handleInputToggle}/>
    <ContentInputModal visible={inputModalVisible} 
    onClose={handleInputToggle}
    onSend={handleSendContent}/>
</View>
)
}

export default Messages;