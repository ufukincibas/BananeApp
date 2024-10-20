import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginBottom: 16, // Input altında boşluk bırakır.
  },
  label: {
    fontSize: 16,
    fontWeight: "bold", // Label metni kalın.
    marginBottom: 8, // Label ile input arasına boşluk bırakır.
  },
  input: {
    height: 48, // Input yüksekliği.
    borderWidth: 1, // Çevresinde kenar çizgisi.
    borderColor: "#ccc", // Kenar çizgisi rengi gri.
    borderRadius: 8, // Köşeleri yuvarlak yapar.
    paddingHorizontal: 12, // İç yatay boşluk.
    fontSize: 16, // Input metni boyutu.
    color: "#333", // Kullanıcının girdiği metnin rengi.
  },
});