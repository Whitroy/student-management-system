import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { me } from "./api/User.api";
import LoadingPage from "./pages/Loading.page";
import NotFoundPage from "./pages/NotFound.page";
import { useAppSelector } from "./store/store";

const AuthPageLazy = React.lazy(() => import("./pages/Auth.page"));
const AppMainLazy = React.lazy(() => import("./pages/App.main.page"));

interface Props {}

const { LOGIN_TOKEN_KEY } = require("./api/Config.json");

const App: React.FC<Props> = (props) => {
	const user = useAppSelector((state) => state.me);
	const token = localStorage.getItem(LOGIN_TOKEN_KEY);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!token) return;
		me().then((user) => {
			dispatch({ type: "me", payload: user });
		});
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	if (token && !user) {
		return <LoadingPage />;
	}

	return (
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
							"/dashboard/groups",
							"/recordings/batch/:batchNumber/lecture/:lectureNumber",
							"/dashboard/profile",
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
	);
};

App.defaultProps = {};

export default React.memo(App);
