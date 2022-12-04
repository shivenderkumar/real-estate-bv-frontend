import React, { useEffect, useState } from 'react';
import { login, validateToken } from './api-utils/Api';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ParentRouteComp from './pages/ParentRoutesComp';

function App() {
  const [page, setPage] = useState("");

  useEffect(() => {
    let token = localStorage.getItem("MYJWT");
    console.log("MYJWT before validation: ", token);

    try {
      validateToken(token).then(res => {
        if(res == "login"){
          setPage("login")
        }
        else if(res == "home"){
          setPage("home")
        }
      });
    } catch (err) {
      console.log("error : ", err);
    }
  }, [])


  useEffect(()=>{
    let token = localStorage.getItem("MYJWT");
    console.log("MYJWT after validation : ", token+" cuurent page:",page);
  },[page])

  return (
    <div className="app-container">
      {
        (page=="")? <div>Loading...</div> : <BrowserRouter><ParentRouteComp page={page}/></BrowserRouter>
      }
    </div>
  );
}

export default App;
