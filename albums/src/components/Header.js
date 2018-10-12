//Import libraries for making a component
import React from 'react';
// import ReactNative from 'react-native';
//destructured import
import { Text, View } from 'react-native';
//Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles; 
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    ) 
};

const styles = {
    viewStyle:{
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 5,
        position: 'relative'
    },
    textStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'
    }

};
//Make the component available to other parts of the app
//export statement
export default Header;

//extra note
// justifyContent -> moves things vertically 
// alignItems -> moves things horizontally
//     'flex-end' -> bottom/right
//     'center' -> middle
//     'flex-start' -> top/left