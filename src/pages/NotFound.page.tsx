import React from "react";

interface Props {}

const NotFound: React.FC<Props> = (props) => {
	console.log("Not Found Page render");
	return <div>404! Page Not Found</div>;
};

NotFound.defaultProps = {};

export default React.memo(NotFound);
