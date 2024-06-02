import React from "react";
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {FaFacebook } from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";



const Footer = () => {
    return (
             <footer>
                <div className="container-fluid" id="foot">
                    <div className="row" id="div2">
                        <div className="col-md-3" id="bgimg" style={{borderRight:'1px solid white'}}>
                            
                        </div>
                    <div className="col-md-9" > 
                        <div className="row"  id="r1">
                            <div className="col-md-4">
                                <div >
                                    <ul>
                                        <h4>Address</h4>
                                        <li>Surampalem </li>
                                        <li>Pin Code 533437</li>
                                        <li>Kakinada Mandal</li>
                                        <li>East Godhavari District</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <ul>
                                        <h4>E-Mail id</h4>
                                        <li>@charan ganesh gmail.com </li>
                                        <li>@siva prasad gmail.com</li>
                                        <li>@lokesh gmail.com</li>
                                        <li>East Godhavari Di</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h4>Wattsup & PhoneNo</h4>
                                <ul>
                                    <li>Office Reseption +088854638</li>
                                    <li>Markating +088975483</li>
                                    <li>Info +94789378303</li>
                                </ul>
                            </div>
                        </div >
                         <div id="icon">
                            <li> <b><FaFacebook/></b></li>
                            <li> <i><FaInstagram/></i></li>
                            <li><span><FaTwitter/></span></li>
                            <li><b><FaTelegram/></b></li>
                          </div>
                          <div id="mid">
                            <h6 className="copyright">copy rights© 2023 reserved to Dynamic Develapers</h6>
                          </div>
                     </div>
                </div>
            </div>
        </footer>
        
    )
}

 export default Footer;
 
