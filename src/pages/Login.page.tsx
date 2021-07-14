import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Login: React.FC<Props> = (props) => {
	return (
		<div>
			<p>This is Login Page.</p>
			<p>
				Don't have an account?
				<Link to="/signup" className="text-blue-500">
					Click here
				</Link>
			</p>
		</div>
	);
};

Login.defaultProps = {};

export default React.memo(Login);
