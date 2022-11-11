import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loginData, setLoginData] = useState([]);
  console.log(loginData);

  var todayDate = new Date().toISOString().slice(0, 10);
  console.log(todayDate);

  const userDetails = () => {
    const getUser = localStorage.getItem("user-login");
    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      setLoginData(user);

      const useBirth = loginData.map((el, k) => {
        return el.date === todayDate;
      });
      if (useBirth) {
        setTimeout(() => {
            handleShow ()
        }, 3000);
      }
    }
  };

  useEffect(() => {
    userDetails();
  }, []);

  return (
    <>
      {loginData.length === 0 ? "error": 
        <>
          <h1>Logged Success fully</h1>
          <h1>{loginData[0].name}</h1>

          {
            loginData[0].Date === todayDate ?
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{loginData[0].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              User Details
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal> :''
          }
          
        </>
      }
    </>
  );
};

export default Home;
