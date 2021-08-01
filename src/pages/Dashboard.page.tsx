import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useAppSelector } from "../store/store";

import GroupPage from "./Group.page";
import ProfilePage from "./Profile.page";

interface Props {}

const Dashboard: React.FC<Props> = () => {
	const sideBarState = useAppSelector((state) => state.isSideBarOpen);

	return (
		<div className="flex">
			<div
				className={`hidden md:block bg-secondary-finest transition-width duration-500 ease-in-out ${
					sideBarState ? "w-68" : "w-0"
				}`}
				style={{ scrollbarWidth: "none" }}
			/>
			<div className="bg-secondary-finest w-full pt-28 px-2">
				<Switch>
					<Redirect from="/dashboard" to="/dashboard/groups" exact />
					<Route path="/dashboard/groups">
						<GroupPage />
					</Route>
					<Route path="/dashboard/profile">
						<ProfilePage />
					</Route>
				</Switch>
			</div>
		</div>
	);
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
