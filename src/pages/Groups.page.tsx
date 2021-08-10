import React from "react";
import { useCallback } from "react";
import Group from "../components/Group/Group";
import SearchBar from "../components/SearchBar/SearchBar";
import { useAppSelector } from "../store/store";
import {
	groupQueryLoadingSelector,
	groupQuerySelector,
	groupsByQuerySelector,
} from "../store/selectors/group.selectors";
import { groupActions } from "../store/actions/group.bind";

interface Props {}

const GroupsPage: React.FC<Props> = (props) => {
	const groups = useAppSelector(groupsByQuerySelector);
	const query = useAppSelector(groupQuerySelector);
	const showLoading = useAppSelector(groupQueryLoadingSelector);
	const defaultUI = [1, 2, 3, 4];

	console.log("Group page render", showLoading);

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
			<SearchBar onChange={handleSearch} value={query} />
			{showLoading &&
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
			{!showLoading &&
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
