import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import firebase from 'firebase'
require('firebase/auth')

class LoginForm extends Component {
    state = { email: '', password:'', error:'', loading:false };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({error:'', loading:true});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
        //promise is created here
        // a promise in javascript is a contruct for handling
        // some amount of asynchronous code
    }

    onLoginSuccess() {
        this.setState({
            email:'',
            password:'',
            loading: false,
            error:''
        });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed', loading:false
        });
    }
    
    renderButton() {
        if(this.state.loading){ //defaults at true
            return <Spinner size ="small"/>;
        } //by default returns button 
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login 
            </Button>
        );
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    // placeholder="email" optional
                    label="Email"
                    value={this.state.email}
                    onChangeText={email=>this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                    //placeholder="password" optional
                    label="Password"
                    secureTextEntry //same as secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password=>this.setState({ password })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm