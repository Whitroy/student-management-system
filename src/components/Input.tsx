import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { ReactElement } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	icon: ReactElement;
	validateType?: "email" | "password" | "none";
}

const Input: React.FC<Props> = ({ icon, validateType, className, ...rest }) => {
	const [value, setValue] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [focus, setFocus] = useState(false);

	const handleBlur = () => {
		if (!focus) validate();
		setFocus(true);
	};

	const validate = () => {
		switch (validateType) {
			case "email":
				const emailRegex =
					/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

				if (value === "") {
					setErrorMessage("Email must required!");
				} else if (!value.match(emailRegex)) {
					setErrorMessage("Invalid Email!");
				} else {
					setErrorMessage("");
				}
				break;

			case "password":
				if (value.length < 8) {
					setErrorMessage("Password should be of min 8 length!");
				} else {
					setErrorMessage("");
				}

				break;

			case "none":
				break;
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		if (focus) validate();
	};

	return (
		<div className={" w-full h-14 " + className}>
			<div className="flex items-center space-x-2">
				<div className="text-blue-500">{icon}</div>
				<div className="w-full">
					<label htmlFor={rest.name} className="sr-only">
						{rest.placeholder}
					</label>
					<input
						{...rest}
						value={value}
						className=" focus:outline-none w-full"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
			</div>
			<hr className=" text-black mt-3" />
			<div className="text-sm text-red-600">{errorMessage}</div>
		</div>
	);
};

Input.defaultProps = {
	className: "",
	validateType: "none",
};

export default React.memo(Input);
