import React from 'react'
import './Transferdata.css'
const Transferdata = (props) => {
  return (
    <div>
      <h1 className='aa'>welcome</h1>
      Username:&nbsp;
      
        {
            props.username
        
        }
        <br></br>
        Password:&nbsp;
        {
            props.password
        }
      <br></br>
      Usertype:&nbsp;
      {
        props.usertype
      }

    </div>
  )
}

export default Transferdata
