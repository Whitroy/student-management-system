import React from "react";
import { Group as GroupInterface } from "../../API/Fetch.api";
import H1 from "../H1";
import P from "../P";

interface Props extends GroupInterface {
	index?: number;
	className?: string;
}

const Group: React.FC<Props> = ({
	id,
	name,
	description,
	group_image_url: url,
	index,
	className,
}) => {
	return (
		<div
			className={`w-full px-4 py-6 shadow-sm flex items-center justify-start space-x-6 ${
				index! & 1 ? " bg-secondary-finest" : " bg-white"
			} ${className}`}
		>
			<img
				src={
					url
						? url
						: "https://sensilab.monash.edu/new-sensilab/wp-content/uploads/2017/08/4949794-random-image.jpg"
				}
				alt=""
				className="shadow w-10 h-10 rounded-full object-cover"
			/>
			<div className="w-full">
				<div className="flex items-center justify-between">
					<H1 size="text-xl" className="text-primary-normal">
						{name}
					</H1>
					<H1 size="text-sm" className=" text-secondary-dark">
						{id}
					</H1>
				</div>
				<P className=" font-medium text-sm mt-2 text-secondary-dark">
					{description}
				</P>
			</div>
		</div>
	);
};

Group.defaultProps = {
	index: 0,
	className: "",
};

export default React.memo(Group);
