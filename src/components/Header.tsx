import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import DropDown from "./DropDown/DropDown";
import Item from "./DropDown/Item";
import H2 from "./Basic/H2";
import { useAppSelector } from "../store/store";
import { uiAction } from "../store/actions/ui.action";
import { meSelector } from "../store/selectors/user.selectors";

interface Props {}

const Header: React.FC<Props> = () => {
	const user = useAppSelector(meSelector);
	const handleClick = () => {
		uiAction.sideBarToggle();
	};
	return (
		<header className=" p-2 px-8 bg-secondary-finest shadow-md flex items-center justify-between">
			<div className="flex items-center justify-start">
				<div className="hover:bg-secondary-fine p-1 rounded-full">
					<HiOutlineMenu
						className="w-5 h-5"
						onClick={handleClick}
						cursor="pointer"
					/>
				</div>
				<H2 className=" ml-3 font-semibold">
					Welcome!{" "}
					<span className="text-primary-dark"> {user!.first_name} </span>
				</H2>
			</div>
			<DropDown title="Settings">
				<Item to="/dashboard/setting" name="Settings" />
				<Item to="/dashboard/mail" name="Mail" />
				<Item to="/dashboard/print" name="Print" />
				<Item to="/dashboard/downloads" name="Downloads" />
				<Item to="/dashboard/share" name="Share" />
			</DropDown>
		</header>
	);
};

Header.defaultProps = {};

export default React.memo(Header);
