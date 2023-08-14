import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import translateReducer from '../redux/translateSlice';
// react-select kütüphanesi 
import Select from 'react-select'
import { getAnswer, getLanguages } from './../redux/action';

import { clearAnswer } from '../redux/translateSlice';





const MainPage = () => {
    const [text,setText]=useState("");
    const [sourceLang,setSourceLang]=useState({ value:"tr", label:"Turkish"});
    const [targetLAng,setTargetLang]=useState({ value:"en", label:"English"});


    const dispatch = useDispatch();
    const store=useSelector((store)=>store)
    const areaRef=useRef();

    useEffect(() => {
        dispatch(getLanguages())
    }, [])

    // State'ler arasında veri değişimi yapar
    const handleClick=()=>{
        setSourceLang(targetLAng);
        setTargetLang(sourceLang);
        // state'i sıfırlama
        dispatch(clearAnswer());
        // textarea'ya erişip silmek
        areaRef.current.value="";


        
    }

    return (
        <div className='field'>
            <h1>Translater</h1>
            <div className='container'>
                <div className="left">
                   <Select onChange={(e)=>setSourceLang(e)}
                    options={store.languages}
                     value={sourceLang} 
                     isLoading={store.isLoading} 
                     isDisabled={store.isLoading}
                     />
                    <textarea onChange={(e)=>setText(e.target.value)} ref={areaRef} ></textarea>
                </div>
                <button className='change-btn' onClick={handleClick} >Değiştir</button>
                <div className="right">
                   <Select  onChange={(e)=>setTargetLang(e)}
                    options={store.languages}
                     value={targetLAng}
                     isLoading={store.isLoading} 
                     isDisabled={store.isLoading}
                     />
                    <textarea  disabled value={store.answer} ></textarea>

                </div>

            </div>
            <button onClick={()=>dispatch(getAnswer({text,targetLAng,sourceLang}))} >Çevir</button>
        </div>
    )
}

export default MainPage