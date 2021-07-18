import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import DashboardPage from "./Dashboard.page";
import RecordingsPage from "./Recordings.page";

interface Props {}

const MainApp: React.FC<Props> = (props) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuClick = () => {
		setMenuOpen((open) => !open);
	};

	return (
		<>
			<div className="w-full fixed z-30">
				<NavBar />
				<Header handleMenuClick={handleMenuClick} />
			</div>
			<SideBar show={menuOpen} onClose={setMenuOpen} />
			<Switch>
				<Route path="/dashboard">
					<DashboardPage grow={menuOpen} />
				</Route>
				<Route path="/recordings/batch/:batchNumber/lecture/:lectureNumber">
					<RecordingsPage />
				</Route>
			</Switch>
		</>
	);
};

MainApp.defaultProps = {};

export default React.memo(MainApp);
