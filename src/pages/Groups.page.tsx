import React from "react";
import { useCallback } from "react";
import Group from "../components/Group/Group";
import SearchBar from "../components/SearchBar/SearchBar";
import { useAppSelector } from "../store/store";
import {
	groupLoadingListSelector,
	groupQuerySelector,
	groupsByQuerySelector,
} from "../store/selectors/group.selectors";
import { groupActions } from "../store/binds/group.bind";
import { useEffect } from "react";

interface Props {}

const GroupsPage: React.FC<Props> = (props) => {
	const groups = useAppSelector(groupsByQuerySelector);
	const query = useAppSelector(groupQuerySelector);
	const showLoading = useAppSelector(groupLoadingListSelector);
	const defaultUI = [1, 2, 3, 4];

	useEffect(() => {
		groupActions.query("");
	}, []);

	const handleSearch = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			groupActions.query(event.target.value);
		},
		[] // eslint-disable-line react-hooks/exhaustive-deps
	);

	return (
		<div
			className={`w-full rounded-lg shadow-md bg-secondary-fine p-4 ${
				groups.length < 4 ? "h-screen" : ""
			}`}
		>
			<SearchBar
				onChange={handleSearch}
				value={query}
				searching={showLoading}
			/>
			{groups.length === 0 &&
				showLoading &&
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
			{(!showLoading || groups.length > 0) &&
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

GroupsPage.defaultProps = {};

export default React.memo(GroupsPage);
