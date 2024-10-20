import React from "react";
import { View, TextInput, Text } from "react-native";
import styles from "./Input.styles"; // Stilleri ayrı dosyadan içe aktarıyoruz.

const Input = ({ 
  label, // Input üstünde gösterilecek metin (isteğe bağlı).
  placeholder, // Kullanıcıya rehberlik eden geçici yazı.
  value, // Input alanının mevcut değeri.
  onChangeText, // Değer değiştiğinde çağrılan fonksiyon.
  secureTextEntry, // Şifre girilecekse metni gizlemek için.
  keyboardType = "default", // Klavye türünü belirlemek için.
}) => {
  return (
    <View style={styles.container}>
      {/* Label varsa göster */}
      {label && <Text style={styles.label}>{label}</Text>} 
      {/* Giriş alanı */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor="#888" // Placeholder metni rengi.
      />
    </View>
  );
};

export default Input;