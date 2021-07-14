import React from "react";

interface Props {}

const App: React.FC<Props> = (props) => {
	return <div className="bg-red-500">Hello World!</div>;
};

App.defaultProps = {};

export default React.memo(App);
