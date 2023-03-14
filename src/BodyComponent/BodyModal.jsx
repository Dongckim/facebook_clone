import { useContext, useState } from "react"
import styled from "styled-components"
import { openContext } from "./Body"

const BodyInput = ({children}) => {
    const { open, setOpen} = useContext(openContext)

    return(
        <>
            <STinput onClick={()=>{setOpen(!open)}}>Dongchan Alex Kim님, 무슨 생각을 하고 계신가요?
            {children}
            </STinput> 
        </>
       
    )
}

export default BodyInput

const STinput = styled.div`
    background-color: #f4f4f4;
    color: #6c6c6c;
    border-radius: 30px;
    height: 40px;
    width : 500px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-indent: 0.7em;
    cursor: pointer;
    :hover{
        background-color: #e3e3e3;
    }
    :active{
        background-color: #c0c0c0;
    }
    z-index: 0;
`