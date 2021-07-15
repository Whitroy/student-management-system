import React from "react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: React.ReactNode;
}

const Button: React.FC<Props> = ({ className, children, ...rest }) => {
	return (
		<button
			{...rest}
			className={
				" text-white bg-blue-500 px-4 py-2 rounded-md text-sm shadow-2xl hover:bg-blue-600" +
				className
			}
		>
			{children}
		</button>
	);
};

Button.defaultProps = {
	className: "",
};

export default React.memo(Button);
