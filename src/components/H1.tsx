import React, { ReactNode } from "react";

interface Props {
	className?: string;
	children: ReactNode;
}

const H1: React.FC<Props> = (props) => {
	return (
		<h1 className={" text-4xl font-semibold " + props.className}>
			{props.children}
		</h1>
	);
};

H1.defaultProps = {
	className: "",
};

export default React.memo(H1);
