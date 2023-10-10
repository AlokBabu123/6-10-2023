import React, { useState } from 'react'

const Bookview = () => {
    const [viewd,setViewdata]= useState([]);
    const readbookdata=(event) =>{
    fetch("https://sampledbcs-4e649-default-rtdb.firebaseio.com/book.json").then((response) =>{
    
        return response.json()
}).then((data) => {
    console.log(snapshotToArray(data));
    setViewdata(snapshotToArray(data));
})
}
function snapshotToArray(snapshot){
    const array =[];

    Object.keys(snapshot).forEach((key) => {
        array.push(snapshot[key]);
    });

    return array;
}    
  return (
    <div>
      <button type="view" onClick={readbookdata}>VIEW</button>
      <br/>
      <br/>
      <table border="2">
        <tr>
        <th>Book Name</th>
        <th>Auther</th>
        <th>Publisher</th>
        </tr>
        
        {viewd.map((value,index)=>{
            return (
                <tr key={index}>
                <td>{value.bookname}</td>
                <td>{value.author}</td>
                <td>{value.publisher}</td>
                </tr>
        )
            })}


      </table>
    </div>
  )
}

export default Bookview
