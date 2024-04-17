import { useState,useEffect, useRef } from "react";
function useThrottle(value:any,delay:number){
    const [throttleValue,setThrottleValue]=useState(value)
    let timer=useRef(Date.now())
    useEffect(()=>{
        if((Date.now()-timer.current)>=delay){
            setThrottleValue(value)
        }
    },[value,delay])
    return throttleValue;
}
export default useThrottle