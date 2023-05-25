import incdecReducer from './reducers/index'
import { configureStore } from '@reduxjs/toolkit'

export const configureStore({
    reducer : {

        
        number : incdecReducer,
    }
})