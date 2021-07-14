import React from "react";
import { Route, Switch } from "react-router-dom";
import SideBar from "../components/SideBar";
import DashboardPage from "./Dashboard.page";
import RecordingsPage from "./Recordings.page";

interface Props {}

const MainApp: React.FC<Props> = (props) => {
	return (
		<div className="flex">
			<SideBar />
			<Switch>
				<Route path="/dashborad">
					<DashboardPage />
				</Route>
				<Route path="/recordings/batch/:batchNumber/lecture/:lectureNumber">
					<RecordingsPage />
				</Route>
			</Switch>
		</div>
	);
};

MainApp.defaultProps = {};

export default React.memo(MainApp);
