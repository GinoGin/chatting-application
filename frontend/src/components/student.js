import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Chatpanel from './chatpanel';
import Header from './header';
import './student.css'


const MainPage = () => {

  
  //const [clientList,setClientList]  = useState([])
  const clientList =[
    {name : 'ginbo'},
    {name:'snknsfd'},
    {name:'fsdnjnk'},
    {name:'sjkjfsd'},
    {name:'fdsjhk'},
    {name : 'ginbo'},
    {name:'snknsfd'},
    {name:'fsdnjnk'},
    {name:'sjkjfsd'},
    {name : 'ginbo'},
    {name:'snknsfd'},
    {name:'fsdnjnk'}
    
]

  
  useEffect(()=>{
    
    async function fetchClientList(){
      const data = await axios.get('http://localhost:8080/person/chat');
      // setClientList(data.data);
      console.log(data);
    }  
    fetchClientList();

  },[])

  return (
    <div className=''>
      <Header />
    <div className='row '>
       <div className='col-lg-4 sidebar-contacts'  >
         
       
         {
           clientList && clientList.map((e)=>(
             <Chatpanel props={e}/>
           ))
         }
          
      </div>
      <div className='col-lg-8'>
        
      </div>
    </div>
    </div>
  )
}

export default MainPage
