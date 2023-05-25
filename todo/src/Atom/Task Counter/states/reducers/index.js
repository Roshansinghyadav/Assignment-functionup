import{createSlice} from '@reduxjs/toolkit';

export const incdecSlice = createSlice({
    name : " incdec",
    initialState: 10,
    reducers : {
        Inc : (state , action)=>{
            return state;
        },
        Dec : (state ,action)=>{
            return state;
        }
    }
})
export const {} = incdecSlice.action;
export default incdecSlice.reducer;