// import Transferdata from "./components/Transferdata";
import Login from "./components/Login/Login";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Course from "./components/course/Course";
import Logindata from "./components/Login/Logindata";
import Book from "./components/Book/Book";
import Bookview from "./components/Book/Bookview";
function App() {
  return (
    <div>
     {/* <Transferdata username="Alok" password="123" usertype="admin"/> */}

{/* <Login/> */}
{/* <Course/> */}
<BrowserRouter>
<Routes>
  <Route path={'/'} element={<Login/>}></Route>
  <Route path={'/Ldata'} element={<Logindata/>}></Route>
  <Route path={'/Cdata'} element={<Course/>}></Route>
  <Route path={'/book'} element={<Book/>}></Route>
  <Route path={"/bookview"} element={<Bookview/>}></Route>
</Routes>
</BrowserRouter>
     
    </div>
  );
}

export default App;
