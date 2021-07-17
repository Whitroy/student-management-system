import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import H2 from "./H2";
import Item from "./Item";
import { MdKeyboardArrowDown } from "react-icons/md";

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
			<Menu>
				{({ open }) => (
					<>
						<Menu.Button
							className={`border border-gray-400 rounded-md w-24 py-1.5 text-left px-3 bg-white text-md flex justify-between ${
								!open ? "items-end" : "items-center"
							} `}
						>
							<H2>{currentActive}</H2>

							<MdKeyboardArrowDown
								className="w-4 h-4"
								style={{
									transform: `rotateZ(${open ? 180 : 0}deg)`,
								}}
							/>
						</Menu.Button>
						<Menu.Items className="flex flex-col bg-white w-32 absolute mt-1 -left-8 rounded-md shadow-lg py-3 space-y-2">
							{children.map((item, index) => (
								<Menu.Item key={item.props.name + index}>
									{({ active }) => (
										<Link
											to={item.props.to}
											key={item.props.name + index}
											className={`${
												active && "text-blue-500 bg-gray-50"
											} px-2 py-1.5 `}
										>
											{item.props.name}
											{active && setCurrentActive(item.props.name)}
										</Link>
									)}
								</Menu.Item>
							))}
						</Menu.Items>
					</>
				)}
			</Menu>
		</div>
	);
};

DropDown.defaultProps = {};

export default React.memo(DropDown);
