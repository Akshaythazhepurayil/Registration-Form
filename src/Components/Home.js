
import React,{useEffect,useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [loginData, setLoginData] = useState([]);


  const history = useNavigate();

  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const birthday = () => {
      const getUser = localStorage.getItem("user-login");
      if (getUser && getUser.length) {
          const user = JSON.parse(getUser);
       
          setLoginData(user);


          const userBirth = loginData.map((el, k) => {
              return el.date === todayDate
          });

          if (userBirth) {
              setTimeout(() => {
                  console.log("ok");
                  handleShow();
              }, 3000)
          }
      }
  }

  const userLogout = ()=>{
      localStorage.removeItem("user-login")
      history("/");
  }

  useEffect(() => {
      birthday();
  }, [])
  
  return (
   
      <>
          {
              loginData.length === 0 ? "error" :
                  <>
                      <h1 className='m-3'>details page</h1>
                      <h1>{loginData[0].name}</h1>
                      <Button className='col-lg-1 m-3' onClick={userLogout}>LogOut</Button>

              {
                  loginData[0].date === todayDate ? 
                  <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                              <Modal.Title>{loginData[0].name} </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>{loginData[0].email}</Modal.Body>
                          <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                  Close
                              </Button>
                              <Button variant="primary" onClick={handleClose}>
                                  Save Changes
                              </Button>
                          </Modal.Footer>
                      </Modal>:''
              }   
                   
                  </>
          }
      </>
  )
}

export default Home