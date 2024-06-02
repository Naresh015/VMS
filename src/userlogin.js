import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Home from "./home";
import "./style1.css";
function User() {
	const styl = {
		padding: "20px",
		background: "whitesmoke",
		marginTop: "10%",
		// backgroundImage: "linear-gradient(to left top, white,steelblue)",
		boxShadow: "4px 3px 11px black",
		opacity: "0.8",
		borderRadius: "15px",
	};
	const h2 = {
		textAlign: "center",
		textDecoration: "underline",
		paddingBottom: "8%",
	};
	const input = {
		borderBottom: "1px solid black",
		borderLeft: "none",
		borderRight: "none",
		borderTop: "none",
		background: "inherit",
	};
	const open = () => {
		return <Home />;
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4">
					<div style={styl}>
						<h3 style={h2}>Login Here</h3>
						<form className="form">
							<div className="form-group">
								<label>User</label>
								<input type="radio" />
								<label>Admin</label>
								<input type="radio" />
							</div>
							<div className="form-group mb-3">
								<input
									type="text"
									style={input}
									className="form-control"
									placeholder="Enter Username"
								/>
							</div>
							<div className="form-group mb-3">
								<input
									type="password"
									style={input}
									className="form-control"
									placeholder="Enter Password"
								/>
							</div>
							<div class="row">
								<div class="col-md-6">
									<input
										type="reset"
										class="form-control "
										name=""
										value="RESET ALL"
									></input>
								</div>
								<div class="col-md-6 ls">
									<Link to="/home" class="l">
										LOGIN
									</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="col-md-4"></div>
			</div>
		</div>
	);
}

export default User;
