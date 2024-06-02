import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";

import Iframe from "react-iframe";
import Modal from "react-bootstrap/Modal";
import { FcApproval } from "react-icons/fc";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Img from "./images/bg3.jpg";
import Footer from "./footer";

const Contact = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<div className="container App">
				<h2 id="contact">CONTACT US</h2>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<FcApproval />
						<Modal.Title>Status</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<figcaption>Message has sent successfully!</figcaption>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="danger" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
				<div class="row" style={{ boxShadow: "2px 3px 7px grey" }}>
					<div class="col-md-6">
						<img src={Img} alt="logo" className="l1" />
					</div>
					<div class="col-md-6 f1">
						<form action="/action_page.php" className="bg-default p-4">
							<div class="form-group ">
								<div className="row">
									<div className="col-md-2">
										<label>NAME:</label>
									</div>
									<div className="col-md-9">
										<input
											type="text"
											className="form-control"
											required
											placeholder="ENTER YOUR NAME"
										></input>
									</div>
								</div>
							</div>
							<br />
							<div class="form-group ">
								<div className="row">
									<div className="col-md-2">
										<label className="form-label">MAil:</label>
									</div>
									<div className="col-md-9">
										<input
											type="email"
											className="form-control"
											required
											placeholder="ENTER YOUR MAIL"
										></input>
									</div>
								</div>
							</div>
							<br />
							<div class="form-group ">
								<div className="row">
									<div className="col-md-2">
										<label className="form-label">MOBILE NUMBER:</label>
									</div>
									<div className="col-md-9">
										<input
											type="number"
											className="form-control"
											required
											placeholder="ENTER MOBILE NUMBER"
										></input>
									</div>
								</div>
							</div>
							<br />
							<div class="form-group ">
								<div className="row">
									<div className="col-md-2">
										<label className="form-label">REASON:</label>
									</div>
									<div className="col-md-9">
										<input
											type="text"
											className="form-control"
											placeholder="REASON FOR CONTACT"
										></input>
									</div>
								</div>
							</div>
							<br />
							<div class="row">
								<div className="col-md-2"></div>
								<div class="col-md-4">
									<input
										type="reset"
										className="form-control "
										name=""
										value="RESET ALL DATA"
									></input>
								</div>
								<div class="col-md-4">
									<input
										type="submit"
										className="form-control btn btn-success"
										name=""
										value="Send"
										onClick={handleShow}
									></input>
								</div>

								<div className="col-md-2"></div>
							</div>
						</form>
					</div>
				</div>
				<br />
				<br />
				<br />
				<div className="row mb-3">
					<div class="col-md-12">
						<h2>FIND US HERE</h2>
						<Iframe
							url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30510.29243438077!2d82.
            0419953090155!3d17.083090171177147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3
            a3783210b6a2a7f%3A0xe9651e406e38686a!2sSurampalem%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!
            4v1680632200805!5m2!1sen!2sin"
							width="100%"
							height="400"
							style="border:0;"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>
				<br />
				<br />
			</div>
			<div className="container-fluid">
				<Footer />
			</div>
		</>
	);
};
export default Contact;
