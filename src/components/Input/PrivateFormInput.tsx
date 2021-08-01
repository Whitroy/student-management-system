import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	errors?: string;
	touched?: boolean;
	iconClassName?: string;
	mandatory?: boolean;
}

const PrivateFormInput: React.FC<Props> = ({
	className,
	touched,
	errors,
	iconClassName,
	mandatory,
	...rest
}) => {
	return (
		<div className={" w-full h-20 " + className}>
			<div className="flex items-center space-x-2">
				<div className="w-full space-y-2">
					<label
						htmlFor={rest.id}
						className="text-sm font-semibold text-secondary-dark"
					>
						{rest.placeholder}
						{mandatory ? "*" : ""}
					</label>
					<input
						{...rest}
						className=" focus:outline-none w-full bg-transparent border-2 border-secondary-light py-1.5 px-2 rounded-md focus:ring-2"
					/>
				</div>
			</div>
			{touched && (
				<div className="text-sm text-warning-dark mt-1">{errors}</div>
			)}
		</div>
	);
};

PrivateFormInput.defaultProps = {
	className: "",
	mandatory: false,
};

export default React.memo(PrivateFormInput);
