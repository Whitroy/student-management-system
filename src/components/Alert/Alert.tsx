import React from "react";
import P from "../P";
import { HiX } from "react-icons/hi";

interface Props {
	theme?: "success" | "primary" | "warning" | "danger" | "secondary";
	children: string;
	appearance?: "outline" | "solid";
	handleClose: () => void;
}

const Alert: React.FC<Props> = ({
	theme,
	children,
	appearance,
	handleClose,
}) => {
	let appearanceClasses = "";

	switch (theme) {
		case "primary":
			if (appearance === "outline") {
				appearanceClasses = `border border-primary-normal text-primary-normal hover:text-white hover:bg-primary-light hover:border-none shadow-primary`;
			} else {
				appearanceClasses = `bg-primary-light text-white hover:bg-primary-normal shadow-primary `;
			}
			break;
		case "secondary":
			if (appearance === "outline") {
				appearanceClasses = `border border-secondary-normal text-secondary-normal hover:text-white hover:bg-secondary-light hover:border-none shadow-secondary`;
			} else {
				appearanceClasses = `bg-secondary-light text-white hover:bg-secondary-normal shadow-secondary `;
			}
			break;
		case "danger":
			if (appearance === "outline") {
				appearanceClasses = `border border-danger-normal text-danger-normal hover:text-white hover:bg-danger-light hover:border-none shadow-danger`;
			} else {
				appearanceClasses = `bg-danger-light text-white hover:bg-danger-normal shadow-danger `;
			}
			break;
		case "success":
			if (appearance === "outline") {
				appearanceClasses = `border border-success-normal text-success-normal hover:text-white hover:bg-success-light hover:border-none shadow-success`;
			} else {
				appearanceClasses = `bg-success-light text-white hover:bg-success-normal shadow-success `;
			}
			break;
		case "warning":
			if (appearance === "outline") {
				appearanceClasses = `border border-warning-normal text-warning-normal hover:text-white hover:bg-warning-light hover:border-none shadow-warning`;
			} else {
				appearanceClasses = `bg-warning-light text-white hover:bg-warning-normal shadow-warning `;
			}
			break;
	}

	return (
		<div
			className={`${appearanceClasses} rounded-md p-4 flex items-center justify-between`}
		>
			<P>{children}</P>
			<button
				className="w-6 h-6  animate-pulse focus:outline-none focus:ring-2"
				onClick={handleClose}
			>
				<HiX className="w-full h-full" />
			</button>
		</div>
	);
};

Alert.defaultProps = {
	theme: "primary",
};

export default React.memo(Alert);
