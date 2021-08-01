import React from "react";

interface Props {
	showOnline?: boolean;
	online?: boolean;
	src?: string;
	appearance?: "rounded" | "default";
	className?: string;
	size?: "small" | "large" | "extraLarge";
}

const Avatar: React.FC<Props> = ({
	showOnline,
	online,
	appearance,
	src,
	className,
	size,
}) => {
	let sizeClass = "";
	let statusSizeClass = "";
	let statusPos = "";
	switch (size) {
		case "large":
			sizeClass = "w-16 h-16";
			statusSizeClass = "w-4 h-4";
			statusPos = "bottom-0 right-1";
			break;
		case "extraLarge":
			sizeClass = "w-28 h-28";
			statusSizeClass = "w-5 h-5";
			statusPos = "bottom-1 right-2";
			break;
		case "small":
			sizeClass = "w-10 h-10";
			statusSizeClass = "w-2.5 h-2.5";
			statusPos = "bottom-0 right-0";
			break;
	}

	return (
		<div
			className={`bg-white shadow-sm relative ${sizeClass} ${
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
					className={`${statusSizeClass} rounded-full border-2 absolute ${
						appearance === "rounded"
							? statusPos
							: size === "small"
							? "-bottom-0.5 -right-0.5"
							: "-bottom-1 -right-1"
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
	size: "large",
	src:
		"https://thumbs.dreamstime.com/b/default-avatar-man-to-social-user-vector-illustration-default-avatar-man-to-social-user-109538868.jpg",
};

export default React.memo(Avatar);
