import { StyleSheet } from "react-native";

const base_style =  StyleSheet.create({
    button: {
      height: 48, // Butonun yüksekliği.
      marginBottom: 16,
      justifyContent: "center", // İçeriği dikeyde ortalar.
      alignItems: "center", // İçeriği yatayda ortalar.
      borderRadius: 8, // Köşeleri yuvarlar.
      paddingHorizontal: 16, // İç yatay boşluk.
    },
    buttonText: {
      fontSize: 16, // Metin boyutu.
      fontWeight: "bold", // Metin kalın.
    },
    buttonDisabled: {
      backgroundColor: "#ccc", // Devre dışı butonun arka planı gri.
    },
  })

export default {
    Primary : StyleSheet.create({
        ...base_style,  //primary e hepsini yolla
        button: {
            ...base_style.button, //base_style daki buttonu çıkart ve bunu ekle
          backgroundColor: "#4CAF50", // Butonun arka plan rengi (yeşil tonları).
        },

        buttonText: {
            ...base_style.buttonText,
          color: "#fff", // Buton metni beyaz.
        },
       
      }),

      Secondary : StyleSheet.create({
        ...base_style , 
        button: {
            ...base_style.button ,
          backgroundColor: "white", 
          borderColor: "#4CAF50",
          borderWidth: 1 ,
        },
        buttonText: {
            ...base_style.buttonText,
          color: "#4CAF50", // (yeşil tonları).
        },

      })
}
