import React from 'react'
import "./index.css";
export default function Index(props:any) {
  return (
    <div className='list-tile'>
        <div className='titles'>
          <div className='heading'>
            {props.heading}
          </div>
          <div className='subheading'>
            {props.subheading}
          </div>
        </div>
        <div className='tail'>
          {props.tail}
        </div>
    </div>
  )
}
