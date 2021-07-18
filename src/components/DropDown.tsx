import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import H2 from "./H2";
import Item from "./Item";
import { HiChevronUp } from "react-icons/hi";

interface Props {
	title: string;
	children: React.ReactElement[];
}

const DropDown: React.FC<Props> = ({ title, children }) => {
	children.forEach((item) => {
		if (item.type !== Item)
			throw new Error(`Item type is needed and found ${item.type}`);
	});

	const [currentActive, setCurrentActive] = useState(title);

	return (
		<div className="relative text-sm">
			<Menu as={Fragment}>
				{({ open }) => (
					<>
						<Menu.Button className="border border-gray-400 rounded-md w-24 py-1.5 text-left px-3 bg-white text-md flex justify-between items-center ">
							<H2>{currentActive}</H2>

							<HiChevronUp
								className="w-4 h-4 duration-100 transform "
								style={{
									transform: `rotateZ(${open ? 0 : 180}deg)`,
								}}
							/>
						</Menu.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-300"
							enterFrom="opacity-0 translate-y-4"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-4"
						>
							<Menu.Items className="flex flex-col transform bg-white w-32 absolute mt-1 -left-8 rounded-md shadow-lg py-3 space-y-2">
								{children.map((item, index) => (
									<Menu.Item key={item.props.name + index} as={Fragment}>
										{({ active }) => {
											if (active) setCurrentActive(item.props.name);
											return (
												<Link
													to={item.props.to}
													className={`${
														active && "text-blue-500 bg-gray-50"
													} px-2 py-1.5 `}
												>
													{item.props.name}
												</Link>
											);
										}}
									</Menu.Item>
								))}
							</Menu.Items>
						</Transition>
					</>
				)}
			</Menu>
		</div>
	);
};

DropDown.defaultProps = {};

export default React.memo(DropDown);
