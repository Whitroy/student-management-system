import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { groupActions } from "../store/actions/group.action";
import { fetchGroup } from "../api/Group.api";
import Group from "../components/Group/Group";
import SearchBar from "../components/SearchBar/SearchBar";
import { useAppSelector } from "../store/store";
import {
	groupQuerySelector,
	groupsByQuerySelector,
} from "../store/selectors/group.selectors";

interface Props {}

const GroupPage: React.FC<Props> = (props) => {
	const groups = useAppSelector(groupsByQuerySelector);
	const query = useAppSelector(groupQuerySelector);

	const [showDefault, setShowDefault] = useState(false);
	const defaultUI = [1, 2, 3, 4];

	console.log("Group page render");

	useEffect(() => {
		if (groups.length === 0) setShowDefault(true);
		fetchGroup({ status: "all-groups", query: query })
			.then((groups) => {
				console.log("Group fetched!");
				groupActions.groupQueryCompleted(query, groups);
				setShowDefault(false);
			})
			.catch((error) => console.log(error.message));
	}, [query]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleSearch = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			groupActions.groupQuery(event.target.value);
		},
		[] // eslint-disable-line react-hooks/exhaustive-deps
	);

	return (
		<div
			className={`w-full rounded-lg shadow-md bg-secondary-fine p-4 ${
				groups.length < 4 ? "h-screen" : ""
			}`}
		>
			<SearchBar onChange={handleSearch} value={query} />
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
							index === defaultUI.length - 1 ? "rounded-b-lg" : ""
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
							index={index}
						/>
					);
				})}
		</div>
	);
};

GroupPage.defaultProps = {};

export default React.memo(GroupPage);
