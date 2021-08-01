import React from "react";
import { NavLink } from "react-router-dom";
import { HiChevronUp } from "react-icons/hi";
import H2 from "../Basic/H2";
import LinkContent from "./LinkContent";
import { IconType } from "react-icons";

interface Props {
	title: string;
	Icon: IconType;
	children?: React.ReactElement[];
	to?: string;
	collapse: boolean;
	index: number;
	handleCollapse: (index: number) => void;
}

const ExpandableNavLink: React.FC<Props> = ({
	title,
	Icon,
	children,
	to,
	collapse,
	index,
	handleCollapse,
}) => {
	children?.forEach((value) => {
		if (value.type !== LinkContent)
			throw new Error(
				`Link Component is expected as children but found ${value.type}`
			);
	});

	const handleClick = () => {
		if (!to) {
			handleCollapse(index);
		}
	};

	const listSize = children?.length;

	return (
		<div>
			<NavLink
				to={to && to !== "" ? to : "#"}
				className="block hover:bg-secondary-lightest rounded-md hover:shadow"
				onClick={handleClick}
				activeClassName=" bg-white shadow "
			>
				<div className="flex items-center justify-between py-3 px-3 md:py-2  ">
					<div className="flex items-center justify-start space-x-2">
						<Icon className="w-5 h-5" />
						<H2 className=" text-base font-semibold ">{title}</H2>
					</div>
					{!to && (
						<HiChevronUp
							className="w-4 h-4 transform duration-150"
							style={{
								transform: `rotateZ(${collapse ? 180 : 0}deg)`,
							}}
						/>
					)}
				</div>
			</NavLink>
			{!to && (
				<div
					className={`p-2 flex overflow-hidden flex-col items-start justify-between  transition-height duration-500 transform ease-in-out`}
					style={{
						height: collapse ? `${listSize! * 40}px` : "0px",
					}}
				>
					{children?.map((value, index) => {
						return (
							<NavLink
								to={value.props.to}
								key={index}
								className=" ml-1/5 p-1 text-sm font-medium my-1 hover:text-primary-normal"
								activeClassName="text-primary-normal"
							>
								&#8226; {value.props.title}
							</NavLink>
						);
					})}
				</div>
			)}
		</div>
	);
};

ExpandableNavLink.defaultProps = {};

export default React.memo(ExpandableNavLink);
