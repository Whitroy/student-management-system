import React, { useEffect } from "react";
import { useState } from "react";
import { fetchGroup, Group as GroupInterface } from "../API/Fetch.api";
import Group from "../components/Group/Group";
import SearchBar from "../components/SearchBar/SearchBar";

interface Props {
	grow: boolean;
}

const Dashboard: React.FC<Props> = ({ grow }) => {
	const [searchContent, setSearchContent] = useState("");
	const [group, setGroup] = useState<GroupInterface[]>([]);
	const [filteredGroup, setFilteredGroup] = useState<GroupInterface[]>([]);

	useEffect(() => {
		fetchGroup()
			.then((response) => {
				console.log("Group fetched!");
				setGroup(response.data);
				setFilteredGroup(response.data);
			})
			.catch((error) => console.log(error.message));
	}, []);

	useEffect(() => {
		const filtered: GroupInterface[] = [];
		group.forEach((value) => {
			if (value.name.toLowerCase().startsWith(searchContent.toLowerCase())) {
				filtered.push(value);
			}
		});
		setFilteredGroup(filtered);
		console.log(filtered);
	}, [searchContent, group]);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchContent(event.target.value);
	};

	return (
		<div className="flex">
			<div
				className={` bg-secondary-finest transition-width duration-500 ease-in-out ${
					grow ? "w-68" : "w-0"
				}`}
			></div>
			<div className="bg-secondary-finest w-full pt-28 px-2">
				<div
					className={`w-full rounded-lg shadow-md bg-secondary-fine p-4 ${
						filteredGroup.length < 4 ? "h-screen" : ""
					}`}
				>
					<SearchBar onChange={handleSearch} value={searchContent} />
					{filteredGroup.map((group, index) => {
						return (
							<Group
								id={group.id}
								name={group.name}
								index={index}
								description={group.description}
								group_image_url={group.group_image_url}
								key={index}
								className={`${index === 0 ? "rounded-t-lg" : ""} ${
									index === filteredGroup.length - 1 ? "rounded-b-lg" : ""
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
