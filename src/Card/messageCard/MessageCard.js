import React from "react";
import {View , Button , Text} from "react-native"
import styles from "./MessageCard.styles"

import { formatDistance, parseISO } from "date-fns";
import { tr } from "date-fns/locale";



function MessageCard({message}){
    const formattedDate = formatDistance(parseISO(message.date), new Date(), {
        addSuffix: true,
        locale: tr
    })
    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.user}>{message.username}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
            <Text style={styles.title}>{message.text}</Text>
        </View>
    )
}

export default MessageCard;