import "bootstrap/dist/css/bootstrap.min.css";
import "./style1.css";
import React, { useState } from "react";
import imag from "./images/car.jpg";
import img from "./images/bimg.jpeg";
import Timg from "./images/tlead.jpg";
import img1 from "./images/pf1.jpg";
import img2 from "./images/pf2.jpg";
import img3 from "./images/pf3.jpeg";
import fuel from "./images/fuel.png";
import gps from "./images/gps.jpeg";
import route from "./images/route.jpeg";
import drive from "./images/drive.jpeg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import "./style1.css";
export default function AboutPage() {
	const [show, setShow] = useState("none");
	const [bval, setBval] = useState("Read More");
	function State() {
		if (show == "none") {
			setShow("block");
			setBval("Read Less");
		} else {
			setShow("none");
			setBval("Read More");
		}
	}
	return (
		<div className="container App" id="aboutpg">
			<div className="row">
				<p id="abouthead">ABOUT</p>
				<div className="col-md-6">
					<div className="card" id="content">
						<h4>What is VMS?</h4>
						<p id="first">
							Vehicle Management Systems (VMS) have become increasingly
							important over time in space missions, due both to the demands for
							increased flexibility and capability of these missions, and the
							supply of increasingly capable computing systems to provide this
							improved functionality. VMSs include the management of
							uncertainties in vehicle state, which is the vehicle portion of
							System Health Management (SHM).
						</p>
						<p style={{ display: show }}>
							SHM and SOM functions can be allocated to humans or machines,
							whether on the ground or on-board. To the extent these are
							allocated to the vehicle’s machines (as opposed to crew), these
							are part of the Vehicle Management System.{" "}
						</p>
						<button className="btn btn-danger" onClick={State}>
							{bval}
						</button>
					</div>
				</div>

				<div className="col-md-6">
					<div className="card">
						<img className="img" id="cdimg" src={imag} alt="image" />
					</div>
				</div>
			</div>

			<div className="row">
				<h3 id="vmsfunc">VMS FUNCTIONS</h3>
				<div className="col-md-3" id="features">
					<div className="card1">
						<img src={drive} />
						<h4>1.Driving behaviour analysis</h4>
						<p>
							The best fleet management systems will have a feature to monitor
							and measure driving behavior. A driving behavior analysis module
							allows you to analyze acceleration, harsh braking, speeding, and
							over idling, among others.
						</p>
					</div>
				</div>
				<div className="col-md-3" id="features">
					<div className="card1">
						<img src={route} />
						<h4>2.Route monitoring</h4>
						<p>
							This feature will help you to monitor the execution of routes and
							anticipate future events, supporting your fleet management
							decisions, minimizing fuel consumption and increasing productivity
						</p>
					</div>
				</div>
				<div className="col-md-3" id="features">
					<div className="card1">
						<img src={gps} />
						<h4>3.Gps Tracking system</h4>
						<p>
							The GPS tracking device is essential on a GPS vehicle tracking and
							fleet management system. Once the technician installs these
							devices into your fleet, you can access real-time location and
							movement of any of your vehicles.
						</p>
					</div>
				</div>
				<div className="col-md-3" id="features">
					<div className="card1">
						<img src={fuel} />
						<h4>4.Fuel Management</h4>
						<p>
							This helps you and your team to identify cases of leaks or theft
							quickly. You can set alarms to warn you and the driver
							immediately, whenever draining takes place and get a permanent
							measurement of the fuel level in tanks. Average fuel consumption
							is also calculated, per vehicle and time period.
						</p>
					</div>
				</div>
			</div>

			<div className="row" id="profiles">
				<h2 style={{ padding: "30px" }}>OUR TEAM</h2>
				<div className="col-md-3">
					<div className="card">
						<div className="img1">
							<img src={img} />
						</div>
						<div className="img2">
							<img src={Timg} />
						</div>
						<div className="content">
							<h5>siva prasad gandepalli</h5>
							<figcaption>Full stack developer</figcaption>
						</div>
						<div className="icons">
							<ul style={{ listStyle: "none" }} id="reacticons">
								<li>
									<FaFacebook />
								</li>
								<li>
									<FaTwitter />
								</li>
								<li>
									<FaSkype />
								</li>
								<li>
									<FaInstagram />
								</li>
								<li>
									<FaPinterestP />
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card">
						<div className="img1">
							<img src={img} />
						</div>
						<div className="img2">
							<img src={img3} />
						</div>
						<div className="content">
							<h5>Naresh Meka</h5>
							<figcaption>Full stack developer</figcaption>
						</div>
						<div className="icons">
							<ul style={{ listStyle: "none" }} id="reacticons">
								<li>
									<FaFacebook />
								</li>
								<li>
									<FaTwitter />
								</li>
								<li>
									<FaSkype />
								</li>
								<li>
									<FaInstagram />
								</li>
								<li>
									<FaPinterestP />
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card">
						<div className="img1">
							<img src={img} />
						</div>
						<div className="img2">
							<img src={img2} />
						</div>
						<div className="content">
							<h5>Charan ganesh</h5>
							<figcaption>Full stack developer</figcaption>
						</div>
						<div className="icons">
							<ul style={{ listStyle: "none" }} id="reacticons">
								<li>
									<FaFacebook />
								</li>
								<li>
									<FaTwitter />
								</li>
								<li>
									<FaSkype />
								</li>
								<li>
									<FaInstagram />
								</li>
								<li>
									<FaPinterestP />
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card">
						<div className="img1">
							<img src={img} />
						</div>
						<div className="img2">
							<img src={img1} />
						</div>
						<div className="content">
							<h5>Lokesh Guthula</h5>
							<figcaption>Full stack developer</figcaption>
						</div>
						<div className="icons">
							<ul style={{ listStyle: "none" }} id="reacticons">
								<li>
									<FaFacebook />
								</li>
								<li>
									<FaTwitter />
								</li>
								<li>
									<FaSkype />
								</li>
								<li>
									<FaInstagram />
								</li>
								<li>
									<FaPinterestP />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
