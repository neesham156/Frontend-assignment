import { createStore } from 'redux';

const initialState = {

  email: 'john.smith@gmail.com',
  password:'john@123',
token:''

};

const reducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
      case 'SET_TOKEN':
        return { ...state, token: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer);