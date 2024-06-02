import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import { PieChart } from "react-minimal-pie-chart";
import { FaSignInAlt } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FaAtlas } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { FcExpired } from "react-icons/fc";
import "./style1.css";
function Home() {
	const data = [
		{
			DriverName: "Rajesh",
			VehicleNumber: "AP05 TD 7778",
			Model: "starcity plus",
			Route: "kakinada",
			Age: "25",
			Performance: "A",
		},
		{
			DriverName: "Suribabu",
			VehicleNumber: "AP05 YT 9980",
			Model: "STARBUS 24 EX",
			Route: "Pithapuram",
			Age: "35",
			Performance: "B",
		},
		{
			DriverName: "Satish",
			VehicleNumber: "AP90 HG 7768",
			Model: "starcity",
			Route: "yeleswaram",
			Age: "27",
			Performance: "A",
		},
		{
			DriverName: "Ravi",
			VehicleNumber: "AP09 AZ 2901",
			Model: "star plus",
			Route: "samarlakota",
			Age: "26",
			Performance: "C",
		},
		{
			DriverName: "Farook",
			VehicleNumber: "AP08 MN 4534",
			Model: "Star city ultra",
			Route: "Tuni",
			Age: "45",
			Performance: "C",
		},
		{
			DriverName: "Srinu",
			VehicleNumber: "AP09 HF 8769",
			Model: "Tata ultra plus",
			Route: "Rajahmundry",
			Age: "30",
			Performance: "A",
		},
		{
			DriverName: "Balaji",
			VehicleNumber: "AP07 JK 5575",
			Model: "Starbus ultra 23",
			Route: "jaggampeta",
			Age: "43",
			Performance: "C",
		},
	];
	return (
		<div className=" container-fluid App" id="db">
			<h2 id="dp">DASHBOARD</h2>
			<div className="row" id="home">
				<div className="col-md-3">
					<div className="card" id="c1">
						<FaBus style={{ fontSize: "80px" }} />
						<h3>Total vehicles</h3>
						<h5>475</h5>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card" id="c2">
						<FcApproval style={{ fontSize: "80px" }} />
						<h3>Active</h3>
						<h5>400</h5>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card" id="c3">
						<FcSupport style={{ fontSize: "80px" }} />
						<h3>Repair</h3>
						<h5>75</h5>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card" id="c4">
						<FcAddressBook style={{ fontSize: "80px" }} />
						<h3>Insurance expired</h3>
						<h5>25</h5>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<div className="row" id="home">
				<div className="col-md-3">
					<div className="card" id="c1">
						<FaAtlas style={{ fontSize: "80px" }} />
						<h3>Pollution expired</h3>
						<h5>105</h5>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card" id="c2">
						<FaDigitalOcean style={{ fontSize: "80px" }} />
						<h3>Serviceing required</h3>
						<h5>2</h5>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card" id="c3">
						<FcExpired style={{ fontSize: "80px" }} />
						<h3>License Expired</h3>
						<h5>5</h5>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card" id="c4">
						<FaCar style={{ fontSize: "80px" }} />
						<h3>Four Wheelers</h3>
						<h5>5</h5>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<div
				className="container mb-3"
				style={{ boxShadow: "3px 5px 7px -1px black", padding: "15px" }}
			>
				<div className="row">
					<h3>DRIVER DETAILS</h3>
					<div className="col-md-12">
						<Table bordered hover responsive style={{ marginTop: "30px" }}>
							<thead>
								<tr>
									<th>Sr.No</th>
									<td>DriverName</td>
									<th>Vehicle Id</th>
									<th>Model</th>
									<th>Route</th>
									<th>Age</th>
									<th>Performance</th>
								</tr>
							</thead>
							<tbody>
								{data.map((item, i) => {
									return (
										<tr>
											<td>{i + 1}</td>
											<td>{item.DriverName}</td>
											<td>{item.VehicleNumber}</td>
											<td>{item.Model}</td>
											<td>{item.Route}</td>
											<td>{item.Age}</td>
											<td>{item.Performance}</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Home;
