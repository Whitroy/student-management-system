import React from "react";

interface Props {
	to: string;
	name: string;
}

const Item: React.FC<Props> = (props) => {
	return <></>;
};

Item.defaultProps = {};

export default React.memo(Item);
