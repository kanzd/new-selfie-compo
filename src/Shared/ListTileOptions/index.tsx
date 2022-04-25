import React from 'react'
import "./index.css";
import { icons } from "../../const";
export default function Index() {
  return (
   <div className='list-tile-option'>
       <div className='first-tile'>
       TIPS FOR A GREAT SELFIE
       </div>
       <div className="cover-list-tile">
       <div className="cover-list-tile-do">
         <div className="list-option-title">
           Do's
         </div>
         <div className="icons-do">
           <div>
             <img src={icons.first} height={60}></img>
             <div className='icon-text'>Clear Face</div>
           </div>
           <div>
           <img src={icons.second} height={60}></img>
           <div className='icon-text'>Good lighting</div>
           </div>
         </div>
       </div>
       <div className="cover-list-tile-donts">
         <div className="list-option-title">
           Dont's
         </div>
         <div className="icons-do">
           <div>
             <img src={icons.thrid} height={60}></img>
             <div className='icon-text'>No masks</div>
           </div>
           <div>
           <img src={icons.fourth} height={60}></img>
           <div className='icon-text'>No glasses</div>
           </div>
           <div>
           <img src={icons.fiveth} height={60}></img>
           <div className='icon-text'>No headgear</div>
           </div>
           <div>
           
           </div>
         </div>
       </div>
       </div>
   </div>
  )
}
