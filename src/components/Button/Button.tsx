import React from "react";
import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";
import P from "../Basic/P";

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
		case "primary":
			if (appearance === "outline") {
				appearanceClasses = `border border-primary-normal text-primary-normal hover:text-white hover:bg-primary-light hover:border-none shadow-primary`;
				disabledClasses = `text-primary-normal border border-primary-normal shadow-none`;
			} else {
				appearanceClasses = `bg-primary-light text-white hover:bg-primary-normal shadow-primary`;
				disabledClasses = `bg-primary-lightest text-white shadow-none`;
			}
			break;
		case "secondary":
			if (appearance === "outline") {
				appearanceClasses = `border border-secondary-normal text-secondary-normal hover:text-white hover:bg-secondary-light hover:border-none shadow-secondary`;
				disabledClasses = `text-secondary-normal border border-secondary-normal shadow-none`;
			} else {
				appearanceClasses = `bg-secondary-light text-white hover:bg-secondary-normal shadow-secondary`;
				disabledClasses = `bg-secondary-lightest text-white shadow-none`;
			}
			break;
		case "danger":
			if (appearance === "outline") {
				appearanceClasses = `border border-danger-normal text-danger-normal hover:text-white hover:bg-danger-light hover:border-none shadow-danger`;
				disabledClasses = `text-danger-normal border border-danger-normal shadow-none`;
			} else {
				appearanceClasses = `bg-danger-light text-white hover:bg-danger-normal shadow-danger`;
				disabledClasses = `bg-danger-lightest text-white shadow-none`;
			}
			break;
		case "success":
			if (appearance === "outline") {
				appearanceClasses = `border border-success-normal text-success-normal hover:text-white hover:bg-success-light hover:border-none shadow-success`;
				disabledClasses = `text-success-normal border border-success-normal shadow-none`;
			} else {
				appearanceClasses = `bg-success-light text-white hover:bg-success-normal shadow-success`;
				disabledClasses = `bg-success-lightest text-white shadow-none`;
			}
			break;
		case "warning":
			if (appearance === "outline") {
				appearanceClasses = `border border-warning-normal text-warning-normal hover:text-white hover:bg-warning-light hover:border-none shadow-warning`;
				disabledClasses = `text-warning-normal border border-warning-normal shadow-none`;
			} else {
				appearanceClasses = `bg-warning-light text-white hover:bg-warning-normal shadow-warning`;
				disabledClasses = `bg-warning-lightest text-white shadow-none`;
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
