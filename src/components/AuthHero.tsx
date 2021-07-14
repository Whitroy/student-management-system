import React from "react";

interface Props {}

const AuthHero: React.FC<Props> = (props) => {
	return (
		<div className="w-1/2 h-screen bg-black text-white">
			This is Auth Hero Icon Holder
		</div>
	);
};

AuthHero.defaultProps = {};

export default React.memo(AuthHero);
