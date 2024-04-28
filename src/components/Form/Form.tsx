import React from "react";
interface FormProps{
    name?:string;
    children?:React.ReactNode
}

const Form:React.FC<FormProps>=(props)=>{
    const {name,children}=props;
    return (
        <form name={name}>
            {children}
        </form>
    )
}
export default Form