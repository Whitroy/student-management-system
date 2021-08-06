import React from "react";
import { useParams } from "react-router-dom";

interface Props {}

const Recordings: React.FC<Props> = (props) => {
	console.log("Recordings Page render");
	const { batchNumber, lectureNumber } = useParams<any>();
	return (
		<div>
			<p>
				Showing Lecture {lectureNumber} of Batch {batchNumber}
			</p>
		</div>
	);
};

Recordings.defaultProps = {};

export default React.memo(Recordings);
