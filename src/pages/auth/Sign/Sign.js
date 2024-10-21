import React from "react";
import {View , Text} from "react-native"
import { Formik } from "formik";

import styles from "./Sign.styles"
import Input from "../../../components/Input";
import Button from "../../../components/Button";


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

    function handleFormSubmit(formValues){
        console.log(formValues)
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
                placeholder="E-postanızı Giriniz"/>
                <Input 
                onChangeText = {handleChange("Password")}
                value={values.Password} 
                placeholder="Şifrenizi giriniz"/>
                  <Input 
                onChangeText = {handleChange("rePassword")}
                value={values.rePassword} 
                placeholder="Şifrenizi Tekrar giriniz"/>

                <Button  title="Giriş Yap" onPress={handleSubmit}/>
            </>
            )}
         
         </Formik>
            <Button title="Kayıt Ol" />
            <Button title="Geri" theme="Secondary" onPress={handleLogin}/>
        </View>
    )
}

export default Sign;