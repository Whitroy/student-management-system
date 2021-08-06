import React from "react";
import MenuItem from "./MenuItem";
import { FaHome } from "react-icons/fa";
import LinkContent from "./LinkContent";
import { IoIosApps, IoMdMap } from "react-icons/io";
import MenuList from "./MenuList";
import { useAppSelector } from "../../store/store";
import { sideBarSelector } from "../../store/reducers/ui.reducer";

interface Props {}

const SideBar: React.FC<Props> = () => {
	const sideBarState = useAppSelector(sideBarSelector());
	return (
		<>
			<MenuList
				className={` transform transition-transform duration-300 ease-in-out ${
					sideBarState ? "translate-x-0 not-sr-only" : "-translate-x-full"
				}`}
			>
				<MenuItem title="Dashboard" Icon={FaHome}>
					<LinkContent to="/dashboard/groups" title="Groups" />
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
