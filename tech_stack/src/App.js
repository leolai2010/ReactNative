import React from 'react';
import { View } from 'react-native'; //communication glue between react/redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'

//Provider houses the store 
//Provider serves as a communication between action coming into store 
//which in turn the store houses the states

const App = () =>{
    return(
        <Provider store={createStore(reducers)}>
            <View/>
        </Provider>
    );
};

export default App;