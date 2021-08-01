import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import GroupPage from "./Group.page";
import ProfilePage from "./Profile.page";

interface Props {
	grow: boolean;
}

const Dashboard: React.FC<Props> = ({ grow }) => {
	return (
		<div className="flex">
			<div
				className={` bg-secondary-finest transition-width duration-500 ease-in-out ${
					grow ? "w-68" : "w-0"
				}`}
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
