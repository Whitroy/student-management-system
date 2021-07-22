import React from "react";
import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";
import P from "../P";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	appearance?: "solid" | "outline";
	theme?: "success" | "primary" | "warning" | "danger" | "secondary";
	border?: "default" | "rounded";
	children: string;
	Icon?: IconType;
	iconAnimation?: "spin" | "none";
}

const Button: React.FC<Props> = ({
	className,
	children,
	disabled,
	theme,
	appearance,
	border,
	Icon,
	iconAnimation,
	...rest
}) => {
	let disabledClasses = "";
	let appearanceClasses = "";

	switch (theme) {
		case "success":
			if (appearance === "outline") {
				appearanceClasses = `border border-green-500 text-green-500 hover:text-white hover:bg-green-400 hover:border-none shadow-green`;
				disabledClasses = `text-green-500 border border-green-500 shadow-none`;
			} else {
				appearanceClasses = `bg-green-400 text-white hover:bg-green-500 shadow-green `;
				disabledClasses = `bg-green-300 text-white shadow-none`;
			}
			break;

		case "danger":
			if (appearance === "outline") {
				appearanceClasses = `border border-red-500 text-red-500 hover:text-white hover:bg-red-400 hover:border-none shadow-red`;
				disabledClasses = `text-red-500 border border-red-500 shadow-none`;
			} else {
				appearanceClasses = `bg-red-400 text-white hover:bg-red-500 shadow-red `;
				disabledClasses = `bg-red-300 text-white shadow-none`;
			}
			break;

		case "warning":
			if (appearance === "outline") {
				appearanceClasses = `border border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-400 hover:border-none shadow-yellow`;
				disabledClasses = `text-yellow-500 border border-yellow-500 shadow-none`;
			} else {
				appearanceClasses = `bg-yellow-400 text-white hover:bg-yellow-500 shadow-yellow `;
				disabledClasses = `bg-yellow-300 text-white shadow-none`;
			}
			break;

		case "secondary":
			if (appearance === "outline") {
				appearanceClasses = `border border-gray-500 text-gray-500 hover:text-white hover:bg-gray-400 hover:border-none shadow-gray`;
				disabledClasses = `text-gray-500 border border-gray-500 shadow-none`;
			} else {
				appearanceClasses = `bg-gray-400 text-white hover:bg-gray-500 shadow-gray `;
				disabledClasses = `bg-gray-300 text-white shadow-none`;
			}
			break;

		case "primary":
			if (appearance === "outline") {
				appearanceClasses = `border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-400 hover:border-none shadow-blue`;
				disabledClasses = `text-blue-500 border border-blue-500 shadow-none`;
			} else {
				appearanceClasses = `bg-blue-400 text-white hover:bg-blue-500 shadow-blue `;
				disabledClasses = `bg-blue-300 text-white shadow-none`;
			}
			break;
	}

	return (
		<button
			{...rest}
			disabled={disabled}
			className={` px-4 py-2 text-sm ${className} 
				${disabled ? disabledClasses : appearanceClasses} ${
				border === "default" ? "rounded-md" : "rounded-full"
			} flex justify-start items-center space-x-1 focus:outline-none focus:ring-2`}
		>
			{Icon && (
				<Icon
					className={`${iconAnimation === "spin" ? " animate-spin" : ""}`}
				/>
			)}
			<P>{children}</P>
		</button>
	);
};

Button.defaultProps = {
	className: "",
	appearance: "solid",
	theme: "primary",
	border: "default",
	iconAnimation: "none",
};

export default React.memo(Button);
