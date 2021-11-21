import {useEffect, useState} from "react";

const PREFIX= "ac-messages-"

export default function useLocalStorage(key, initialValue) {
    const prefixedKey= PREFIX + key
    console.log(key)
    const [value, setValue] = useState(()=>{
        console.log(localStorage)
        const jsonValue = localStorage.getItem(prefixedKey)
        console.log(jsonValue)
        if(jsonValue !== null) return JSON.parse(jsonValue);
        if(typeof initialValue==='function'){
            return initialValue()
        }else{
            return initialValue
        }        
    })

    useEffect(()=>{
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}


