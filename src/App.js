import "./App.css";
import AboutPage from "./about";
import Home from "./home";
import Contact from "./contactPage";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav";
import GetDetails from "./GetDetails";
import FuelAdd from "./Fuel";
import User from "./userlogin";

function App() {
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/Home" element={<Home />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/getdetails" element={<GetDetails />}></Route>
					<Route path="/contactPage" element={<Contact />}></Route>
					<Route path="/Fuel" element={<FuelAdd />}></Route>
					{/* <Route path="/" element={<Login />} /> */}
					<Route path="/" element={<User />} />
				</Routes>
			</BrowserRouter>
			<br />
		</>
	);
}

export default App;
