import React from 'react'
import { useNavigate } from 'react-router-dom'

const User = () => {
  const history = useNavigate();
  return (
    <>
      <div className='container'>
        <div className="error d-flex flex-column justify-content-lg-center align-items-center">
          
          <h4>Welcome</h4>
          <button className='btn btn-primary' onClick={() => history("/")}>LogOut</button>
        </div>

      </div>
    </>
  )
}

export default User