import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./FloatingButton.styles";

const FloatingButton = ({ iconName, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name={iconName} style={styles.icon} />
        </TouchableOpacity>
    )
}

export default FloatingButton