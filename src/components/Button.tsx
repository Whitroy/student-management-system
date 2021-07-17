import React from "react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: React.ReactNode;
}

const Button: React.FC<Props> = ({
	className,
	children,
	disabled,
	...rest
}) => {
	return (
		<button
			{...rest}
			disabled={disabled}
			className={
				" text-white px-4 py-2 rounded-md text-sm shadow-blue " +
				className +
				(disabled ? " bg-blue-300 " : " bg-blue-500 hover:bg-blue-600")
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
