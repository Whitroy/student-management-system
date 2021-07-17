import React from "react";
import HeroImg from "../Img/HeroImg.webp";

interface Props {}

const AuthHero: React.FC<Props> = (props) => {
	return (
		<div className="h-screen bg-gray-800 md:block flex-1 hidden text-white">
			<img src={HeroImg} className=" w-3/4 h-3/4 m-auto mt-20" alt="" />
		</div>
	);
};

AuthHero.defaultProps = {};

export default React.memo(AuthHero);
