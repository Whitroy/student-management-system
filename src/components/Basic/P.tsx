import React, { ReactNode } from "react";

interface Props {
	className?: string;
	children: ReactNode;
}

const P: React.FC<Props> = (props) => {
	return (
		<p className={" text-md font-semibold " + props.className}>
			{props.children}
		</p>
	);
};

P.defaultProps = {};

export default React.memo(P);
