import React from "react";

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

	const barClasses = `bg-${color}-500`;
	return (
		<div className="w-full h-4 rounded-lg bg-gray-100 relative">
			<div
				className={
					"absolute h-4 shadow-lg rounded-lg transform transition-width ease-in-out duration-150 " +
					barClasses
				}
				style={{
					width: `${progressPercentage}%`,
				}}
			></div>
		</div>
	);
};

ProgressBar.defaultProps = {
	progressPercentage: 50,
	theme: "primary",
};

export default React.memo(ProgressBar);
