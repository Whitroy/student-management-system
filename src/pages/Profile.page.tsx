import React from "react";
import Avatar from "../components/Avatar/Avatar";
import H1 from "../components/Basic/H1";
import Input from "../components/Input/PrivateFormInput";
import { FaCloudUploadAlt } from "react-icons/fa";
import P from "../components/Basic/P";
import Button from "../components/Button/Button";
import { BiReset } from "react-icons/bi";
import { VscSaveAs } from "react-icons/vsc";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAppSelector } from "../store/store";
import { sideBarSelector } from "../store/selectors/ui.selector";
import { meSelector } from "../store/selectors/user.selectors";
import { meUpdate } from "../api/User.api";
import { authActions } from "../store/actions/auth.actions";
import User from "../models/User.model";

interface Props {}

const ProfilePage: React.FC<Props> = (props) => {
	console.log("Profile Page render");
	const user = useAppSelector(meSelector);
	const sideBarState = useAppSelector(sideBarSelector);

	const {
		touched,
		errors,
		handleSubmit,
		handleReset,
		getFieldProps,
	} = useFormik({
		initialValues: {
			firstName: user!.first_name,
			//profilePic: user!.profile_pic_url,
			middleName: user!.middle_name,
			lastName: user!.last_name,
			//DOB: "",
			//mobileNo: user!.phone_number,
			//bio: "",
		},
		validationSchema: yup.object().shape({
			firstName: yup.string().required("First Name is a required Field"),
			//middleName: yup.string(),
			lastName: yup.string().required("Last Name is a required Field"),
			//Email: yup.string().required().email(),
			// DOB: yup.date().required("Date Of Birth is required Field"),
			// mobileNo: yup
			// 	.string()
			// 	.required("Mobile Number is required Field")
			// 	.matches(
			// 		/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/,
			// 		"Mobile Number is not valid"
			// 	),
			//bio: yup.string(),
		}),
		onSubmit: (userData) => {
			console.log("Submit");
			meUpdate({ first_name: userData.firstName }).then((user) =>
				authActions.update(user as User)
			);
		},
		onReset: () => {
			console.log("Reset");
		},
	});

	return (
		<form onReset={handleReset} onSubmit={handleSubmit}>
			<div className="w-full rounded-lg shadow-md bg-secondary-fine p-4 space-y-6 ">
				<div className="bg-secondary-finest rounded-md p-6 shadow">
					<H1 size="text-xl md:text-2xl" className="text-secondary-dark">
						GENERAL INFORMATION
					</H1>
					<div className="flex md:flex-row flex-col mt-4 md:space-x-8 space-y-4 md:space-y-0 justify-start md:items-start items-center">
						<div className="mt-8 min-w-max">
							<Avatar
								src={getFieldProps("profilePic").value}
								size="extraLarge"
								showOnline={false}
							/>
							<label className=" cursor-pointer hover:text-primary-normal flex items-center justify-start text-secondary-dark">
								<FaCloudUploadAlt className="flex-shrink-0 w-6 h-6 mt-2" />
								<P className="text-xs flex-shrink-0  ml-2 font-bold mt-2">
									Upload Picture
								</P>
								<input className="hidden" type="file" />
							</label>
						</div>
						<div className="md:h-72 w-full md:w-0.5 border bg-secondary-light border-secondary-light rounded-sm" />
						<div className="space-y-6 w-full">
							<div className="flex items-center md:flex-row flex-col justify-start md:space-x-6">
								<Input
									id="firstName"
									placeholder="First Name"
									type="text"
									//			required
									mandatory={true}
									{...getFieldProps("firstName")}
									errors={errors.firstName}
									touched={touched.firstName}
								/>
								<Input
									id="middleName"
									placeholder="Middle Name"
									type="text"
									//				{...getFieldProps("middleName")}
									errors={errors.middleName}
									touched={touched.middleName}
								/>
							</div>
							<div className="flex items-center md:flex-row flex-col justify-start md:space-x-6">
								<Input
									id="lastName"
									placeholder="Last Name"
									type="text"
									required
									mandatory={true}
									{...getFieldProps("lastName")}
									errors={errors.lastName}
									touched={touched.lastName}
								/>
							</div>
							<div className="flex items-center md:flex-row flex-col justify-start md:space-x-6">
								<Input
									id="DOB"
									placeholder="D.O.B"
									type="date"
									//required
									mandatory={true}
									//						{...getFieldProps("DOB")}
									//						errors={errors.DOB}
									//						touched={touched.DOB}
								/>
								<Input
									id="mobileNumber"
									placeholder="Mobile No"
									type="text"
									//			required
									mandatory={true}
									//						{...getFieldProps("mobileNo")}
									//						errors={errors.mobileNo}
									//						touched={touched.mobileNo}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-secondary-finest rounded-md p-6 shadow">
					<H1 size="text-xl md:text-2xl" className="text-secondary-dark">
						ABOUT
					</H1>
					<div className="mt-2">
						<label
							htmlFor={"bio"}
							className="text-sm font-semibold text-secondary-dark"
						>
							Bio
						</label>
						<textarea
							id="bio"
							rows={4}
							className="bg-transparent mt-1 p-2 border-2 border-secondary-light rounded-md w-full focus:outline-none focus:ring-2"
							placeholder="Write awesome thing about yourself here!"
							//				{...getFieldProps("bio")}
						/>
					</div>
				</div>
				<div
					className={`fixed bottom-0 transform duration-500 ease-in-out ${
						sideBarState ? " md:left-54 left-6" : "left-6"
					} right-6 bg-secondary-dark p-2 rounded-md shadow border flex justify-between items-center `}
				>
					<Button type="reset" theme="danger" Icon={BiReset}>
						Reset all
					</Button>
					<Button type="submit" theme="success" Icon={VscSaveAs}>
						Save
					</Button>
				</div>
			</div>
		</form>
	);
};

ProfilePage.defaultProps = {};

export default React.memo(ProfilePage);
