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

	if (appearance === "outline") {
		appearanceClasses = `border border-${theme}-normal text-${theme}-normal hover:text-white hover:bg-${theme}-light hover:border-none shadow-${theme}`;
	} else {
		appearanceClasses = `bg-${theme}-light text-white hover:bg-${theme}-normal shadow-${theme} `;
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
