import React, { useState } from "react";
import ExpandableNavLink from "./ExpandableNavLink";
import MenuItem from "./MeuItem";

interface Props {
	children: React.ReactElement[];
	className?: string;
}

const MenuList: React.FC<Props> = ({ children, className }) => {
	children?.forEach((value) => {
		if (value.type !== MenuItem)
			throw new Error(
				`Link Component is expected as childreb but found ${value.type}`
			);
	});

	const [currentActive, setCurrentActive] = useState(-1);

	const handleCollapse = (index: number) => {
		if (index === currentActive) setCurrentActive(-1);
		else setCurrentActive(index);
	};

	return (
		<div
			className={
				" w-52 border-r-4 border-gray-200 bg-gray-100 fixed z-10 top-0 bottom-0 left-0 pt-32 px-4 " +
				className
			}
		>
			{children.map((value, index) => (
				<ExpandableNavLink
					to={value.props.to}
					collapse={index === currentActive}
					Icon={value.props.Icon}
					title={value.props.title}
					handleCollapse={handleCollapse}
					index={index}
					key={index}
				>
					{value.props.children}
				</ExpandableNavLink>
			))}
		</div>
	);
};

MenuList.defaultProps = {};

export default React.memo(MenuList);
