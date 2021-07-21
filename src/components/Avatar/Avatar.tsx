import React from "react";

interface Props {
	showOnline?: boolean;
	online?: boolean;
	appearance?: "rounded" | "default";
}

const Avatar: React.FC<Props> = ({ showOnline, online, appearance }) => {
	return (
		<div
			className={`border-2 bg-white shadow-sm relative border-black w-16 h-16 ${
				appearance === "rounded" ? "rounded-full" : "rounded-md"
			} object-cover transform transition-transform hover:-translate-y-1 translate-y-0 duration-200`}
		>
			<img alt="" src="" />
			{showOnline && (
				<div
					className={`w-4 h-4 rounded-full border-2 absolute ${
						appearance === "rounded" ? "bottom-0 right-1" : "-bottom-1 -right-1"
					} border-white ${online ? "bg-green-600" : "bg-gray-100"}`}
				/>
			)}
		</div>
	);
};

Avatar.defaultProps = {
	showOnline: true,
	online: false,
	appearance: "default",
};

export default React.memo(Avatar);
