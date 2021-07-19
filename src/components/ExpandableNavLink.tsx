import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiChevronUp } from "react-icons/hi";
import H2 from "./H2";
import LinkContent from "./LinkContent";

interface Props {
	title: string;
	icon: React.ReactNode;
	children?: React.ReactElement[];
	to?: string;
}

const ExpandableNavLink: React.FC<Props> = ({ title, icon, children, to }) => {
	children?.forEach((value) => {
		if (value.type !== LinkContent)
			throw new Error(
				`Link Component is expected as childreb but found ${value.type}`
			);
	});
	const [collapse, setCollapse] = useState(true);

	const handleClick = () => {
		if (!to) {
			setCollapse((open) => !open);
		}
	};

	return (
		<div>
			<NavLink
				to={to ? to : `${title.toLowerCase()}`}
				className="block hover:bg-gray-300 rounded-md shadow"
				onClick={handleClick}
				activeClassName=" bg-white "
			>
				<div className="flex items-center justify-between py-2 px-3 ">
					<div className="flex items-center justify-start space-x-2">
						<div className="w-5 h-5">{icon}</div>
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
					className={`p-2 flex flex-col items-start justify-between ${
						collapse ? " h-0 overflow-hidden " : " max-h-full "
					}`}
				>
					{children?.map((value, index) => {
						return (
							<NavLink
								to={value.props.to}
								key={index}
								className=" ml-1/5 p-1 text-sm font-medium my-1 hover:text-blue-500"
								activeClassName="text-blue-500"
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
