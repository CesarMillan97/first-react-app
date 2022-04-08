import React from 'react'
import './Modal.css'

export default function Modal(props) {
  return (
    <div className="modal-backdrop">
       <div className='modal'>
         {props.children}
         <button onClick={ props.handleClose }>close</button>
       </div>
    </div>
  )
}
