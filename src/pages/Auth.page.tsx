import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../components/AuthHero";
import LoginPage from "./Login.page";
import SignUpPage from "./SignUp.page";

interface Props {}

const Auth: React.FC<Props> = (props) => {
	return (
		<div className="flex flex-row justify-between items-center">
			<Switch>
				<Route path="/signup">
					<SignUpPage />
				</Route>
				<Route path="/login">
					<LoginPage />
				</Route>
			</Switch>
			<AuthHero />
		</div>
	);
};

Auth.defaultProps = {};

export default React.memo(Auth);
