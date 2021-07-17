import React, { InputHTMLAttributes } from "react";
import { ReactElement } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	icon: ReactElement;
	errors?: string;
	touched?: boolean;
}

const Input: React.FC<Props> = ({
	icon,
	className,
	touched,
	errors,
	...rest
}) => {
	return (
		<div className={" w-full h-14 " + className}>
			<div className="flex items-center space-x-2">
				<div className="text-blue-500">{icon}</div>
				<div className="w-full">
					{rest.id && rest.placeholder && (
						<label htmlFor={rest.id} className="sr-only">
							{rest.placeholder}
						</label>
					)}
					<input {...rest} className=" focus:outline-none w-full" />
				</div>
			</div>
			<hr className=" text-black mt-3" />
			{touched && <div className="text-sm text-red-600">{errors}</div>}
		</div>
	);
};

Input.defaultProps = {
	className: "",
};

export default React.memo(Input);
