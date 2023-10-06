import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [un,setUn] =useState('');
    const [pwd,setPwd] =useState('');
    const [error,setError] =useState(false);
    
    const readusername =(event) => {
        event.preventDefault();
        console.log(event.target.value)
        setUn(event.target.value);
    }

    const readpassword =(event) => {
        event.preventDefault();
        console.log(event.target.value)
        setPwd(event.target.value);
    }
    const checkfilldata =(event) =>{
        event.preventDefault();
        if(un.trim ()===''|| pwd ==='')
        {
            setError(true);
            return;

        }
        
    }
  return (
    <div>
      <h1>SIGN-IN</h1>
      <form>
        USER NAME<input type="text" onChange={readusername}/><br/>
        PASSWORD<input type="password" onChange={readpassword}/><br/>
        <button type="submit" onClick={checkfilldata}>LOG IN</button>
      </form>
      {error && 'Error occured'}
    </div>
  )
}

export default Login
