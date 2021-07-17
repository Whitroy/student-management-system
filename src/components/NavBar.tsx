import React from "react";

interface Props {}

const NavBar: React.FC<Props> = (props) => {
	return <nav className="fixed w-full z-30 h-14 bg-black"></nav>;
};

NavBar.defaultProps = {};

export default React.memo(NavBar);
