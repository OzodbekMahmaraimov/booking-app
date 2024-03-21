import { Select, Flex, Progress } from "antd";

import homeIcon from "../../../../../../assets/img/Vector (2).png";
import blackLine from "../../../../../../assets/img/Line 10.png";
import coffeImg from "../../../../../../assets/img/Latte 3.png";
import odamcha from "../../../../../../assets/img/fiacre-emoji 1.png";
import { MainDashboardNavigation } from "../../../../../main-hotel-dashboard/components/navigation";

const Right = () => {



	const handleChange = (value) => {
		console.log(`Selected ${value}`);
	};


	return (
		<div className=" w-full h-max">
			<div>
				<div className="flex items-center justify-between py-3 px-4">
					<MainDashboardNavigation />
					<div className="flex items-center gap-2">
						<input
							type="text"
							className="w-[500px] text-orange-500 outline-none px-3 py-3 rounded-xl"
							placeholder="Search"
						/>
						<button className="px-4 py-2.5 text-[#F1E8D7] border-[2px] border-solid border-white rounded-xl">
							Search
						</button>
					</div>
				</div>
				<div className="bg-[#F1E8D7] p-2 container  rounded-xl">
					<div className="w-full h-full bg-[#fff] px-4 p-2 rounded-xl">
						{/* empty line */}
						<div className="flex items-center gap-3">
							{/* orange line  */}
							<div className="w-[10px] rounded-xl h-[50px] bg-orange-400  "></div>
							{/* flex-col words */}
							<div className="flex flex-col justify-center gap-2">
								<p className="text-xl">Daily Trending Menu</p>
								<p className="text-base text-[#00000099]">Today’s Menu</p>
							</div>
						</div>
						{/* active menu */}
						<div className="flex gap-4 flex-col">
							{/* first */}
							<div className="flex items-center hover:bg-[#cfcdcd4a] rounded-xl p-1 cursor-pointer  justify-between ">
								{/* about */}
								<div>
									{/* number */}
									<div className="flex items-center gap-3">
										<p className="text-2xl text-[#ccc]">#1</p>
										{/* zaybal qism */}
										<div className="flex gap-2 text-[#ccc] flex-col">
											<p className="flex items-center text-xl">Chicken Wrap</p>
											<div className="flex items-center gap-4 ">
												<p>3000.00</p>
												<p>order 12x</p>
											</div>
										</div>
									</div>
								</div>
								{/* img */}
								<div>
									<img src={coffeImg} alt="" />
								</div>
							</div>
							{/* second */}

							<div className="flex items-center hover:bg-[#cfcdcd4a] rounded-xl p-1 cursor-pointer justify-between ">
								{/* about */}
								<div>
									{/* number */}
									<div className="flex items-center gap-3">
										<p className="text-2xl text-[#ccc] ">#2</p>
										{/* zaybal qism */}
										<div className="flex gap-2 text-[#ccc] flex-col">
											<p className="flex items-center text-xl">Capuccino(hot)</p>
											<div className="flex items-center gap-4 ">
												<p>3000.00</p>
												<p>order 13x</p>
											</div>
										</div>
									</div>
								</div>
								{/* img */}
								<div>
									<img src={coffeImg} alt="" />
								</div>
							</div>
							{/* third */}
							<div className="flex items-center hover:bg-[#cfcdcd4a] rounded-xl p-1 cursor-pointer justify-between ">
								{/* about */}
								<div>
									{/* number */}
									<div className="flex items-center gap-3">
										<p className="text-2xl text-[#ccc]">#3</p>
										{/* zaybal qism */}
										<div className="flex gap-2 text-[#ccc] flex-col">
											<p className="flex items-center text-xl">caffee latte(hot)</p>
											<div className="flex items-center gap-4 ">
												<p>3000.00</p>
												<p>order 9x</p>
											</div>
										</div>
									</div>
								</div>
								{/* img */}
								<div>
									<img src={coffeImg} alt="" />
								</div>
							</div>
						</div>
						{/* analysis */}
						<div className="flex mt-11 items-center justify-evenly gap-10">
							{/* Loyal Customers */}
							<div className="w-[1fr] shadow-xl rounded-xl p-6 h-[2fr]">
								<div>
									<div className="flex items-center gap-3">
										{/* orange line  */}
										<div className="w-[10px] rounded-xl h-[50px] bg-orange-400  "></div>
										{/* flex-col words */}
										<div className="flex flex-col justify-center gap-2">
											<p className="text-xl">Loyal Customers</p>
											<p className="text-base text-[#00000099]">These are our loay customers</p>
										</div>
									</div>
								</div>
								<div className="flex items-center gap-2 mt-20 mb-32 ml-24 mr-32">
									<img src={odamcha} alt="" />
									<div className="flex flex-col justify-center gap-2">
										<p className="text-xl">Byiringiro Moise</p>
										<p className="text-orange-400 ">3 Times orders</p>
									</div>
								</div>
							</div>
							{/* Level Work */}
							<div className="w-[1fr] shadow-xl rounded-xl p-6 h-[2fr]">
								<div>
									<div className="flex items-center gap-3">
										{/* orange line  */}
										<div className="w-[10px] rounded-xl h-[50px] bg-orange-400  "></div>
										{/* flex-col words */}
										<div className="flex flex-col justify-center gap-2">
											<div className="flex justify-between gap-32">
												<p className="text-xl">Sales Summary</p>
												<Select defaultValue="Week" style={{ width: 120 }} onChange={handleChange}>
													<Select.Option value="Week">Week</Select.Option>
													<Select.Option value="Month">Month</Select.Option>
													<Select.Option value="Year">Year</Select.Option>
												</Select>

											</div>

											<p className="text-base text-[#00000099]">Sales summary gives us overview of how we sold</p>
										</div>
									</div>
								</div>
								<div className="flex items-center justify-center">

									<div className="flex items-center gap-2 mt-4">
										<Flex gap="small" className="flex flex-col" wrap="wrap">
											<Progress type="dashboard" percent={75} />
											<Progress type="dashboard" percent={15} />
										</Flex>
										<Flex gap="small" className="flex flex-col" wrap="wrap">
											<Progress type="dashboard" percent={20} />
											<Progress type="dashboard" percent={45} />
										</Flex>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Right;
