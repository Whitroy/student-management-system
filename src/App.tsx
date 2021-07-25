import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppMain from "./pages/App.main.page";
import AuthPage from "./pages/Auth.page";
import NotFoundPage from "./pages/NotFound.page";

interface Props {}

const { LOGIN_TOKEN_KEY } = require("./API/Config.json");

const App: React.FC<Props> = (props) => {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					{localStorage.getItem(LOGIN_TOKEN_KEY) ? (
						<Redirect to="/dashboard" from="/" exact />
					) : (
						<Redirect to="/login" from="/" exact />
					)}
					<Route path={["/login", "/signup"]} exact>
						<AuthPage />
					</Route>
					<Route
						path={[
							"/dashboard",
							"/recordings/batch/:batchNumber/lecture/:lectureNumber",
						]}
						exact
					>
						<AppMain />
					</Route>
					<Route>
						<NotFoundPage />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

App.defaultProps = {};

export default React.memo(App);
