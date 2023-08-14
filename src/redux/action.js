import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../helpers/constants";


// dillerin verisini çekme
 export const getLanguages=createAsyncThunk("translate/getLanguages",async ()=>{
    // asenkron işlemler
const res = await axios.get("https://text-translator2.p.rapidapi.com/getLanguages",options)
const languages=res.data.data.languages;
/* Select kütüphanesini  kullanabilmek için Diziyi dönüp bütün code key'lerini value'ya name key'lerini label'a çevirme  */

const newLanguages=languages.map((lang)=>({
    value:lang.code,

    label:lang.name,
}));

    // store'a gönderilecek değeri return etmek
    return newLanguages;
   
})

// Çeviri isteği atma

export const getAnswer=createAsyncThunk("translate/getAnswer",
async(props)=>{
    // istek için gerekli ayarlar
const encodedParams = new URLSearchParams();
encodedParams.set('source_language', props.sourceLang.value);
encodedParams.set('target_language', props.targetLAng.value);
encodedParams.set('text', props.text);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    // 'X-RapidAPI-Key': Api Key,
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: encodedParams,
};
   const res=  await axios.request(options);
//    Çevirilmiş yazıya erişme
   const answer=res.data.data.translatedText;

return answer;
})