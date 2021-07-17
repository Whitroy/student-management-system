import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface Props {
	grow: boolean;
}

const Dashboard: React.FC<Props> = ({ grow }) => {
	return (
		<div className="flex">
			<Transition
				show={grow}
				enter="transition-opacity duration-300 "
				enterFrom="opacity-100"
				enterTo="opacity-100"
				entered="opacity-100"
				leave="transition-opacity duration-300 "
				leaveFrom="opacity-100"
				leaveTo="opacity-100"
				as={Fragment}
			>
				<div className={"w-68 bg-gray-100"}></div>
			</Transition>
			<div className="bg-gray-100 w-full pt-28 px-2">
				<div className="w-52 h-52 bg-blue-300"></div>
				<div className="w-52 h-52 bg-blue-300"></div>
				<div className="w-52 h-52 bg-blue-300"></div>
				<div className="w-52 h-52 bg-blue-300"></div>
			</div>
		</div>
	);
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
