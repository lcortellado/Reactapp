import React from "react";
import { View, Text } from "react-native";

export default function Loading(props) {
    const { text } = props;
    return (
        <View>
            <Text>Cargando {text}</Text>
        </View>
    );
}