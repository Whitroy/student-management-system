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
		case "success":
			if (appearance === "outline") {
				appearanceClasses = `border border-green-500 text-green-500 hover:text-white hover:bg-green-400 hover:border-none shadow-green`;
			} else {
				appearanceClasses = `bg-green-400 text-white hover:bg-green-500 shadow-green `;
			}
			break;

		case "danger":
			if (appearance === "outline") {
				appearanceClasses = `border border-red-500 text-red-500 hover:text-white hover:bg-red-400 hover:border-none shadow-red`;
			} else {
				appearanceClasses = `bg-red-400 text-white hover:bg-red-500 shadow-red `;
			}
			break;

		case "warning":
			if (appearance === "outline") {
				appearanceClasses = `border border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-400 hover:border-none shadow-yellow`;
			} else {
				appearanceClasses = `bg-yellow-400 text-white hover:bg-yellow-500 shadow-yellow `;
			}
			break;

		case "secondary":
			if (appearance === "outline") {
				appearanceClasses = `border border-gray-500 text-gray-500 hover:text-white hover:bg-gray-400 hover:border-none shadow-gray`;
			} else {
				appearanceClasses = `bg-gray-400 text-white hover:bg-gray-500 shadow-gray `;
			}
			break;

		case "primary":
			if (appearance === "outline") {
				appearanceClasses = `border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-400 hover:border-none shadow-blue`;
			} else {
				appearanceClasses = `bg-blue-400 text-white hover:bg-blue-500 shadow-blue `;
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
