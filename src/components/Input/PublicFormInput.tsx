import React, { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	Icon?: IconType;
	errors?: string;
	touched?: boolean;
	iconClassName?: string;
}

const Input: React.FC<Props> = ({
	Icon,
	className,
	touched,
	errors,
	iconClassName,
	...rest
}) => {
	return (
		<div className={" w-full h-14 " + className}>
			<div className="flex items-center space-x-2">
				{Icon && (
					<Icon
						className={`text-primary-normal w-6 h-6 fill-primary-200 ${iconClassName}`}
					/>
				)}
				<div className="w-full">
					{rest.id && rest.placeholder && (
						<label htmlFor={rest.id} className="sr-only">
							{rest.placeholder}
						</label>
					)}
					<input {...rest} className=" focus:outline-none w-full" />
				</div>
			</div>
			<hr
				className={`${
					touched && errors ? "text-danger-dark" : "text-secondary-dark"
				}  mt-3`}
			/>
			{touched && <div className="text-sm text-danger-dark mt-1">{errors}</div>}
		</div>
	);
};

Input.defaultProps = {
	className: "",
};

export default React.memo(Input);
