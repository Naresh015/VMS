import React, { useState } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logonav from './images/logonav.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './style1.css'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaSignInAlt } from 'react-icons/fa';
function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [send,setSend] = useState({
    Vid:"",
    model:"",
    company:"",
    Oid:"",
    date:""
  })

  const handleChange = (e) =>{
    setSend((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))

  }
const postSubmit = (e) =>{
  e.preventDefault()
  axios.post('http://localhost:4000/postdata',{send})
  .then((res)=>setSend(res.data.books))
alert("new vehicle is added!.")
setShow(false)
}
  

  return (
    <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark" id='navbar'>
      <Container>
        <Navbar.Brand href="#home"><img className='img'id='cdimg' style={{height:'70px',width:'70px',borderRadius:'50%'}}
        src={logonav} alt='image'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href='/'><Button variant='outline-info'>Home</Button></Nav.Link>
            <Nav.Link href="#" onClick={handleShow}><Button variant='outline-info'>Add New Vehicle</Button></Nav.Link>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Adding new vehicle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form className='form' >
                        <div className='form-group mb-3'>
                            <label className='form-label'>Vehicle Id:</label>
                            <input type='text' name="Vid" className='form-control' onChange={handleChange} placeholder='enter Id'/>
                        </div>
                        <div className='form-group mb-3'>
                            <label className='form-label'>Model:</label>
                        <input type='text' name="model" className='form-control' onChange={handleChange} placeholder='Vehicle model'/>
                        </div>
                        <div className='form-group mb-3'>
                            <label className='form-label'>company:</label>
                        <input type='email' name='company' className='form-control' onChange={handleChange} placeholder='Company name'/>
                        </div>
                        <div className='form-group mb-3'>
                            <label className='form-label'>Owner Id:</label>
                        <input type='email' name='Oid' className='form-control' onChange={handleChange} placeholder='owner id'/>
                        </div>
                        {/* <div className='form-group'>
                          <input type="button" value="submit" onClick={postSubmit} />
                        </div> */}
                        <div className='form-group mb-3'>
                        <label className='form-label'>Date:</label>
                        <input type='date' name='date' className='form-control'onChange={handleChange} placeholder='Create Password'/>
                        </div>
                        {/* <div className='form-group mb-3'>
                        <label className='form-label'>Status:</label>
                        <select>
                            <option>select one</option>
                            <option>
                                Running
                            </option>
                            <option>Repair</option>
                        </select> */}
                        {/* </div> */}
                </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={postSubmit}>
                        Add vehicle
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Nav.Link href='/GetDetails'><Button variant='outline-info'>View All Vehicles</Button></Nav.Link>
                <Nav.Link href='/Fuel'><Button variant='outline-info'>Update FuelData</Button></Nav.Link>
                <Nav.Link href='/about'><Button variant='outline-info'>About</Button></Nav.Link>
                <Nav.Link href='/contactPage'><Button variant='outline-info'>contactus</Button></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/loginPage"><Button variant="info">Logout<span style={{marginLeft:'5px'}}>< FaSignInAlt/></span></Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;