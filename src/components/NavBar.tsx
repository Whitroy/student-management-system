import React from "react";

interface Props {}

const NavBar: React.FC<Props> = (props) => {
	return <nav className="h-12 bg-black"></nav>;
};

NavBar.defaultProps = {};

export default React.memo(NavBar);
