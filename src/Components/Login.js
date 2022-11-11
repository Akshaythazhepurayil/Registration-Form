import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from './Sign_img';
import { NavLink } from 'react-router-dom';

const Login = () => {

  const [inpVal,setInpVal] = useState({
    name:'',   
    password:''
})
const [data,setData] = useState([]);
console.log(inpVal)

const getData = (e)=>{
    // console.log(e.target.value)
    
    const {value,name} = e.target;
    //console.log(value,name); 
    
    setInpVal(()=>{
        return {
            ...inpVal,
            [name]:value
        }
    })
}

const addData = (e)=>{
    e.preventDefault();

    const getUserArr = localStorage.getItem('aks');
    console.log(getUserArr )

    const {name,password} = inpVal;
    if(name === ''){
        alert('Name field is required')
    }else if(password.length <3){
        alert('Enter at least 6 numbers ')
    }else{
        
        if(getUserArr && getUserArr.length){
          const userData = JSON.parse(getUserArr);
          const userLogin = userData.filter((el,k)=>{
            return el.name === name && el.password === password
          });
          if(userLogin.length === 0){
            alert('invalid user')
          }else{
            console.log('logged succes fully')
          }
        }
    }
}

  return (
    <>
        <div className="container mt-5">
        <section className="d-flex justify-content-between">
          <div className="left_data p-4" style={{width:'100%'}}>
            <h3 className="text-center col-lg-6 ">Login</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
               
                <Form.Control type="text" onChange={getData} name = 'name' placeholder="Enter Name" />
              
              </Form.Group>
                            
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                
                <Form.Control type="password" onChange={getData} name = 'password' placeholder="Password" />
              
              </Form.Group>

               <Button variant="primary" type="submit" onClick={addData} className="col-lg-6" style={{background:'rgb(67,185,127)'}} >
                Submit
                </Button>
                </Form>
            <p className="mt-3">Did Not Have an Account <span><NavLink to='/'>Register Now</NavLink></span></p>
          </div>

            <Sign_img />
          
        </section>
      </div>
    </>
  )
}

export default Login