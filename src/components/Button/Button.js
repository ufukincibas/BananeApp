import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./Button.styles"; // Stilleri ayrı dosyadan içe aktarıyoruz.

const Button = ({ title, onPress, disabled = false , theme = "Primary"}) => {
  //default olarak primary verdik  her seferinde primary yazmana gerek kalmaz sadece secondary kullanacağın yerde yazarsın . !!
  return (
    <TouchableOpacity 
      style={[styles[theme].button
        , disabled ? styles.buttonDisabled : null]} 
      onPress={onPress} 
      disabled={disabled} // Buton devre dışıysa basılamaz.
    >
      <Text style={styles[theme].buttonText}>{title}</Text> 
    </TouchableOpacity>
  );
};

export default Button;
