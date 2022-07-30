import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Chatpanel(props) {
  return (
    <div>
    <div className=' border-bottom p-2 d-flex flex-row  navbar-nav list-group-item list-group-item-action' style={{cursor:'pointer'}} >
      <img src="https://image.shutterstock.com/image-vector/blank-avatar-photo-icon-design-260nw-1682415103.jpg" alt="avatar"
            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"></img>
      
      <h1 className=' ' >{props.props.name}</h1>
    </div>
    </div>
  )
}

export default Chatpanel
