import React from 'react'
import "./index.css";
export default function Index(props:any) {
  return (
    <div className='outer-container'>
        {props.color?<div className="container" style={{backgroundColor:props.color}}>
        {props.children}
        </div>:<div className="container">
        {props.children}
        </div>}
        
    </div>
  )
}
