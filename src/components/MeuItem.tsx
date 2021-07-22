import React from "react";
import { IconType } from "react-icons";
import LinkContent from "./LinkContent";

interface Props {
	title: string;
	Icon: IconType;
	children?: React.ReactElement[];
	to?: string;
}

const MeuItem: React.FC<Props> = ({ children }) => {
	children?.forEach((value) => {
		if (value.type !== LinkContent)
			throw new Error(
				`Link Component is expected as childreb but found ${value.type}`
			);
	});
	return <></>;
};

MeuItem.defaultProps = {};

export default React.memo(MeuItem);
