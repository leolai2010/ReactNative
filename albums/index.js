/** @format */
//this is a root component!
//Import a library to help create a component
import React from 'react'; //how component behaves 
// import ReactNative from 'react-native'; //how it should behave in mobile devices
//import destructuring
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//Create a component
// const App = () => {
//     return (
//         <Text>Some Text</Text>
//     );
// };
//refactored style 
const App = () => (
    <View>
        <Header headerText={'Albums'}/>
        <AlbumList/>
    </View>
);
//Render it to the device
// only the root component uses AppRegistry!
AppRegistry.registerComponent('albums', ()=> App);

