import React, { useState } from "react";
import {View , Text} from "react-native"
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"

import styles from "./Login.styles"
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const initialFormValues  = {
    userMail : "" ,
    Password : ""
}

function Login({navigation}){
    const [loading , setloading] = useState(false);
    function handleSignUp(){
        return(
            navigation.navigate("SignPage")
        )
    }
        async function handleFormSubmit(formValues){
            try {
                setloading(true);
                await auth().signInWithEmailAndPassword(formValues.userMail , formValues.Password)

                setloading(false);  
            } catch (error) {
                console.log(error)
                setloading(false);
            }
      
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

                <Button  title="Giriş Yap" onPress={handleSubmit} loading={loading}/>
            </>
            )}
         
         </Formik>
            <Button title="Kayıt ol" theme="Secondary" onPress={handleSignUp}/>
        </View>
    )
}

export default Login;