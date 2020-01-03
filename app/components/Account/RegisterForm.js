import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from 'react-native-elements'
import { validateEmail } from '../../utils/Validation';
import * as firebase from "firebase"; 

export  function RegisterForm(props) {
    const { toastRef } = props;
    const [hidePassword, setHidePassword] = useState(true)
    const [hideRepeadPassword, setHideRepeadPassword] = useState(true)
    const [email, setEmail,]= useState("");
    const [password, setPassword]= useState("");
    const [repeatPassword, setRepeatPassword]= useState("");

    const register = async () => {

        if (!email || !password || !repeatPassword) {
           toastRef.current.show("Todos los campos son obligatorios");
        } else {
            if (!validateEmail (email)) {
                toastRef.current.show("El email no es correcto.");

            } else {
                if(password !== repeatPassword) {
                    toastRef.current.show("Las contraseñas no son iguales");
                } else {
                    await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        toastRef.current.show("Usuario creado correctamente");
                    })
                    .catch(() => {
                        toastRef.current.show("Error al crear la cuenta, intentelo mas tarde");
                    });
                }

            }
        }
        

    };

  return(
      <View style={StyleSheet.formContainer}>
            
            <Input
            placeholder="Correo electronico"
            containerStyle={styles.inputForm}
            onChange={e => setEmail(e.nativeEvent.text)}
            rightIcon={
                <Icon
                    type="material-community"
                    name="at"
                    iconStyle={StyleSheet.iconRight}
                />
            }
            />

              <Input 
               placeholder="Contraseña"
               password={true}
               secureTextEntry={hidePassword}
               containerStyle={styles.inputForm}
               onChange={e => setPassword(e.nativeEvent.text)}
               rightIcon= {
                <Icon
                    type="material-community"
                    name={hidePassword ? "eye-outline" : "eye-off-outline"}
                    iconStyle={StyleSheet.iconRight}
                    onPress={() => setHidePassword(!hidePassword)}
                />
             }
             />
                 <Input 
             placeholder="Repetir Contraseña"
             password={true}
             secureTextEntry={hideRepeadPassword}
             containerStyle={styles.inputForm}
             onChange={e => setRepeatPassword(e.nativeEvent.text)}
             rightIcon= {
                <Icon
                    type="material-community"
                    name={hideRepeadPassword ? "eye-outline" : "eye-off-outline"}
                    iconStyle={StyleSheet.iconRight}
                    onPress={() => setHideRepeadPassword(!hideRepeadPassword)}
                
                />
            }
             />

             <Button
                title="Unirse"
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={register}
             />   

      </View>
  )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 20,

    },
    inputForm: {
        width: "100%",
        marginTop: 20
    },
    iconRight: {
        color: "#c1c1c1"
    }, 
    btnContainerRegister: {
        marginTop: 20,
        width: "95%",
        marginLeft: 10
    },
    btnRegister: {
        backgroundColor: "#00a680"
    }
});