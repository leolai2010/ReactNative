import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetails';

class AlbumList extends Component {
    state = { albums:[] }; //initializing the state 
    componentWillMount() { //much like onInit!
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data })); //setState updates the components from the request
    }
    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album}/>
        );
    } //map is an array helper that will iterate through the album data
    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    };
}

export default AlbumList;

//Functional vs Class Component
//Functional -> 
// Used for presenting static data 
// Can't handle fetching data 
// Example -> 
// const Header = () => {
//     return <Text>Hi There!</Text>
// }
//Class -> 
// Used for dynamic sources of data 
// handles any data that might change
// data fetching, user events, etc
// knows when it gets rerendered to the device
//Example ->
// class Header extends Component {
//     render() {
//         return <Text>Hi There!</Text>
//     }
// }

//Rules of State 
// A plain javascript object used to reocrd and respond to user-triggered events
// Update component call 'this.setState'
// Only change state with 'setState' don't use this.state = 'xxx'