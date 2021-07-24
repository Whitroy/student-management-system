import React from "react";
import P from "../P";

interface Props {
	progressPercentage?: number;
	theme?: "success" | "primary" | "warning" | "danger" | "secondary";
}

const ProgressBar: React.FC<Props> = ({ progressPercentage, theme }) => {
	const min = (a: number, b: number) => (a > b ? b : a);
	const max = (a: number, b: number) => (a > b ? a : b);

	progressPercentage = min(max(0.5, progressPercentage!), 100);

	return (
		<div className="w-full h-4 rounded-lg bg-gray-100 relative">
			<div
				className={`absolute h-4 shadow-lg rounded-lg transform transition-width ease-in-out duration-150 bg-${theme}-light`}
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
