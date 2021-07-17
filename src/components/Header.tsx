import React from "react";

interface Props {}

const Header: React.FC<Props> = (props) => {
	return (
		<header className="fixed w-full z-30 h-14 bg-blue-200 top-14"></header>
	);
};

Header.defaultProps = {};

export default React.memo(Header);
