import { useEffect, useState } from "react"
import { GetGifs } from "../helpers/GetGifs";


export const useFetchGifs = (category) => {
    
    const [state, setstate] = useState({

        data:[],
        loading:true
    });

    useEffect(()=>{
        
        GetGifs(category)
            .then(imgs=>{

                setTimeout(()=>{
                    setstate({
                        data: imgs,
                        loading:false
                    })
                },2000)
                
            })
    }, [category])

    return state;
}
