import Headers from "./components/Headers.jsx";
import { Route, Routes } from "react-router-dom"
// ?===pages==
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Table from "./pages/Table.jsx";

function App (){
  return (
   <div className="app">
     <Headers/>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/register" element= {<Register/>}/>
      <Route path="/table" element= {<Table/>}/>
    </Routes>
   </div>
    
  )
}
export default App;