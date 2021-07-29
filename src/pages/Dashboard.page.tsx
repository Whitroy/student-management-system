import React, { useEffect } from "react";
import { useState } from "react";
import { fetchGroup } from "../api/Group.api";
import GroupModel from "../models/Group.model";
import Group from "../components/Group/Group";
import SearchBar from "../components/SearchBar/SearchBar";

interface Props {
	grow: boolean;
}

const Dashboard: React.FC<Props> = ({ grow }) => {
	const [searchContent, setSearchContent] = useState("");
	const [groups, setGroups] = useState<GroupModel[]>([]);
	const [showDefault, setShowDefault] = useState(true);
	const defaultUI = [1, 2, 3, 4];

	useEffect(() => {
		if (searchContent.length < 3 && searchContent.length > 0) return;

		console.log("calling fetchgroup");
		setShowDefault(true);
		fetchGroup({ status: "all-groups", query: searchContent })
			.then((response) => {
				console.log("Group fetched!");
				setGroups(response);
				setShowDefault(false);
			})
			.catch((error) => console.log(error.message));
	}, [searchContent]);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchContent(event.target.value);
	};

	return (
		<div className="flex">
			<div
				className={` bg-secondary-finest transition-width duration-500 ease-in-out ${
					grow ? "w-68" : "w-0"
				}`}
			/>
			<div className="bg-secondary-finest w-full pt-28 px-2">
				<div
					className={`w-full rounded-lg shadow-md bg-secondary-fine p-4 ${
						groups.length < 4 ? "h-screen" : ""
					}`}
				>
					<SearchBar onChange={handleSearch} value={searchContent} />
					{showDefault &&
						defaultUI.map((value, index) => (
							<Group
								id={value}
								name={""}
								index={index}
								description={""}
								group_image_url={null}
								key={value}
								className={`${index === 0 ? "rounded-t-lg" : ""} ${
									index === groups.length - 1 ? "rounded-b-lg" : ""
								}`}
								showDefault={true}
							/>
						))}
					{!showDefault &&
						groups.map((group, index) => {
							return (
								<Group
									{...group}
									key={index}
									className={`${index === 0 ? "rounded-t-lg" : ""} ${
										index === groups.length - 1 ? "rounded-b-lg" : ""
									}`}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
