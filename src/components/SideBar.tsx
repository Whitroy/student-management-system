import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const SideBar: React.FC<Props> = (props) => {
	return (
		<div className="w-80 h-screen bg-gray-300">
			<p>This is Side Bar.</p>
			<Link to="/recordings/batch/1/lecture/1" className="text-blue-500">
				Go to Lecture-1 Batch-1 Recording
			</Link>
		</div>
	);
};

SideBar.defaultProps = {};

export default React.memo(SideBar);
