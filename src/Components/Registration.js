import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { NavLink, useNavigate } from "react-router-dom";

const Registration = () => {

  const history = useNavigate();

const [inpVal,setInpVal] = useState({
    name:'',
    phone:'',
    email:'',
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

    const {name,phone,email,password} = inpVal;
    if(name === ''){
        alert('Name field is required')
    }else if(phone === ''){
        alert('Phone number is required')
    }else if(email === ''){
        alert('Email number is required')
        }else if (!email.includes('@')){
        alert('Enter valid email')
    }else if(password.length <3){
        alert('Enter at least 6 numbers ')
    }else{
        console.log('data added')
        localStorage.setItem('user-registration',JSON.stringify([...data,inpVal,]));
        history('/login')
    }
}

  return (
    <>
      <div className="container mt-5">
        <section className="d-flex justify-content-between">
          <div className="left_data p-4" style={{width:'100%'}}>
            <h3 className="text-center col-lg-6 ">Register Now</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="text" onChange={getData} name = 'name' placeholder="Name" />
              </Form.Group>
              
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="number" onChange={getData} name = 'phone' placeholder="Phone" />
              
              </Form.Group><Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" onChange={getData} name = 'email' placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password" onChange={getData} name = 'password' placeholder="Password" />
              </Form.Group>

               <Button variant="primary" type="submit" onClick={addData}  className=" col-lg-6" style={{background:'rgb(67,185,127)'}} >
               Submit
                </Button>
            </Form>
            <p className="mt-3">Already Have an Account <span><NavLink to='/login'>Login</NavLink></span></p>
          </div>

            <Sign_img />
          
        </section>
      </div>
    </>
  );
};

export default Registration;
