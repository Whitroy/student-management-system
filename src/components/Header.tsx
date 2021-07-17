import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import DropDown from "../components/DropDown";
import Item from "../components/Item";
import H2 from "./H2";

interface Props {
	handleMenuClick: () => void;
}

const Header: React.FC<Props> = ({ handleMenuClick }) => {
	return (
		<header className=" p-2 px-8 bg-gray-50 shadow-md flex items-center justify-between">
			<div className="flex items-center justify-start">
				<div className="hover:bg-gray-200 p-1 rounded-full">
					<HiOutlineMenu
						className="w-5 h-5"
						onClick={handleMenuClick}
						cursor="pointer"
					/>
				</div>
				<H2 className=" ml-3">Dashboard / Analytics</H2>
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
