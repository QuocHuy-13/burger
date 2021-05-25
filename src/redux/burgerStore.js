import {createStore} from 'redux';
import {burgerReducer} from "./burgerReducer";

export let store = createStore(burgerReducer);