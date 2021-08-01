import React from "react";
import H1 from "./Basic/H1";
import HeroIcon from "../Img/HeroImg.webp";
import PopOver from "./PopOver/PopOver";
import PopOverItem from "./PopOver/PopOverItem";
import { Link } from "react-router-dom";
import { FiUser, FiInbox } from "react-icons/fi";
import { HiLockClosed } from "react-icons/hi";
import { GoSignOut } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotifications, IoIosMail } from "react-icons/io";
import { logOut } from "../api/Auth.api";

interface Props {}

const NavBar: React.FC<Props> = (props) => {
	return (
		<nav className=" bg-black py-2.5 px-8 flex items-center justify-between">
			<div className="flex items-center justify-start space-x-2">
				<img src={HeroIcon} alt="" className="w-7 h-7" />
				<H1
					className="text-secondary-fine hidden md:inline-block"
					size="text-xl"
				>
					SMS
				</H1>
			</div>
			<div className="flex items-center justify-start space-x-4">
				<PopOver
					title={<IoIosMail className="w-7 h-7 text-white" />}
					sep={true}
				>
					<PopOverItem>
						<FiUser className="w-4 h-4 " />
						<Link to="/profile">Profile</Link>
					</PopOverItem>
					<PopOverItem>
						<FiInbox className="w-4 h-4 " />
						<Link to="/inbox">Inbox</Link>
					</PopOverItem>
					<PopOverItem>
						<HiLockClosed className="w-4 h-4" />
						<Link to="/lock-screen">Lock Screen</Link>
					</PopOverItem>
					<PopOverItem>
						<GoSignOut className="w-4 h-4" />
						<Link to="/signout">Sign Out</Link>
					</PopOverItem>
				</PopOver>
				<PopOver
					title={<IoIosNotifications className="w-7 h-7 text-white" />}
					sep={true}
				>
					<PopOverItem>
						<FiUser className="w-4 h-4 " />
						<Link to="/profile">Profile</Link>
					</PopOverItem>
					<PopOverItem>
						<FiInbox className="w-4 h-4 " />
						<Link to="/inbox">Inbox</Link>
					</PopOverItem>
					<PopOverItem>
						<HiLockClosed className="w-4 h-4" />
						<Link to="/lock-screen">Lock Screen</Link>
					</PopOverItem>
					<PopOverItem>
						<GoSignOut className="w-4 h-4" />
						<Link to="/signout">Sign Out</Link>
					</PopOverItem>
				</PopOver>
				<PopOver
					title={<FaUserCircle className="w-7 h-7 text-white" />}
					sep={true}
				>
					<PopOverItem>
						<FiUser className="w-4 h-4 " />
						<Link to="/dashboard/profile">Profile</Link>
					</PopOverItem>
					<PopOverItem>
						<FiInbox className="w-4 h-4 " />
						<Link to="/inbox">Inbox</Link>
					</PopOverItem>
					<PopOverItem>
						<HiLockClosed className="w-4 h-4" />
						<Link to="/lock-screen">Lock Screen</Link>
					</PopOverItem>
					<PopOverItem>
						<GoSignOut className="w-4 h-4" />
						<Link
							to=""
							onClick={() => {
								logOut();
								console.log("LogOut Successfully!");
								window.location.href = "/login";
							}}
						>
							Sign Out
						</Link>
					</PopOverItem>
				</PopOver>
			</div>
		</nav>
	);
};

NavBar.defaultProps = {};

export default React.memo(NavBar);
