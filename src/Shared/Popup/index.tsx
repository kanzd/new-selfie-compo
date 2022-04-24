import React from 'react'
import "./index.css";
export default function Index(props:any) {
  return (<>
  {props.open?
    (
        <>
        <div className="cover">
       
       </div>
        <div className="popup">
           {props.children}
        </div>
        </>
    
      ):(<div></div>)}
      
      </>
      
    
  )
}
