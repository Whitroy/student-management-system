import React from "react";
import P from "../P";

interface Props {
	progress?: number;
	theme?: "success" | "primary" | "warning" | "danger" | "secondary";
}

const ProgressBar: React.FC<Props> = ({ progress, theme }) => {
	const min = (a: number, b: number) => (a > b ? b : a);
	const max = (a: number, b: number) => (a > b ? a : b);

	if (progress! < 0 && progress! > 100) {
		console.error(`Progress must be b/w 0 and 100 but given ${progress} `);
	}
	progress = min(max(0.5, progress!), 100);

	let color = "";
	switch (theme) {
		case "primary":
			color = "bg-primary-normal";
			break;
		case "secondary":
			color = "bg-secondary-normal";
			break;
		case "danger":
			color = "bg-danger-normal";
			break;
		case "success":
			color = "bg-success-normal";
			break;
		case "warning":
			color = "bg-warning-normal";
			break;
	}

	return (
		<div className="w-full h-4 rounded-lg bg-gray-100 relative">
			<div
				className={`absolute h-4 shadow-lg rounded-lg transform transition-width ease-in-out duration-150 bg-${theme}-light`}
				style={{
					width: `${progress}%`,
				}}
			>
				<P className="w-10 text-white m-auto text-center text-xs font-bold">
					{progress}%
				</P>
			</div>
		</div>
	);
};

ProgressBar.defaultProps = {
	progress: 50,
	theme: "primary",
};

export default React.memo(ProgressBar);
