import React from "react";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar/Avatar";
import P from "../components/Basic/P";
import { userActions } from "../store/binds/user.bind";
import {
	userAllSelector,
	userLoadingAllSelector,
} from "../store/selectors/user.selectors";
import { useAppSelector } from "../store/store";

interface Props {}

const UserPage: React.FC<Props> = (props) => {
	const users = useAppSelector(userAllSelector);
	const loading = useAppSelector(userLoadingAllSelector);

	useEffect(() => {
		userActions.fetchAll();
	}, []);

	return (
		<div
			className={`w-full rounded-lg shadow-md bg-secondary-fine p-6 md:h-screen ${
				users.length < 4 || loading ? "h-screen" : ""
			}`}
		>
			<div className="flex flex-wrap items-center justify-center">
				{users.map((user) => (
					<Link
						key={user.id}
						className="rounded-2xl bg-primary-dark bg-opacity-50 w-24 h-24 border p-2 flex flex-col items-center justify-evenly shadow-primary border-primary-light m-2 hover:-translate-y-2 transform duration-200 ease-in-out"
						to={`/dashboard/user/${user.id}`}
					>
						<Avatar
							src={user.profile_pic_url}
							size="small"
							appearance="rounded"
							showOnline={false}
						/>
						<P className="text-xs text-center text-white">
							{`${user.first_name} ${
								user.middle_name ? user.middle_name : ""
							} ${user.last_name ? user.last_name : ""}`}
						</P>
					</Link>
				))}
			</div>
			{loading && (
				<FaSpinner className="m-auto mt-40 w-16 h-16 animate-spin text-primary-lightest" />
			)}
		</div>
	);
};

UserPage.defaultProps = {};

export default React.memo(UserPage);
