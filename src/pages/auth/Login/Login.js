import React from "react";
import {View , Text} from "react-native"

import styles from "./Login.styles"
import Input from "../../../components/Input";
import Button from "../../../components/Button";

function Login(){
    return(
        <View>
            <Text>Login Page!</Text>
            <Input placeholder="E-postanızı Giriniz"/>
            <Input placeholder="Şifrenizi giriniz"/>
            <Button title="Giriş Yap" />
            <Button title="Kayıt ol" theme="Secondary"/>
        </View>
    )
}

export default Login;