import React, { Suspense, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { me } from "./api/User.api";
import AppContext from "./context/App.context";
import User from "./models/User.model";
import LoadingPage from "./pages/Loading.page";
import NotFoundPage from "./pages/NotFound.page";

const AuthPageLazy = React.lazy(() => import("./pages/Auth.page"));
const AppMainLazy = React.lazy(() => import("./pages/App.main.page"));

interface Props {}

const { LOGIN_TOKEN_KEY } = require("./api/Config.json");

const App: React.FC<Props> = (props) => {
	const [user, setUser] = useState<User>();
	const token = localStorage.getItem(LOGIN_TOKEN_KEY);
	console.log(token);
	useEffect(() => {
		if (!token) return;
		me().then((user) => {
			setUser(user);
		});
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const contextData = useMemo(() => ({ user, setUser }), [user]);

	if (token && !user) {
		return <LoadingPage />;
	}

	return (
		<AppContext.Provider value={contextData}>
			<Suspense fallback={<LoadingPage />}>
				<BrowserRouter>
					<Switch>
						{user ? (
							<Redirect to="/dashboard" from="/" exact />
						) : (
							<Redirect to="/login" from="/" exact />
						)}
						<Route path={["/login", "/signup"]} exact>
							{user ? (
								<Redirect to="/dashboard" from="/" exact />
							) : (
								<AuthPageLazy />
							)}
						</Route>
						<Route
							path={[
								"/dashboard",
								"/recordings/batch/:batchNumber/lecture/:lectureNumber",
							]}
							exact
						>
							{user ? <AppMainLazy /> : <Redirect to="/login" from="/" exact />}
						</Route>
						<Route>
							<NotFoundPage />
						</Route>
					</Switch>
				</BrowserRouter>
			</Suspense>
		</AppContext.Provider>
	);
};

App.defaultProps = {};

export default React.memo(App);
