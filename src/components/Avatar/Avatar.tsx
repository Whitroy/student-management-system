import React from "react";

interface Props {
	showOnline?: boolean;
	online?: boolean;
	src?: string;
	appearance?: "rounded" | "default";
	className?: string;
}

const Avatar: React.FC<Props> = ({
	showOnline,
	online,
	appearance,
	src,
	className,
}) => {
	return (
		<div
			className={`bg-white shadow-sm relative w-16 h-16 ${
				appearance === "rounded" ? "rounded-full" : "rounded-md"
			} ${className}`}
		>
			<img
				alt="Avatar"
				src={src}
				className="object-cover rounded-full border-2 border-white "
			/>
			{showOnline && (
				<div
					className={`w-4 h-4 rounded-full border-2 absolute ${
						appearance === "rounded" ? "bottom-0 right-1" : "-bottom-1 -right-1"
					} border-white ${online ? "bg-success-dark" : "bg-secondary-finest"}`}
				/>
			)}
		</div>
	);
};

Avatar.defaultProps = {
	showOnline: true,
	online: false,
	appearance: "default",
	className: "",
	src:
		"https://thumbs.dreamstime.com/b/default-avatar-man-to-social-user-vector-illustration-default-avatar-man-to-social-user-109538868.jpg",
};

export default React.memo(Avatar);
