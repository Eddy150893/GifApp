import {useState,useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';
export const useFetchGifs=(category)=>{
    const [state, setstate] = useState({
        data:[],
        loading:true
    })
    //Use efect recibe un callback que es la funciona a ejecutar
    //y un arreglo de dependencias que como su nombre lo indica
    //si esta vacio solo se ejecutara una vez pero si depende de otras
    //variables deberiamos de colocar las variables ahi y 
    //se ejecutara cada vez que cambien dichas variables
    useEffect(()=>{
        getGifs(category)
        .then(imgs=>setstate({
            data:imgs,
            loading:false
        }));
    },[category])
    return state;
}