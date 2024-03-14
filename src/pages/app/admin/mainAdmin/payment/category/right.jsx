import React, { useState } from "react";
import { Table, Button, Modal } from "antd";
import homeIcon from "../../../../../../assets/img/Vector (2).png";
import blackLine from "../../../../../../assets/img/Line 10.png";
// import PrintList from "././print"; // Import the PrintList component
// import YourComponent from "././print";
// import ExportToExcel from "./"; // Import the ExportToExcel component

const Right = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(generateData());

	const handlePrintList = () => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	const handleDelete = (record) => {
		Modal.confirm({
			title: "Confirm Delete",
			content: "Are you sure you want to delete this item?",
			okText: "Yes",
			okType: "danger",
			cancelText: "No",
			onOk: () => {
				const updatedData = data.filter((item) => item.key !== record.key);
				setData(updatedData);
				console.log(`Deleted item with key: ${record.key}`);
			},
			onCancel: () => {
				console.log("Deletion canceled");
			},
		});
	};

	function generateData() {
		return new Array(20).fill().map((_, index) => ({
			key: index,
			name: `Name ${index + 1}`,
			phoneNumber: "0784567890",
			action: "Booking",
			facilityName: "Hotel milles",
			moneyPaid: "1050000",
			moneyEarned: "200000 Rwf",
		}));
	}

	const columns = [
		{
			title: "Names",
			dataIndex: "name",
			key: "name",
			width: 150,
		},
		{
			title: "Phone number",
			dataIndex: "phoneNumber",
			key: "phoneNumber",
			width: 150,
		},
		{
			title: "Action",
			dataIndex: "action",
			key: "action",
			width: 150,
		},
		{
			title: "Facility name",
			dataIndex: "facilityName",
			key: "facilityName",
			width: 150,
		},
		{
			title: "Money paid",
			dataIndex: "moneyPaid",
			key: "moneyPaid",
			width: 150,
		},
		{
			title: "Money earned",
			dataIndex: "moneyEarned",
			key: "moneyEarned",
			width: 150,
		},
		{
			title: "Delete",
			dataIndex: "delete",
			key: "delete",
			width: 100,
			render: (_, record) => (
				<Button onClick={() => handleDelete(record)} danger>
					Delete
				</Button>
			),
		},
	];

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
							<p className="text-black cursor-pointer text-xl">Home</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<input
							type="text"
							className="w-[500px] text-orange-500 outline-none px-3 py-3 rounded-xl"
							placeholder="Search"
						/>
						<button className="px-4 py-2.5 text-white border-[2px] border-solid border-white rounded-xl">
							Search
						</button>
					</div>
				</div>
				<div className="bg-white p-5 rounded-xl">
					<div
						className="rounded-md"
						style={{
							borderCollapse: "collapse",
							borderSpacing: 0,
							overflowX: "auto",
						}}
					>
						<div
							className="bg-white w-full rounded-xl border border-gray-300"
							style={{
								maxHeight: "600px",
								overflowY: "auto",
								borderRight: "none", // Hide right border
							}}
						>
							<Table dataSource={data} columns={columns} pagination={false} />
						</div>
					</div>
					<div>
						<Button
							type="primary"
							loading={loading}
							onClick={handlePrintList}
							className="rounded-md"
							style={{ backgroundColor: "#FFA500", color: "#fff" }}
						>
							Print List
						</Button>
					</div>
				</div>
				{/* <YourComponent data={data} /> */}
				{/* <ExportToExcel data={data} /> */}
			</div>
		</div>
	);
};

export default Right;
