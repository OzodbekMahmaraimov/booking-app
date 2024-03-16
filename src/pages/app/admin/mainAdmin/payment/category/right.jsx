import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "antd";
import axios from "axios";
import homeImg from "../../../../../../assets/img/Vector (1).png";
import LineImg from "../../../../../../assets/img/Line 10.png";
import "../../../../../../assets/css/style.css";

const http = "http://localhost:3001/admin";
const Right = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${http}?search=${searchInput}`)
      .then((response) => {
        const filteredData = response.data.mainadmin.payment.user.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    fetchData();
  };

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
        const updatedData = data.filter((item) => item.id !== record.id);
        setData(updatedData);
        console.log(`Deleted item with ID: ${record.id}`);
      },
      onCancel: () => {
        console.log("Deletion canceled");
      },
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const columns = [
    {
      title: "Names",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: "Phone number",
      dataIndex: "number",
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
      dataIndex: "facility",
      key: "facilityName",
      width: 150,
    },
    {
      title: "Money paid",
      dataIndex: "paid",
      key: "moneyPaid",
      width: 150,
    },
    {
      title: "Money earned",
      dataIndex: "earned",
      key: "moneyEarned",
      width: 150,
    },
    {
      title: "Delete",
      dataIndex: "delete",
      key: "delete",
      width: 100,
      render: (_, record) => (
        <Button onClick={() => handleDelete(record)} className="bg-orange-400 px-10 text-white">
          Delete
        </Button>
      ),
    },
  ];
		return (
			<div className="px-4 w-full">
					<div>
							<div className="flex items-center justify-between py-3 px-4">
									<div className="flex items-center gap-3">
											<img src={homeImg} alt="" />
											<img src={LineImg} alt="" />
											<p>Home</p>
									</div>
									<div className="flex items-center gap-3">
											<input
													type="text"
													placeholder="Search..."
													value={searchInput}
													className="outline-none"
													onChange={handleSearchInputChange}
													onKeyPress={handleKeyPress} // Added onKeyPress event handler
													style={{
															padding: "0.5rem",
															border: "1px solid #ccc",
															borderRadius: "5px",
															marginRight: "1rem",
													}}
											/>
											<button
													onClick={handleSearch}
													className="border-[1px] border-white border-solid select-none"
													style={{
															padding: "0.5rem 1rem",
															backgroundColor: "#F46A06",
															color: "#fff",
															borderRadius: "5px",
															cursor: "pointer",
													}}
											>
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
													className="bg-[#d7cfcf] w-full rounded-xl section border border-gray-300"
													style={{
															maxHeight: "500px",
															overflowY: "auto",
															borderRight: "none",
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
													className="rounded-md mt-3"
													style={{ backgroundColor: "#FFA500", color: "#fff" }}
											>
													Print List
											</Button>
									</div>
							</div>
					</div>
			</div>
	);
};

export default Right;