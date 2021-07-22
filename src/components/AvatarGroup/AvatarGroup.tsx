import React, { ReactElement } from "react";
import Avatar from "../Avatar/Avatar";
import P from "../P";

interface Props {
	children: ReactElement[];
}

const AvatarGroup: React.FC<Props> = ({ children }) => {
	// children.forEach((value) => {
	// 	if (value.type !== Avatar)
	// 		throw new Error(`Avatar is expected as child but found ${value.type}`);
	// });

	const min = (a: number, b: number) => (a > b ? b : a);

	const size = children.length;

	let avatars: ReactElement[] = [];
	for (let index = 0; index < min(4, children.length); index++) {
		avatars.push(
			<Avatar
				{...children[index].props}
				{...children[index].key}
				className="transform transition-transform hover:-translate-y-1 translate-y-0 duration-200"
			/>
		);
	}

	return (
		<div className="px-2 py-3 flex items-center justify-start -space-x-3 w-68 relative">
			{avatars}
			{size > 4 && (
				<P className="absolute bg-white text-blue-500 rounded-full p-1 shadow-md text-sm right-0">
					+{size - 4} more
				</P>
			)}
		</div>
	);
};

AvatarGroup.defaultProps = {};

export default React.memo(AvatarGroup);
