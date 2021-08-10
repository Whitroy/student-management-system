import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { fetchGroup } from "../api/Group.api";
import Button from "../components/Button/Button";
import {
	currentSelectedGroupIdSelector,
	currentSelectedGroupSelector,
	groupNextIdSelector,
	groupPrevIdSelector,
} from "../store/selectors/group.selectors";
import { useAppSelector } from "../store/store";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useCallback } from "react";
import Avatar from "../components/Avatar/Avatar";
import H1 from "../components/Basic/H1";
import P from "../components/Basic/P";
import { FaSpinner } from "react-icons/fa";
import { groupActions } from "../store/actions/group.bind";
interface Props {}

const GroupPage: React.FC<Props> = (props) => {
	const { groupId } = useParams<any>();
	const group = useAppSelector(currentSelectedGroupSelector);
	const currID = useAppSelector(currentSelectedGroupIdSelector);
	const prevId = useAppSelector(groupPrevIdSelector);
	const nextId = useAppSelector(groupNextIdSelector);
	const history = useHistory();
	console.log("render group");
	const [showLoading, setShowLoading] = useState(true);

	useEffect(() => {
		if (group) setShowLoading(false);
		fetchGroup({ id: groupId })
			.then((groupResponse) => {
				groupActions.selectedGroup(groupResponse);
				if (group === undefined) {
					groupActions.selectedGroupId(groupId);
					setShowLoading(false);
				}
			})
			.catch((error) => {
				console.log(error.message);
				setShowLoading(false);
			});
	}, [groupId]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleLeftClick = useCallback(() => {
		if (prevId === currID || prevId === undefined) return;
		groupActions.selectedGroupId(prevId);
		history.push("/dashboard/groups/group/" + prevId);
	}, [group]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleRightClick = useCallback(() => {
		if (nextId === currID || nextId === undefined) return;
		groupActions.selectedGroupId(nextId);
		history.push("/dashboard/groups/group/" + nextId);
	}, [group]); // eslint-disable-line react-hooks/exhaustive-deps
	return (
		<div className=" p-3 rounded-md bg-secondary-fine h-screen">
			{group ? (
				<>
					<div className="bg-secondary-finest rounded-md p-6 shadow">
						<div className="flex md:flex-row flex-col mt-4 md:space-x-8 space-y-4 md:space-y-0 md:items-start items-center justify-between">
							<div className="space-y-6">
								<H1 size="text-xl md:text-2xl" className="text-secondary-dark">
									Group Name :{" "}
									<span className=" text-primary-normal">{group.name}</span>
								</H1>
								<P className="text-secondary-dark">
									Description :{" "}
									<span className=" text-primary-normal">
										{group.description}
									</span>
								</P>
								<P className="text-secondary-dark">
									Group ID :{" "}
									<span className=" text-primary-normal">{group.id}</span>
								</P>
								<P className="text-secondary-dark">
									Created At :{" "}
									<span className=" text-primary-normal">
										{group.created_at}
									</span>
								</P>
							</div>
							<Avatar
								src={group.group_image_url as string}
								size="extraLarge"
								showOnline={false}
							/>
						</div>
					</div>

					<div className="flex space-x-4 items-center justify-center mt-4">
						{prevId !== currID && (
							<Button
								Icon={AiOutlineLeft}
								appearance="outline"
								theme="secondary"
								border="rounded"
								onClick={handleLeftClick}
							/>
						)}
						<H1 size="text-md" className="w-32 ">
							{group.name}
						</H1>
						{nextId !== currID && (
							<Button
								Icon={AiOutlineRight}
								appearance="outline"
								theme="secondary"
								border="rounded"
								onClick={handleRightClick}
							/>
						)}
					</div>
				</>
			) : showLoading ? (
				<FaSpinner className="h-12 w-12 animate-spin m-auto mt-52" />
			) : (
				<H1 className="ml-52 mt-52 text-secondary-dark">
					Group with ID {groupId} doesn't exist!
				</H1>
			)}
		</div>
	);
};

GroupPage.defaultProps = {};

export default React.memo(GroupPage);
