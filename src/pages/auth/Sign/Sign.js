import React from "react";
import {View , Text} from "react-native"
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import { showMessage, } from "react-native-flash-message";

import styles from "./Sign.styles"
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";


const initialFormValues  = {
    userMail : "" ,
    Password : "" , 
    rePassword : "",
}

function Sign({navigation}){
    function handleLogin(){
        return(
            navigation.goBack()
        )
    }

   async function handleFormSubmit(formValues){
        if(formValues.Password !== formValues.rePassword) {
            showMessage({
                message: "Şifreler Aynı Değil!",
                type: "danger",
              });
              return;
        }

        try {
           await auth().createUserWithEmailAndPassword(formValues.userMail , formValues.Password)
           navigation.navigate("LoginPage")
            showMessage({
                message: "kullanıcı oluşturuldu",    //switch case yapısı ile düzgün hata mesajı gosterdik
                type: "success",
                //şifreler aynı değilse gibi bir yapı için fromik in yup modulu daha mantıklı bu sadece bu örneklik 
              });
              

        } catch (error) {
            showMessage ({
                message: authErrorMessageParser(error.code) , 
                type : "danger"
            })
          
        }
    }
 
    return(
        <View>
            <Text style={styles.header}>Bana Ne?</Text>

            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}> 
          { ({values , handleChange , handleSubmit}) => (
               <>
                <Input 
                onChangeText = {handleChange("userMail")} 
                value={values.userMail} 
                placeholder="E-postanızı Giriniz"
                />
                <Input 
                onChangeText = {handleChange("Password")}
                value={values.Password} 
                placeholder="Şifrenizi giriniz"
                secureTextEntry/>
                  <Input 
                onChangeText = {handleChange("rePassword")}
                value={values.rePassword} 
                placeholder="Şifrenizi Tekrar giriniz"
                secureTextEntry/>

                <Button  title="Kayıt ol" onPress={handleSubmit}/>
            </>
            )}
         
         </Formik>
            <Button title="Giriş Yap" />
            <Button title="Geri" theme="Secondary" onPress={handleLogin}/>
        </View>
    )
}

export default Sign;