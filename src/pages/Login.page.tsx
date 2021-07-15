import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../components/Input";
import { FiUser } from "react-icons/fi";
import { HiLockClosed } from "react-icons/hi";
import Button from "../components/Button";
import RouteLink from "../components/RouteLink";
import H1 from "../components/H1";
import P from "../components/P";
import { BsLock } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";

interface Props {}

const Login: React.FC<Props> = (props) => {
	const [processing, setProcessing] = useState(false);

	const history = useHistory();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("submitting");
		setProcessing(true);
		setTimeout(() => {
			history.push("/dashboard");
			setProcessing(false);
		}, 5000);
	};

	return (
		<div className="flex-1">
			<div className=" max-w-lg mx-auto p-6">
				<H1>
					Log In to <RouteLink to="/login">SMS</RouteLink>
				</H1>
				<P className="mt-3">
					New Here?{" "}
					<Link to="/signup" className="text-blue-500">
						Create an account
					</Link>
				</P>
				<form className="mt-16" onSubmit={handleSubmit}>
					<Input
						type="email"
						placeholder="Email address"
						name="email"
						required
						autoComplete="email"
						validateType="email"
						icon={<FiUser className="w-6 h-6 fill-blue-200" />}
					/>
					<Input
						type="password"
						placeholder="Password"
						name="password"
						required
						autoComplete="current-password"
						icon={<HiLockClosed className="w-6 h-6 fill-blue-400" />}
						className="mt-5"
						validateType="password"
					/>
					<div className="mt-4 flex justify-between items-center">
						<p>Show Password</p>
						<Button type="submit" disabled={processing}>
							<div className="flex justify-start items-center space-x-1">
								{!processing && <BsLock />}
								{processing && <FaSpinner className=" animate-spin" />}
								<p>Log in</p>
							</div>
						</Button>
					</div>
					<div className="flex flex-col items-center mt-10 justify-between">
						<div className="flex items-center justify-start space-x-2">
							<input type="checkbox" className="w-4 h-4" />
							<span className=" text-gray-400 text-sm">Keep me logged in</span>
						</div>
						<RouteLink to="/forgot-password" className=" font-semibold mt-3">
							Forgot Password?
						</RouteLink>
					</div>
				</form>
			</div>
		</div>
	);
};

Login.defaultProps = {};

export default React.memo(Login);
