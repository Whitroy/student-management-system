import React from "react";
import P from "../P";

interface Props {
	progressPercentage?: number;
	theme?: "success" | "primary" | "warning" | "danger" | "secondary";
}

const ProgressBar: React.FC<Props> = ({ progressPercentage, theme }) => {
	const min = (a: number, b: number) => (a > b ? b : a);
	const max = (a: number, b: number) => (a > b ? a : b);

	let color = "";

	progressPercentage = min(max(0.5, progressPercentage!), 100);

	switch (theme) {
		case "success":
			color = "bg-green-500";
			break;

		case "danger":
			color = "bg-red-500";
			break;

		case "warning":
			color = "bg-yellow-500";
			break;

		case "secondary":
			color = "bg-gray-500";
			break;

		case "primary":
			color = "bg-blue-500";
			break;
	}

	return (
		<div className="w-full h-4 rounded-lg bg-gray-100 relative">
			<div
				className={
					"absolute h-4 shadow-lg rounded-lg transform transition-width ease-in-out duration-150 " +
					color
				}
				style={{
					width: `${progressPercentage}%`,
				}}
			>
				<P className="w-10 text-white m-auto text-center text-xs font-bold">
					{progressPercentage}%
				</P>
			</div>
		</div>
	);
};

ProgressBar.defaultProps = {
	progressPercentage: 50,
	theme: "primary",
};

export default React.memo(ProgressBar);
