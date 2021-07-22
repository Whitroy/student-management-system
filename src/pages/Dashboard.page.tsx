import React from "react";

interface Props {
	grow: boolean;
}

const Dashboard: React.FC<Props> = ({ grow }) => {
	return (
		<div className="flex">
			<div
				className={` bg-gray-100 transition-width duration-500 ease-in-out ${
					grow ? "w-68" : "w-0"
				}`}
			></div>
			<div className="bg-gray-100 w-full pt-28 px-2">
				<div className="w-full rounded-lg shadow-md h-screen bg-gray-200 p-4">
					Dashboard Content
				</div>
			</div>
		</div>
	);
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
