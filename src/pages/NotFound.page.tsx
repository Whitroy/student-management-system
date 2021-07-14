import React from "react";

interface Props {}

const NotFound: React.FC<Props> = (props) => {
	return <div>404! Page Not Found</div>;
};

NotFound.defaultProps = {};

export default React.memo(NotFound);
