import React from 'react'

function Alert(props) {
  return (
    <>
    <div className="alert alert-primary" role="alert">
    This is a primary alert—check it out!
  </div>
  <div className="alert alert-secondary" role="alert">
    This is a secondary alert—check it out!
  </div>
  <div className="alert alert-success" role="alert">
    This is a success alert—check it out!
  </div>
  </>
  )
}

export default Alert