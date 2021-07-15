import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
	to: string;
	className?: string;
	children: ReactNode;
}

const RouteLink: React.FC<Props> = ({ className, to, children }) => {
	return (
		<Link className={" text-blue-500 " + className} to={to}>
			{children}
		</Link>
	);
};

RouteLink.defaultProps = {
	className: "",
};

export default React.memo(RouteLink);
