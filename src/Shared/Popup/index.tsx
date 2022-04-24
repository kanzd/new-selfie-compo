import React,{useState} from 'react'
import "./index.css";

import Close from "../../Assets/close.png";
export default function Index(props:any) {
  
  
  return (<>
  {props.open?
    (
        <>
        <div className="cover">
       
       </div>
        <div className="popup">
            {props.close? <div className="close-popup" onClick={(e)=>{
              props.onClose();
            }}>
                <img src={Close} height={17}></img>
            </div>:<></>}
           
           {props.children}
        </div>
        </>
    
      ):(<div></div>)}
      
      </>
      
    
  )
}
