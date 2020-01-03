import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

export default function LoginForm() {

    const [hideContraseña, setHideContraseña] = useState(true)
    const login = () => {
        return (
            console.log("usuario logueado")
        )
    
    }
    return (
        <View style={StyleSheet.formContainer}>
            <Input placeholder="Correo electronico" 
                containerStyle={styles.inputForm}
                onChange={() => console.log("Email actualizado")}
                rightIcon={
                    <Icon
                    type="material-community"
                    name="at"
                    iconStyle={styles.iconRight}
                    />
                }
            />

            <Input placeholder="Contraseña" 
              containerStyle={styles.inputForm}
              password={true}
              secureTextEntry={hideContraseña}
              onChange={() => console.log("contrase")}
              rightIcon={
                  <Icon
                      type="material-community"
                      name={hideContraseña ? "eye-outline" : "eye-off-outline"}
                      iconStyle={styles.iconRight}
                      onPress={() => setHideContraseña(!hideContraseña)}
                  />
              }  
            />
            <Button title="Iniciar sesion" 
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
                onPress={login}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    inputForm: {
        width: "100%",
        marginTop: 20,
    },
    iconRight: {
        color: "#c1c1c1"
    },
    btnContainerLogin: {
        marginTop: 20,
        width: "95%"
    },
    btnLogin: {
        backgroundColor: "#00a680"
    }
});