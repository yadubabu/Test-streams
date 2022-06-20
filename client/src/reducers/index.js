import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';
import {authReducers} from './authReducers';
import streamReducer from "./streamReducer";

export default combineReducers({
    
    auth:authReducers.id,
    form:formReducer,
    streams:streamReducer
});