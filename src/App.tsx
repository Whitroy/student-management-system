import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { authActions } from "./store/actions/auth.actions";
import { me } from "./api/User.api";
import LoadingPage from "./pages/Loading.page";
import NotFoundPage from "./pages/NotFound.page";
import { useAppSelector } from "./store/store";
import { meSelector } from "./store/selectors/user.selectors";
import { LOGIN_TOKEN_KEY } from "./api/base.api";

const AuthPageLazy = React.lazy(() => import("./pages/Auth.page"));
const AppMainLazy = React.lazy(() => import("./pages/App.main.page"));

interface Props {}

const App: React.FC<Props> = (props) => {
	const user = useAppSelector(meSelector);
	const token = localStorage.getItem(LOGIN_TOKEN_KEY);
	console.log("App render");
	useEffect(() => {
		if (!token) return;
		me().then((user) => {
			authActions.fetch(user);
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
							"/dashboard/groups/group/:groupId",
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
