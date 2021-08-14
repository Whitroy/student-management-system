import React from "react";
import { useEffect } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { FaSpinner } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Avatar from "../components/Avatar/Avatar";
import H1 from "../components/Basic/H1";
import P from "../components/Basic/P";
import { userActions } from "../store/binds/user.bind";
import {
	currentUserErrorSelector,
	currentUserSelector,
	userLoadingOneSelector,
} from "../store/selectors/user.selectors";
import { useAppSelector } from "../store/store";

interface Props {}

const UserPage: React.FC<Props> = (props) => {
	const userID = +useParams<{ userId: string }>().userId;
	const user = useAppSelector(currentUserSelector);
	const loading = useAppSelector(userLoadingOneSelector);
	const error = useAppSelector(currentUserErrorSelector);

	useEffect(() => {
		userActions.fetchOne(userID);
	}, [userID]);

	return (
		<div className="p-4 h-screen">
			<Link
				to="/dashboard/users"
				className="flex space-x-2 justify-start items-center text-secondary-dark hover:text-primary-dark"
			>
				<BiLeftArrow className="" />
				Back
				{loading && (
					<FaSpinner className="w-10 animate-spin text-success-normal" />
				)}
			</Link>
			<div className="lg:p-6 p-2 bg-secondary-fine rounded-lg mt-2">
				{user && (
					<div className="bg-secondary-normal rounded-xl mt-2 h-96 flex flex-col-reverse md:flex-row items-start justify-between max-w-2xl m-auto">
						<div className="h-64 md:h-96 bg-secondary-fine rounded-t-full rounded-r-full   w-72 md:w-96 shadow-xl">
							<div className=" flex md:flex-row flex-col-reverse justify-center items-start md:items-center space-x-2 rounded-r-full md:mt-32 mt-8 ml-2 md:ml-0">
								<div className="md:text-right space-y-1 text-sm">
									<P>{`${user.first_name} ${
										user.middle_name ? user.middle_name : ""
									} ${user.last_name ? user.last_name : ""}`}</P>
									<P>{user.phone_number}</P>
									<P>{user.email}</P>
								</div>
								<Avatar
									size="extraLarge"
									appearance="rounded"
									showOnline={false}
									className=""
								/>
							</div>
						</div>
						<div className="mx-6 text-white mt-10">
							<P>{user.bio}</P>
						</div>
					</div>
				)}
				{loading && (
					<FaSpinner className="m-auto mt-40 w-16 h-16 animate-spin text-primary-lightest" />
				)}
				{!loading && !user && (
					<H1 className="ml-52 mt-52 text-danger-dark">{error}</H1>
				)}
			</div>
		</div>
	);
};

UserPage.defaultProps = {};

export default React.memo(UserPage);
