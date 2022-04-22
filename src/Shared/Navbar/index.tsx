import React from 'react'
import "./index.css";
export default function Index(props:any) {
  return (
    <div className='nav-bar'>
        {props.children}
       
    </div>
  )
}
