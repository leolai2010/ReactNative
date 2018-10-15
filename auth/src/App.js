import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app'; //this imports the latest version 5.0.3
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "Yea Eat It",
            authDomain: "authentication-4fe1b.firebaseapp.com",
            databaseURL: "https://authentication-4fe1b.firebaseio.com",
            projectId: "authentication-4fe1b",
            storageBucket: "authentication-4fe1b.appspot.com",
            messagingSenderId: "90122842912"
        });
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent(){
        switch(this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button 
                        onPress={()=>firebase.auth().signOut()}>
                        Log Out</Button>
                    </CardSection>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size='large'/>;
        }
        // if(this.state.loggedIn){
        //     return(
        //         <Button>
        //             Log Out
        //         </Button>
        //     );
        // }
        // return <LoginForm/>;
    };

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        )
    }
}

export default App;
