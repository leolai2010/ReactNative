// Action: An plain javascript objects that directs 
//         reducer how to modify its data
// Store -> Redux as a whole
// Reducer: function that returns some amount of Data
// State: Data for our app to use. references reducer


// Action: Turning 'asd' (a string of words) into an array of characters
// example var a = 'asd' + action: split() 

// Reducer: if action == split()
// then a.split()
// so now var a = [a, s, d]

// State: report the new state 
// remember var a = [a, s, d]
// returns [a, s, d]

//In practice
//create an action (has to be object!)
const action = { type: 'split_string', payload:'asd' };
//create a reducer
//two arguement
const reducer = (state=[], action) =>{
	if(action.type === 'split_string'){
    return action.payload.split('');
  }
  return state;
}
//create a store
const store = Redux.createStore(reducer);
//return state 
store.dispatch(action);
store.getState();

// redux allows actions to give us the ability 
//to make predictable changes to the state of our application

//another example 
//create an action (has to be object!)
const action = { type: 'split_string', payload:'asd' };
const action2 = { type: 'add_character', payload:'a'}
//create a reducer
//two arguement
const reducer = (state=[], action) =>{
	if(action.type === 'split_string'){
    return action.payload.split('');
  } else if(action.type === 'add_character'){
  	return [ ...state, action.payload];
  }
  return state;
}
//create a store
const store = Redux.createStore(reducer);
store.dispatch(action);
store.dispatch(action2);
store.getState();