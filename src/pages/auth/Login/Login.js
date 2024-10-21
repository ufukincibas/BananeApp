import React from "react";
import {View , Text} from "react-native"
import { Formik } from "formik";

import styles from "./Login.styles"
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const initialFormValues  = {
    userMail : "" ,
    Password : ""
}

function Login({navigation}){
    function handleSignUp(){
        return(
            navigation.navigate("SignPage")
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

                <Button  title="Giriş Yap" onPress={handleSubmit}/>
            </>
            )}
         
         </Formik>
            <Button title="Kayıt ol" theme="Secondary" onPress={handleSignUp}/>
        </View>
    )
}

export default Login;