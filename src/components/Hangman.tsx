import React from 'react'
import "../css/Hangman.css"
const HEAD:JSX.Element = (<div style={{
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    border: "5px black solid",
    position: "absolute",
    top: "25px",
    right: "-25px"
}} />)

const BODY:JSX.Element = (<div style={{
    width: "7px",
    height: "110px",
    
    backgroundColor:"black",
    position: "absolute",
    top: "73px",
    right: "0px"
}} />)


const Right_Arm:JSX.Element = (<div style={{
    width: "100px",
    height: "5px",
    
    backgroundColor:"black",
    position: "absolute",
    top: "125px",
    right: "-100px",
    transformOrigin:"left bottom",
    transform: "rotate(-45deg)"
}} />)


const Left_Arm:JSX.Element = (<div style={{
    width: "100px",
    height: "5px",
    
    backgroundColor:"black",
    position: "absolute",
    top: "125px",
    right: "0",
    transformOrigin:"right bottom",
    transform: "rotate(45deg)"
}} />)


const Left_leg:JSX.Element = (<div style={{
    width: "100px",
    height: "5px",
    
    backgroundColor:"black",
    position: "absolute",
    top: "178px",
    right: "0",
    transformOrigin:"right bottom",
    transform: "rotate(-45deg)"
}} />)

const Right_leg:JSX.Element = (<div style={{
    width: "100px",
    height: "5px",
    
    backgroundColor:"black",
    position: "absolute",
    top: "178px",
    right: "0",
    transformOrigin:"right bottom",
    transform: "rotate(-135deg)"
}} />)
const BODY_PARTS = [HEAD,BODY,Left_Arm,Right_Arm,Right_leg,Left_leg]
type Hangman={
    number_of_guesses:number
}
function Hangman({number_of_guesses}:Hangman) {
    return (
        <div className='basic-body'>
            {BODY_PARTS.slice(0, number_of_guesses)}
            <div className='hanging-wire-v'></div>
            <div className="hanging-wire-h"></div>
            <div className="body-line"></div>
            <div className="bottom-line"></div>

        </div>
    )
}

export default Hangman
