import { Transition } from "@headlessui/react";
import React, { Dispatch, Fragment } from "react";
import { Link } from "react-router-dom";

interface Props {
	show: boolean;
	onClose: Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<Props> = ({ show, onClose }) => {
	return (
		<Transition.Root show={show}>
			<Transition.Child
				enter="transition-transform duration-300 "
				enterFrom="-translate-x-full"
				enterTo="translate-x-0"
				leave="transition-transform duration-300 "
				leaveFrom="translate-x-0"
				leaveTo="-translate-x-full"
				as={Fragment}
			>
				<div className=" w-52 transform border-r border-gray-300 ease-in-out bg-gray-100 absolute top-0 bottom-0 left-0 ">
					<p className="mt-28">This is Side Bar.</p>
					<Link to="/recordings/batch/1/lecture/1" className="text-blue-500">
						Button 1
					</Link>
					<button>hi</button>
				</div>
			</Transition.Child>
		</Transition.Root>
	);
};

SideBar.defaultProps = {};

export default React.memo(SideBar);
