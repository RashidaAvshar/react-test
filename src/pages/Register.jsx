import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import { BASE_URL } from '../utilis/constans';
import swal from 'sweetalert';


const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    id: Date.now()
  })

  const onHandleChange = (e) =>{
    setUserData({...userData, [e.target.name]: e.target.value})
  }
  
  const onHandleClick = ()=>{
    axios.post(`${BASE_URL}/create-data`, userData).then((res)=>{
      if(res.status === 201){
        swal("Good job!", "You clicked the button!", "success");
      }
    })
    {
      document.querySelector("#name").value="";
      document.querySelector("#surname").value="";
      document.querySelector("#username").value="";
      document.querySelector("#password").value="";
    }
  }
  
  const {name, surname, username, password} = userData
  return (
    <div className='container'>
        <div className="register-box">
            <div className="register">
              <h1>REGISTER</h1>
            <TextField id="name" label="Name" variant="standard" name="name" onChange={onHandleChange} />
            <TextField id="surname" label="Surname" variant="standard"name="surname" onChange={onHandleChange} />
            <TextField id="username" label="Username" variant="standard" name="username" onChange={onHandleChange}/>
            <TextField id="password" label="Password" variant="standard" name="password" type="password" onChange={onHandleChange}/>
            <Button variant="contained" color="success" onClick={onHandleClick} 
            disabled={name==""|| surname=="" || username=="" || password.length <= 8 ? true: false} >register</Button>
            </div>
        </div>      
    </div>

  )
}

export default Register;
