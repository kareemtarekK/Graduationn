/* eslint-disable no-unused-vars */
import React from "react"
import { useState } from "react"
import axios from 'axios'

function Login(){
    const [post, setPost] = useState({
        title:'',
        body:''
    })
    const handelInput =(event) =>{
      setPost({...post, [event.target.name]: event.target.event})
    }
    function handleSubmit(event){
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'My Title',
            body: 'This is a test post',
            userId: 1
        })
        .then(response => {
            console.log('Success:', response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
    }

        return (
            <div style={{width:'fit-content',
              margin:'auto', position:'absolute', top:'30%', left:'40%',}}>
        
            <div className="w-50 text-center" style={{display:'flex', flexDirection:'column'}}>
        
              <form onSubmit={handleSubmit} style={{flexDirection:"column" }} >
                Title:<input  type="text" onChange={handelInput} name="title"/> <br />
                post:<input type="text" onChange={handelInput} name="post"/> <br />
        
                <button className="btn btn-primary" style={{marginLeft:'2rem'}}>Submit</button>
              </form>
            </div>
        
            </div>
            )
        }
    
    
    export default Login