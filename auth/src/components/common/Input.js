import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) =>{
    const { inputStyle, labelStyle, containerStyle } = styles
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                // placeholder={placeholder} optional
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    inputStyle:{
        height: 40,
        width: 200,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5, 
        paddingTop: 8,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 8,
        flex: 1
    },
    containerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'row',
        align: 'center'
    }

};

export { Input };