import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchGroup } from "../api/Group.api";
import Group from "../components/Group/Group";
import SearchBar from "../components/SearchBar/SearchBar";
import { useAppSelector } from "../store/store";

interface Props {}

const GroupPage: React.FC<Props> = (props) => {
	const groups = useAppSelector((state) => {
		const currentGroupIds = state.groupCollections[state.queryString] || [];
		const currentGroup = currentGroupIds.map(
			(groupId) => state.allGroups[groupId]
		);
		return currentGroup;
	});
	const query = useAppSelector((state) => state.queryString);

	const dispatch = useDispatch();

	const [showDefault, setShowDefault] = useState(true);
	const defaultUI = [1, 2, 3, 4];

	useEffect(() => {
		if (groups.length === 0) setShowDefault(true);
		fetchGroup({ status: "all-groups", query: query })
			.then((response) => {
				console.log("Group fetched!");
				dispatch({
					type: "group/search/complete",
					payload: {
						query,
						group: response,
					},
				});
				setShowDefault(false);
			})
			.catch((error) => console.log(error.message));
	}, [query]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleSearch = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			dispatch({ type: "group/search", payload: event.target.value });
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
