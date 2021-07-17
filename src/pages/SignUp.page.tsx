import React, { useState } from "react";
import H1 from "../components/H1";
import P from "../components/P";
import RouteLink from "../components/RouteLink";
import { useFormik } from "formik";
import { BsLock } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import * as yup from "yup";
import Button from "../components/Button";
import Input from "../components/Input";
import { FiUser } from "react-icons/fi";
import { HiLockClosed, HiOutlineMail } from "react-icons/hi";
import ToggleButton from "../components/ToggleButton";

interface Props {}

const SignUp: React.FC<Props> = (props) => {
	const [showPassword, setShowPassword] = useState(false);
	const {
		handleSubmit,
		setSubmitting,
		getFieldProps,
		isSubmitting,
		isValid,
		errors,
		touched,
	} = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},

		validationSchema: yup.object().shape({
			username: yup.string().required().lowercase(),
			email: yup.string().required().email(),
			password: yup
				.string()
				.required()
				.min(8, ({ min }) => `At least ${min} char!!!`),
		}),
		onSubmit: () => {
			console.log("Registering!!!");
			setTimeout(() => {
				setSubmitting(false);
			}, 5000);
		},
	});
	return (
		<div className="flex-1">
			<div className=" max-w-lg mx-auto p-6">
				<H1 className="max-w-xs">Get started with a free account</H1>
				<P className="mt-3">
					Already have an account?{" "}
					<RouteLink to="/login" className="underline">
						Log in
					</RouteLink>
				</P>
				<form className="mt-12" onSubmit={handleSubmit}>
					<Input
						id="username"
						type="text"
						placeholder="Username"
						required
						autoComplete="username"
						touched={touched.username}
						errors={errors.username}
						icon={<FiUser className="w-6 h-6 fill-blue-200" />}
						{...getFieldProps("username")}
					/>
					<Input
						id="email"
						type="email"
						placeholder="Email Address"
						required
						autoComplete="email"
						icon={<HiOutlineMail className="w-6 h-6 fill-blue-200" />}
						className="mt-5"
						{...getFieldProps("email")}
						touched={touched.email}
						errors={errors.email}
					/>
					<Input
						id="password"
						type={showPassword ? "text" : "password"}
						placeholder="Password"
						required
						autoComplete="current-password"
						icon={<HiLockClosed className="w-6 h-6 fill-blue-400" />}
						className="mt-5"
						{...getFieldProps("password")}
						touched={touched.password}
						errors={errors.password}
					/>
					<div className="flex items-center justify-start space-x-2 mt-8">
						<input type="checkbox" className="w-4 h-4" />
						<span className=" text-gray-400 text-sm">
							I agree to the{" "}
							<RouteLink to="/terms-and-conditions">
								terms and conditions
							</RouteLink>
						</span>
					</div>
					<div className="mt-5 flex justify-between items-center">
						<ToggleButton
							label="show password"
							checked={showPassword}
							onChange={setShowPassword}
						/>
						<Button type="submit" disabled={!isValid}>
							<div className="flex justify-start items-center space-x-1">
								{!isSubmitting && <BsLock />}
								{isSubmitting && <FaSpinner className=" animate-spin" />}
								<p>Get Started!</p>
							</div>
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

SignUp.defaultProps = {};

export default React.memo(SignUp);
