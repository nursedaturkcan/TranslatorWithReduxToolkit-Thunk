import { createSlice } from "@reduxjs/toolkit";
import { getLanguages, getAnswer } from "./action";

const initialState = {
    languages: [],
    answer: "",
    isLoading: true,
    isError: false
}

const translateSlice = createSlice({
    name: "translate",
    initialState,
    // asenkron actions
    extraReducers: {
        // Dil verilerini çekmeyi yönetme
        [getLanguages.pending]: (state) => {
            state.isLoading = true;
        },
        [getLanguages.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.languages = action.payload;
        },
        [getLanguages.rejected]: (state, action) => {
            state.isError = "Dilleri çekme işleminde bir hata oluştu."
        },
        // çeviri isteklerini yönetme
        [getAnswer.pending]: (state) => {
            state.isLoading = true;
        },
        [getAnswer.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.answer = action.payload;
        },
        [getAnswer.rejected]: (state) => {
            state.isLoading = false;
            state.isError = "Çevirirken bir hata oluştu";
        }

    },
    // senkron action
    reducers:{
        clearAnswer:(state)=>{
            state.answer="";
        }
    }


})

export const {clearAnswer}= translateSlice.actions;
export default translateSlice.reducer;