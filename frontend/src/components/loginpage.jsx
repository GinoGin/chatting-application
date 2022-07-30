import React,{ useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper,Button } from '@mui/material';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();

    const paperStyle={
        padding:'50px 20px', width:600, margin:'20px auto'
    }
      const[toggle,setToggle] = useState(false);
      const[idd,setId]=useState();
        const [pass,setPass]=useState();

        const regHandle=()=>{
            navigate("/register")
        }

        useEffect(()=>{
            if(localStorage.getItem('auth')){
              navigate('/')
            }
        },[toggle])
    
        const handleClick=(e)=>{
         
            e.preventDefault()
            axios.post("http://localhost:8080/person/login",{
              "personId":idd,
              "password":pass
            }).then((res)=>{
    
              setToggle(res.data)
              console.log(res.data)
              if(res.data){
                localStorage.setItem('auth',true)
                
              }
            })
            .catch((err)=>{
              console.log(err);
            });
        }
        

  return (
    <div>
      <Container>
          <Paper elevation={3} style={paperStyle}>
              <h1>Login</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Id" variant="outlined" fullWidth
      value={idd} onChange={(e)=>setId(e.target.value)}
      />
     
      <TextField id="outlined-basic" label="password" variant="outlined" fullWidth
      value={pass} onChange={(e)=>setPass(e.target.value)}
      />
    </Box>
    <Button variant="contained" onClick={handleClick}>submit</Button>
      <br/>
   <br/>
    <Button variant="contained" onClick={regHandle}>Register</Button>

    </Paper>
   
   

    </Container>
    </div> 
  )
}

export default Login
