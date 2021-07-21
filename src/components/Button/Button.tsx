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
	let color = "";

	switch (theme) {
		case "success":
			color = "green";
			break;

		case "danger":
			color = "red";
			break;

		case "warning":
			color = "yellow";
			break;

		case "secondary":
			color = "gray";
			break;

		case "primary":
			color = "blue";
			break;
	}

	if (appearance === "outline") {
		appearanceClasses = `border border-${color}-500 text-${color}-500 hover:text-white hover:bg-${color}-400 hover:border-none shadow-${color}`;
		disabledClasses = `text-${color}-500 border border-${color}-500 shadow-none`;
	} else {
		appearanceClasses = `bg-${color}-400 text-white hover:bg-${color}-500 shadow-${color} `;
		disabledClasses = `bg-${color}-300 text-white shadow-none`;
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
