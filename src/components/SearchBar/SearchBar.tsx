import React from "react";
import { InputHTMLAttributes } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchBar: React.FC<Props> = ({ className, ...rest }) => {
	return (
		<div className="rounded-md mb-4 max-w-lg  h-10 border-2 border-secondary-light hover:border-secondary-normal shadow ml-auto flex items-center justify-start space-x-2">
			<BiSearchAlt2 className="ml-2 h-5 w-5 text-secondary-dark" />
			<input
				{...rest}
				type="text"
				placeholder="Search..."
				className={`w-full h-full bg-transparent focus:outline-none  rounded ${className}`}
			/>
		</div>
	);
};

SearchBar.defaultProps = {};

export default React.memo(SearchBar);
