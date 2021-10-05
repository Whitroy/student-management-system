import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LoadingPage from "./pages/Loading.page";
import NotFoundPage from "./pages/NotFound.page";
import { useAppSelector } from "./store/store";
import { LOGIN_TOKEN_KEY } from "./api/base.api";
import { authActions } from "./store/binds/auth.bind";
import { meIdSelector } from "./store/selectors/auth.selectors";

const AuthPageLazy = React.lazy(() => import("./pages/Auth.page"));
const AppMainLazy = React.lazy(() => import("./pages/App.main.page"));

interface Props {}

const App: React.FC<Props> = (props) => {
	const userID = useAppSelector(meIdSelector);
	const token = localStorage.getItem(LOGIN_TOKEN_KEY);
	useEffect(() => {
		if (!token) return;
		authActions.fetch();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	if (token && !userID) {
		return <LoadingPage />;
	}

	return (
		<Suspense fallback={<LoadingPage />}>
			<BrowserRouter>
				<Switch>
					{userID ? (
						<Redirect to="/dashboard" from="/" exact />
					) : (
						<Redirect to="/login" from="/" exact />
					)}
					<Route path={["/login", "/signup"]} exact>
						{userID ? (
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
							"/dashboard/users",
							"/dashboard/user/:userId",
						]}
						exact
					>
						{userID ? <AppMainLazy /> : <Redirect to="/login" from="/" exact />}
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
