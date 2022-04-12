import  ReactDOM from 'react-dom'
import React from 'react'
import './Modal.css'

export default function Modal(props) {
  
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
       <div className='modal' style={{ 
         border:"4px solid",
         borderColor: props.isSalesModal ?  "#ff4500" : "#555",
         textAlign:"center"
        }}>
         {props.children}
         <button 
         onClick={ props.handleClose } 
         className={props.isSalesModal ? "sales-btn" : ""}
        >close</button>
       </div>
    </div>
  ), document.body)
}
