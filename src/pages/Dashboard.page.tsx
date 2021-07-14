import React from "react";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
	return <div>This is a dashboard Page</div>;
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
