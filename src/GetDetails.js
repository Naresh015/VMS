import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React from 'react';
import { useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './style1.css'
export default function Gethetails(){
    const[data,setData]=useState([]);
    const [nm,setNm]=useState(0);
    useEffect(()=>{
        axios.get('http://localhost:4000/getData')
        .then((res)=>setData(res.data))
      },[])  

      const search=()=>{
        var input, filter, tr,i;
        input = document.getElementById("input");
        filter = input.value.toUpperCase();
        tr = document.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName("td")[1];
            var txtValue=td.innerText; 
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
      }
    return(
        <div className='container App mb-5' id='vehicledet'>
            <p id='viewdata'>Total Vehicle Details</p>
            <div className='row'>
                <div className='col-md-4'>
                </div>
                <div className='col-md-4'>
                <InputGroup  id='search'>
                    <Form.Control aria-label="Dollar amount (with dot and two decimal places)" id='input' placeholder='search ' onKeyUp={search}/>
        
                    <Button style={{width:'60px'}}><FaSearch/></Button>
                </InputGroup>
                </div>
                <div className='col-md-4'>
                </div>
            </div>
            <Table striped bordered hover responsive  id='viewtab'>
            <thead>
                <tr style={{background:'coral'}}>
                    <th>Sr.No</th>
                    <th>Vehicle Id</th>
                    <th>Model</th>
                    <th>Status</th>
                    <th>location</th>
                    <th>Driver</th>
                    <th>company</th>
                    <th>Owner</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item,i)=>{
                        return(
                        <tr>
                            <td >{i+1}</td>
                            <td>{item.Vid}</td>
                            <td >{item.model}</td>
                            <td>active</td>
                            <td>kakinada</td>
                            <td>-</td>
                            <td >{item.company}</td>
                            <td>{item.Oid}</td>
                        </tr>
                        )
                    })
                }
                
            </tbody>
            </Table>
        </div>
    )
}