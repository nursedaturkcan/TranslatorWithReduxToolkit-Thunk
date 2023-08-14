# TranslatorWithReduxToolkit-Thunk
This project consists of a text translation application.

Main Page (MainPage):


Users can use two separate dropdown menus (Select) to choose source and target languages.
A text area (textarea) is provided for entering the text to be translated.
The "Translate" button triggers the translation process and performs the relevant action through the Redux store.
The "Swap" button exchanges the source and target languages and clears the text area content.


Redux:

Redux is used for managing the application state.
A slice named translateSlice is created. This slice encompasses language data, translation results, and relevant state information.
Two asynchronous actions, getLanguages and getAnswer, are generated. The former aims to fetch available languages, while the latter focuses on performing text translation.
Data like language options and translation results are stored in the Redux store.
Redux Store Configuration:

The Redux store configuration is established using the configureStore function. The translateReducer is utilized in this configuration.
Action Creators:

Two asynchronous action creators, getLanguages and getAnswer, are formed. These utilize the asynchronous handling feature createAsyncThunk from Redux Toolkit.
getLanguages targets fetching language data.
getAnswer aims to translate text using source language, target language, and text input.
Redux Slice:

A slice named translateSlice is created. This slice encapsulates the state maintained in the Redux store and relevant functions.
Actions related to fetching language options and translation results are managed within the extraReducers section.
A synchronous function, clearAnswer, is included to reset the translation result.
The project aims to build a simple text translation application using React and Redux. Users can choose source and target languages, input text, and immediately see the translation results displayed on the right side.
Preview: 

https://github.com/nursedaturkcan/TranslatorWithReduxToolkit-Thunk/assets/129687664/0a4d6af3-9ed4-496e-9e86-71cc5187e882

