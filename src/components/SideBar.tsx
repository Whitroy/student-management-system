import { Transition } from "@headlessui/react";
import React, { Dispatch, Fragment } from "react";
import ExpandableNavLink from "./ExpandableNavLink";
import { FaHome } from "react-icons/fa";
import LinkContent from "./LinkContent";
import { IoIosApps, IoMdMap } from "react-icons/io";

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
				<div className=" w-52 transform border-r border-gray-300 ease-in-out bg-gray-100 fixed z-10 top-0 bottom-0 left-0 pt-32 px-4">
					<ExpandableNavLink
						title="Dashboard"
						icon={<FaHome className="w-full h-full" />}
					>
						<LinkContent to="/sales" title="Sales" />
						<LinkContent to="/analytics" title="Analytics" />
					</ExpandableNavLink>
					<ExpandableNavLink
						title="Apps"
						icon={<IoIosApps className="w-full h-full" />}
					>
						<LinkContent to="/chat" title="Chat" />
						<LinkContent to="/mailbox" title="Mailbox" />
					</ExpandableNavLink>
					<ExpandableNavLink
						title="Maps"
						icon={<IoMdMap className="w-full h-full" />}
						to="/maps"
					/>
				</div>
			</Transition.Child>
		</Transition.Root>
	);
};

SideBar.defaultProps = {};

export default React.memo(SideBar);
