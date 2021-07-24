import React from "react";

interface Props {
	className?: string;
	children: React.ReactNode;
}

const H2: React.FC<Props> = ({ className, children }) => {
	return (
		<h2 className={" text-secondary-darkest text-sm " + className}>
			{children}
		</h2>
	);
};

H2.defaultProps = {};

export default React.memo(H2);
