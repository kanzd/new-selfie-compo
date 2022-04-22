import React from 'react'
import "./index.css";
export default function Index(props:any) {
  return (
    <div className='outer-container'>
        <div className="container">
        {props.children}
        </div>
    </div>
  )
}
