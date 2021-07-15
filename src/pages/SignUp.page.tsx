import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const SignUp: React.FC<Props> = (props) => {
	return (
		<div className="flex-1">
			<p>This is sign up Page</p>
			<p>
				Already have an account?
				<Link to="/login" className="text-blue-500">
					Click here
				</Link>
			</p>
		</div>
	);
};

SignUp.defaultProps = {};

export default React.memo(SignUp);
