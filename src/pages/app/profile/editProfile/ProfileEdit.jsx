import React from "react";
import pencil from "../../../../assets/images/Component 42.png";
import userImg from "../../../../assets/images/Component 5.png";

const ProfileEdit = () => {
	return (
		<div className="flex flex-col">
			<div className="flex justify-end p-5">
				<h1 className="text-3xl">Byiringiro Moise</h1>
				<img className="w-10" src={pencil} alt="edit-pencil" />
			</div>
			<div className="flex flex-col items-center mt-40">
				<div className="w-40 h-40 rounded-full border-2 border-black absolute top-36">
					<img src={userImg} alt="photo" className="w-full" />
				</div>
				<div className="border-2 w-11/12 border-black flex items-center flex-col mb-5">
					<p className="text-3xl text-slate-500 mt-20 mb-5">Orders and Payments</p>
					<div className="w-11/12 border-2 border-black flex items-center flex-col mb-10">
						<div className="bg-[#F1E8D7] w-11/12 h-20 flex justify-between p-5 items-center mb-5 mt-10 px-30 rounded-md">
							<p className="text-3xl">User name</p>
							<input
								style={{ outline: "none", borderRadius: "10px" }}
								type="text"
								className="p-1 w-3/5 h-10 active:border-none"
							/>
							<img className="w-8" src={pencil} alt="" />
						</div>
						<div className="bg-[#F1E8D7] w-11/12 h-20 flex justify-between p-5 items-center mb-5 rounded-md">
							<p className="text-3xl">User number</p>
							<input
								style={{ outline: "none", borderRadius: "10px" }}
								type="text"
								className="p-1 w-3/5 h-10 active:border-none"
							/>
							<img className="w-8" src={pencil} alt="" />
						</div>
						<div className="bg-[#F1E8D7] w-11/12 h-20 flex justify-between p-5 items-center mb-5 rounded-md">
							<p className="text-3xl">User email address</p>
							<input
								style={{ outline: "none", borderRadius: "10px" }}
								type="text"
								className="p-1 w-3/5 h-10 active:border-none"
							/>
						</div>
						<div className="bg-[#F1E8D7] w-11/12 h-20 flex justify-between p-5 items-center mb-10 rounded-md">
							<p className="text-3xl">User profile image</p>
							<input type="file" className="bg-[#F46A06]" />
						</div>
						<button type="submit" className="bg-[#F46A06] px-5 py-3 mb-5">
							Update your account
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProfileEdit;
