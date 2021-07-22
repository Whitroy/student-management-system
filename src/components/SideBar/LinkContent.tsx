import React from "react";

interface Props {
	title: string;
	to: string;
}

const LinkContent: React.FC<Props> = (props) => {
	return <></>;
};

LinkContent.defaultProps = {};

export default React.memo(LinkContent);
