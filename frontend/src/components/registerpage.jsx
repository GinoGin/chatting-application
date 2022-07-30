import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper,Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const paperStyle={
        padding:'50px 20px', width:600, margin:'20px auto'
    }
        const[toggle,setToggle]=useState(false);
      const[idd,setId]=useState();
        const [names,setName] = useState();
        const [pass,setPass]=useState();

        useEffect(()=>{
          if(localStorage.getItem('auth')){
            navigate('/')
          }
        },[toggle])

        const logHandle=()=>{
          navigate("/login")
      }
    
        const handleClick=(e)=>{
            e.preventDefault()
            axios.post("http://localhost:8080/person/register",{
              "personId":idd,
              "userName":names,
              "password":pass
            }).then((res)=>{
              if(res.data) localStorage.setItem('auth',true)
              setToggle(res.data)
              console.log(res.data)
            })
            .catch((err)=>{
              console.log(err);
            });
           
        }

  return (
    <div>
      <div>
      <Container>
          <Paper elevation={3} style={paperStyle}>
              <h1>Add Student</h1>
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
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth
      value={names} onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="password" variant="outlined" fullWidth
      value={pass} onChange={(e)=>setPass(e.target.value)}
      />
    </Box>
    <Button variant="contained" onClick={handleClick}>submit</Button>
    <br /><br />
    <Button variant="contained" onClick={logHandle}>Login</Button>


    </Paper>

    

    </Container>
    </div>
    </div>
  )
}

export default Register
