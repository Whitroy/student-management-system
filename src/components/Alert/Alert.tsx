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
	} else {
		appearanceClasses = `bg-${color}-400 text-white hover:bg-${color}-500 shadow-${color} `;
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
