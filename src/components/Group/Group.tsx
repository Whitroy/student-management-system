import React from "react";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import GroupModel from "../../models/Group.model";
import { groupActions } from "../../store/binds/group.bind";
import H1 from "../Basic/H1";
import P from "../Basic/P";

interface Props extends GroupModel {
	index?: number;
	className?: string;
	showDefault?: boolean;
}

const Group: React.FC<Props> = ({
	id,
	name,
	description,
	group_image_url: url,
	index,
	className,
	showDefault,
}) => {
	const history = useHistory();
	const handleClick = useCallback(() => {
		if (showDefault) return;
		groupActions.selectedGroupId(id);
		history.push("/dashboard/groups/group/" + id);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div
			className={`w-full px-4 py-6 shadow-sm flex items-center justify-start space-x-6 ${
				index! & 1 ? " bg-secondary-finest" : " bg-white"
			} ${className} ${showDefault ? "animate-pulse" : ""} `}
		>
			<img
				src={
					showDefault
						? ""
						: url
						? url
						: "https://sensilab.monash.edu/new-sensilab/wp-content/uploads/2017/08/4949794-random-image.jpg"
				}
				alt=""
				className={`shadow w-10 h-10 rounded-full object-cover ${
					showDefault ? "animate-pulse" : ""
				}`}
			/>
			<div className="w-full">
				<div className="flex items-center justify-between">
					<div onClick={handleClick}>
						<H1
							size="text-xl"
							className={`text-primary-normal ${
								showDefault
									? `animate-pulse h-7  rounded-sm w-24 ${
											index! & 1 ? "bg-white" : "bg-secondary-finest"
									  }`
									: "cursor-pointer hover:text-primary-light"
							}`}
						>
							{!showDefault && name}
						</H1>
					</div>
					<H1
						size="text-sm"
						className={`text-secondary-dark${
							showDefault
								? `animate-pulse h-7  rounded-sm w-4 ${
										index! & 1 ? "bg-white" : "bg-secondary-finest"
								  }`
								: ""
						}`}
					>
						{!showDefault && id}
					</H1>
				</div>
				<P
					className={` font-medium text-sm mt-2 text-secondary-dark${
						showDefault
							? `animate-pulse h-7  rounded-sm w-full ${
									index! & 1 ? "bg-white" : "bg-secondary-finest"
							  }`
							: ""
					}`}
				>
					{!showDefault && description}
				</P>
			</div>
		</div>
	);
};

Group.defaultProps = {
	index: 0,
	className: "",
	showDefault: false,
};

export default React.memo(Group);
