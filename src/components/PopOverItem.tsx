import React from "react";

interface Props {
	children: React.ReactNode;
}

const PopOverItem: React.FC<Props> = (props) => {
	return (
		<div className="flex justify-start items-center space-x-2">
			{props.children}
		</div>
	);
};

PopOverItem.defaultProps = {};

export default React.memo(PopOverItem);
