import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";
import ExpandableNavLink from "./ExpandableNavLink";
import MenuItem from "./MenuItem";

interface Props {
	children: React.ReactElement[];
	className?: string;
}

const MenuList: React.FC<Props> = ({ children, className }) => {
	children?.forEach((value) => {
		if (value.type !== MenuItem)
			throw new Error(
				`Link Component is expected as children but found ${value.type}`
			);
	});

	const [currentActive, setCurrentActive] = useState(-1);

	const handleCollapse = (index: number) => {
		if (index === currentActive) setCurrentActive(-1);
		else setCurrentActive(index);
	};

	const dispatch = useDispatch();
	const handleMenuClose = () => {
		dispatch({ type: "sidebar" });
	};

	const sideBarState = useAppSelector((state) => state.isSideBarOpen);

	return (
		<>
			<div
				className={
					" overflow-y-auto w-60 md:w-52 shadow-md bg-secondary-finest fixed z-40 top-0 bottom-0 left-0 md:pt-32 pt-8 px-4 md:z-10 " +
					className
				}
				style={{ scrollbarWidth: "none" }}
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
			<div
				className={`md:hidden bg-secondary-dark fixed inset-0 z-30 transition-opacity duration-300 ${
					sideBarState ? "opacity-70 w-full" : "opacity-0 w-0"
				} `}
				onClick={handleMenuClose}
			/>
		</>
	);
};

MenuList.defaultProps = {};

export default React.memo(MenuList);
