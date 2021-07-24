import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import PopOverItem from "./PopOverItem";

interface Props {
	title: React.ReactNode;
	sep?: boolean;
	children: React.ReactElement[];
}

const PopOver: React.FC<Props> = ({ title, sep, children }) => {
	children.forEach((value) => {
		if (value.type !== PopOverItem)
			throw new Error(
				`Child can be of type PopOverItem or PopOverTitle, found  ${value.type}`
			);
	});

	return (
		<Popover className="relative ">
			<Popover.Button>{title}</Popover.Button>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-300"
				enterFrom="opacity-0 translate-y-4"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-300"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-4"
			>
				<Popover.Panel className="absolute z-10 -right-3 top-10 transform">
					<div
						className="absolute z-20 bg-white h-4 w-4 right-4 -top-3 shadow-lg "
						style={{
							clipPath: "polygon(45% 0%, 0% 90%, 90% 90%)",
						}}
					></div>
					<div className="flex bg-white p-4 space-y-3 flex-col items-start justify-start rounded-lg shadow-lg min-w-max">
						{children.map((item, index) => (
							<div key={index} className="w-full">
								<div className="hover:text-primary-normal">{item}</div>
								{sep && <hr className="my-1 w-full text-secondary-lightest" />}
							</div>
						))}
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

PopOver.defaultProps = {
	sep: false,
};

export default React.memo(PopOver);
