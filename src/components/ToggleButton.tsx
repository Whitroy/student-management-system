import { Switch } from "@headlessui/react";
import React, { Dispatch, Fragment, SetStateAction } from "react";

interface Props {
	label: string;
	className?: string;
	checked: boolean;
	onChange: Dispatch<SetStateAction<boolean>>;
}

const ToggleButton: React.FC<Props> = ({
	label,
	className,
	checked: enable,
	onChange: setEnable,
}) => {
	return (
		<Switch.Group as={Fragment}>
			<div className={className}>
				<Switch.Label className="text-secondary-dark text-sm font-medium">
					{label}
				</Switch.Label>
				<Switch
					type="button"
					checked={enable}
					onChange={setEnable}
					className={`${
						enable ? "bg-primary-normal" : "bg-secondary-fine"
					} relative inline-flex items-center h-4 rounded-full w-7 ml-2 focus:outline-none focus:ring-2`}
				>
					<span className="sr-only"></span>
					<span
						className={`${
							enable
								? "translate-x-3.5  bg-white"
								: "translate-x-1  bg-primary-normal "
						} inline-block w-2.5 h-2.5 rounded-full transform transition ease-in-out duration-200`}
					/>
				</Switch>
			</div>
		</Switch.Group>
	);
};

ToggleButton.defaultProps = {
	className: "",
};

export default React.memo(ToggleButton);
