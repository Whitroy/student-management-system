import React, { Dispatch } from "react";
import MenuItem from "./MeuItem";
import { FaHome } from "react-icons/fa";
import LinkContent from "./LinkContent";
import { IoIosApps, IoMdMap } from "react-icons/io";
import MenuList from "./MenuList";

interface Props {
	show: boolean;
	onClose: Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<Props> = ({ show, onClose }) => {
	return (
		<>
			<MenuList
				className={`transform transition-transform duration-300 ease-in-out ${
					show ? "translate-x-0 not-sr-only" : "-translate-x-full"
				}`}
			>
				<MenuItem title="Dashboard" Icon={FaHome}>
					<LinkContent to="/sales" title="Sales" />
					<LinkContent to="/analytics" title="Analytics" />
				</MenuItem>
				<MenuItem title="Apps" Icon={IoIosApps}>
					<LinkContent to="/chat" title="Chat" />
					<LinkContent to="/mailbox" title="Mailbox" />
				</MenuItem>
				<MenuItem title="Maps" Icon={IoMdMap} to="/maps" />
			</MenuList>
		</>
	);
};

SideBar.defaultProps = {};

export default React.memo(SideBar);
