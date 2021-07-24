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

	if (appearance === "outline") {
		appearanceClasses = `border border-${theme}-normal text-${theme}-normal hover:text-white hover:bg-${theme}-light hover:border-none shadow-${theme}`;
		disabledClasses = `text-${theme}-normal border border-${theme}-normal shadow-none`;
	} else {
		appearanceClasses = `bg-${theme}-light text-white hover:bg-${theme}-normal shadow-${theme}`;
		disabledClasses = `bg-${theme}-lightest text-white shadow-none`;
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
