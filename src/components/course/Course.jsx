import React, { useState } from 'react'

const Course = () => {
    const [un,setUn] =useState('');
    const [dur,setDur] =useState('');
    const [fee,setFee] =useState('');
    
    const readcoursename =(event) => {
        console.log(event.target.value)
        setUn(event.target.value);
    }

    const readduration =(event) => {
        console.log(event.target.value)
        setDur(event.target.value);
    }
    const readfeeamount =(event) => {
        console.log(event.target.value)
        setFee(event.target.value);
    }
  return (
    <div>
      
      <form>
        COURSENAME:&nbsp;<input type="text" onChange={readcoursename}/><br/>
        DURATION:&nbsp;<input type="password" onChange={readduration} /><br/>
        FEE AMOUNT:&nbsp;<input type="text" onChange={readfeeamount}/><br/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default Course
