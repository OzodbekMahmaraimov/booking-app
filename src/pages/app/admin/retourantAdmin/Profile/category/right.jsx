import React, { useState, useRef } from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import homeIcon from "../../../../../../assets/img/Vector (2).png";
import blackLine from "../../../../../../assets/img/Line 10.png";
import pencil from "../../../../../../assets/img/Vector (6).png";
import { SearchInput } from ".";

const Right = () => {
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(true);
	const setSelectedImage = useState(null);
	const inputRefName = useRef(null);
	const inputRefPhoneNumber = useRef(null);
	const inputRefEmail = useRef(null);

	const handleImageChange = (info) => {
		if (info.file.status === "done") {
			setSelectedImage(info.file.originFileObj);
		}
	};

	const handlePencilClickName = () => {
		inputRefName.current.focus();
	};

	const handlePencilClickPhoneNumber = () => {
		inputRefPhoneNumber.current.focus();
	};

	const handlePencilClickEmail = () => {
		inputRefEmail.current.focus();
	};

	const validateEmail = (email) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	const handleEmailChange = (e) => {
		const inputEmail = e.target.value;
		setEmail(inputEmail);
		setValidEmail(validateEmail(inputEmail));
	};

	return (
		<div className="px-4 w-full">
			<div>
				<div className="flex items-center justify-between py-3 px-4">
					<div className="flex items-center gap-1">
						<div>
							<img src={homeIcon} alt="" />
						</div>
						<div>
							<img src={blackLine} alt="" />
						</div>
						<div>
							<p className="text-black cursor-pointer text-xl">Restaurant Manager Dashboard</p>
						</div>
					</div>
					<div className="flex  mt-5">
					<div className="flex items-center gap-2">
						<input
							type="text"
							className="w-[500px] outline-none px-3 py-3 rounded-xl"
							placeholder="Search"
							// onChange={handleSearchChange}
						/>
						<button className="px-4 py-2.5  text-white border-[2px] border-solid border-white rounded-xl">
							Search
						</button>
					</div>
				</div>
				</div>
				<div className="bg-white m-2 p-5 container rounded-xl">
					<div className="flex items-center gap-3 justify-center mt-5 mb-5">
						<div className="w-[370px] h-[2px] bg-[#ccc] z-10"></div>
						<div>
							<p className="font-bold text-xl">Manage your account</p>
						</div>
						<div className="w-[370px] h-[2px] bg-[#ccc] z-10"></div>
					</div>
					<div className="flex flex-col items-center justify-center gap-8">
						<div className="flex bg-[#F1E8D7] rounded-xl p-2 justify-between items-center container">
							<p className="text-xl">Manager Name</p>
							<input
								ref={inputRefName}
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="w-[500px] text-orange-500 outline-none px-3 py-3 rounded-xl"
								placeholder="Name"
							/>
							<img
								className="w-8 cursor-pointer"
								src={pencil}
								alt=""
								onClick={handlePencilClickName}
							/>
						</div>

						<div className="flex bg-[#F1E8D7] rounded-xl p-2 justify-between items-center container">
							<p className="text-xl">Manager Phone number</p>
							<input
								ref={inputRefPhoneNumber}
								type="text"
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
								className="w-[500px] text-orange-500 outline-none px-3 py-3 rounded-xl"
								placeholder="Phone"
							/>
							<img
								className="w-8 cursor-pointer"
								src={pencil}
								alt=""
								onClick={handlePencilClickPhoneNumber}
							/>
						</div>
						<div className="flex bg-[#F1E8D7] rounded-xl p-2 justify-between items-center container relative">
							<p className="text-xl">Manager email address</p>
							<input
								ref={inputRefEmail}
								type="text"
								value={email}
								style={{ outline: "none" }}
								onChange={handleEmailChange}
								className={`w-[500px] px-3 py-3 rounded-xl border ${
									validEmail ? "border-green-500" : "border-red-500"
								}`}
								placeholder="Email"
							/>

							<img
								className="w-8 cursor-pointer"
								src={pencil}
								alt=""
								onClick={handlePencilClickEmail}
							/>
						</div>
						<div className="flex bg-[#F1E8D7] rounded-xl p-2 gap-32 items-center container relative">
							<p className="text-xl">Manager profile picture</p>
							<Upload onChange={handleImageChange}>
								<Button className="w-[500px]" icon={<UploadOutlined />}>
									Click to Upload
								</Button>
							</Upload>
						</div>
						<div className="flex bg-[#F1E8D7] rounded-xl p-2 justify-between items-center container">
							<p className="text-xl">Password</p>
							<input
								type="password"
								className="w-[500px] text-orange-500 outline-none px-3 py-3 rounded-xl"
								placeholder="Manager Name"
							/>
							<img
								className="w-8 cursor-pointer"
								src={pencil}
								alt=""
								onClick={handlePencilClickPhoneNumber}
							/>
						</div>
						<div className="flex bg-[#F1E8D7] rounded-xl p-2 justify-between items-center container">
							<p className="text-xl">Restaurant name</p>
							<input
								type="password"
								className="w-[500px] text-orange-500 outline-none px-3 py-3 rounded-xl"
								placeholder="Manager Name"
							/>
							<img
								className="w-8 cursor-pointer"
								src={pencil}
								alt=""
								onClick={handlePencilClickPhoneNumber}
							/>
						</div>
					</div>
					<div className="flex items-center gap-3 mt-10 mb-5 justify-center ">
						<div className="w-[370px] h-[2px] bg-[#ccc] z-10"></div>
						<div>
							<button className="bg-orange-400 text-white text-xl p-2 cursor-pointer rounded-xl">
								Update your account
							</button>
						</div>
						<div className="w-[370px] h-[2px] bg-[#ccc] z-10"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Right;
