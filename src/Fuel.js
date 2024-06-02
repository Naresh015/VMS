import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './style1.css'
import Modal from 'react-bootstrap/Modal';
import { FcApproval} from 'react-icons/fc';

export default function FuelAdd(){
    const [data,setData]=useState([])
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const[Inf,setInf]=useState({
        Vid:"",
        model:"",
        company:"",
        Oid:""
    });

    let [d1,setd1]=useState("");
      let [d2,setd2]=useState("");
      let [d3,setd3]=useState("");
      let [d4,setd4]=useState("");
      let [d5,setd5]=useState("");

      const [bnum,setBnum]=useState([])
        useEffect(()=>{
            axios.get('http://localhost:4000/getData')
            .then((res)=>{
                setData(res.data);
        })
      },[])
    //   const myfun=()=>{
    //     data.map((item,i)=>{
    //         setBnum(...bnum,item.Vid);
    //     })
    //   }
      const search=(e)=>{
        var cm2=e.target.value.toLowerCase();
        for(let i=0;i<data.length;i++)
        {
            var cm1=data[i].Vid.toLowerCase();
            if(cm1===cm2)
            {
                setInf(data[i]);
                setd1(Inf.Vid);
                setd2(Inf.model);
                setd3(Inf.company);
                setd4(Inf.Oid);
                break;
                
            }
        }
      }
      const [kilo,setKilo]=useState();
      const [cmr,setcmr]=useState();
      const calculate=(e)=>{
        var fuel=e.target.value;
        var val1=document.getElementById('kmpl').value;
        var fr=document.getElementById('fr').value;
        var val2=document.getElementById('omr').value;
        setKilo(val1*fuel);
        setcmr(kilo-val2);
        setd5(fuel*fr)

      }
    return(
        <div className='container '>
            <p id='fhead'>Fuel Adding</p>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <FcApproval style={{fontSize:'40px'}}/>
                    <Modal.Title>Done</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <figcaption>Fuel data is submitted successfully!</figcaption>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6' id='fform'>
                    <form className='form-inline' id='formdata'>
                    <div className='form-group'>
                            <label className='form-label' required>Vehicle type:</label>
                        <select className='form-control'>
                            <option>select vehicle type</option>
                            <option>Own vehicle</option>
                            <option>private</option>
                            <option>others</option>
                        </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">vehicle Number:</label>
                            <input type='textr' class="form-control"  onChange={search} required placeholder='enter vehicle number'/>
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Model:</label>
                            <input className='form-control' required type='text' id='mod' placeholder='vehicle model' value={d2}/>
                        </div>
                        <div className='form-group'>
                            <label className='form-label' required>company:</label>
                            <input className='form-control' type='text' id='cmp' placeholder='vehicle company' value={d3}/>
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Driver:</label>
                            <input className='form-control' type='text' id='drv' placeholder='driver name(optional)' value={d4}/>
                        </div>
                        <div className='form-group'>
                            <label className='form-label' aria-readonly>Fuel rate per litre:</label>
                            <input className='form-control' type='number' value='99.90' id='fr'/>
                        </div>
                        <div className='form-group'>
                            <label className='form-label' required>Fuel today:</label>
                            <input className='form-control' type='number' onChange={calculate}/>
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Amount:</label>
                            <input className='form-control' type='text'  placeholder='' value={d5}/>
                        </div>
                        <div className='form-group'>
                            <label className='form-label' required>Total Kilometers:</label>
                            <input className='form-control' type='number' value={kilo}/>
                        </div>
                        <div className='form-group'>
                            <label className='form-label' aria-readonly id='KMPL'>KMPL:</label>
                            <input className='form-control' type='number' value='3' id='kmpl'/>
                        </div>
                        <div className='form-group'>
                            <label className='form-label' aria-readonly>OMR:</label>
                            <input className='form-control' type='number' value='22567' id='omr'/>
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>CMR:</label>
                            <input className='form-control' type='number' value={cmr}/>
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Grade:</label>
                            <input className='form-control' id='vnm' type='text'/>
                        </div>
                        <br/>
                        <div class="checkbox">
                            <label><input type="checkbox" value=""/>Remember me(optional)</label>
                        </div>
                        <br/>
                        <div className='form-group'>
                            <input className='form-control bg-success' type='button' value='submit' onClick={handleShow}/>
                        </div>
                    </form>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    )
}