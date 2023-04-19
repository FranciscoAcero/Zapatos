import React from "react";
import { RiMoneyDollarCircleLine, RiFacebookBoxLine, RiYoutubeFill,  RiInstagramLine, RiTwitterFill} from "react-icons/ri";

const brownColor = "#362C29";
// Componente Contend
const Contend = () => {
	return (
		//<div className="bg-green-200 flex-auto h-full overflow-y-auto">
		<div className="w-80 h-full bg-blue-50 text-gray-400">
			{/* Search */}
			<div className={`bg-[${brownColor}] bg-opacity-70 rounded-2xl p-4 mb-4`}>
				<h4 className="mb-4 text-white text-xl">Categories</h4>
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-2">
						<input type="checkbox" id="indy" />
						<label htmlFor="indy">Indy</label>
					</div>
					<div className="flex items-center gap-2">
						<input type="checkbox" id="adventure" />
						<label htmlFor="adventure">Adventure</label>
					</div>
					<div className="flex items-center gap-2">
						<input type="checkbox" id="mmo" />
						<label htmlFor="mmo">MMO</label>
					</div>
					<div className="flex items-center gap-2">
						<input type="checkbox" id="casual game" />
						<label htmlFor="casual game">Casual game</label>
					</div>
					<div className="flex items-center gap-2">
						<input type="checkbox" id="strategy" />
						<label htmlFor="strategy">Strategy</label>
					</div>
					<div className="flex items-center gap-2">
						<input type="checkbox" id="simulator" />
						<label htmlFor="simulator">Simulator</label>
					</div>
					<div className="flex items-center gap-2">
						<input type="checkbox" id="sport game" />
						<label htmlFor="sport game">Sport game</label>
					</div>
					<div className="flex items-center gap-2">
						<input type="checkbox" id="action game" />
						<label htmlFor="action game">Action game</label>
					</div>
				</div>
				<h4 className="my-4 text-white text-xl">Platforms</h4>
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-2">
						<input type="checkbox" id="PC" />
						<label htmlFor="PC">PC</label>
					</div>
					<div className="flex items-center gap-2">
						<input type="checkbox" id="PlayStation 5" />
						<label htmlFor="PlayStation 5">PlayStation 5</label>
					</div>
					<div className="flex items-center gap-2">
						<input type="checkbox" id="PlayStation 4" />
						<label htmlFor="PlayStation 4">PlayStation 4</label>
					</div>
					<div className="flex items-center gap-2">
						<input type="checkbox" id="Xbox Series" />
						<label htmlFor="Xbox Series">Xbox Series</label>
					</div>
					<div className="flex items-center gap-2">
						<input type="checkbox" id="Nintendo Switch" />
						<label htmlFor="Nintendo Switch">Nintendo Switch</label>
					</div>
				</div>
				<h4 className="my-4 text-white text-xl">Price</h4>
				<form className="flex flex-col gap-4">
					<div className="flex items-center justify-between gap-4">
						<div className="relative">
							<RiMoneyDollarCircleLine className="absolute left-4 top-1/2 -translate-y-1/2" />
							<input
								type="number"
								className="bg-[#48464bd3] py-2 px-4 rounded-xl outline-none w-full pl-10"
							/>
						</div>
						<span>-</span>
						<div className="relative">
							<RiMoneyDollarCircleLine className="absolute left-4 top-1/2 -translate-y-1/2" />
							<input
								type="number"
								className="bg-[#48464bd3] py-2 px-4 rounded-xl outline-none w-full pl-10"
							/>
						</div>
					</div>

					<button type="submit" className="bg-[#E58D27] text-gray-900 font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all">Apply Filter</button>
				</form>
			</div>
			{/* Social media */}
			<ul className="flex items-center justify-between">
				<li>
					<a href="https://www.facebook.com/" target="blank" className="text-2xl">
						<RiFacebookBoxLine />
					</a>
				</li>
				<li>
					<a href="https://www.youtube.com/" target="blank" className="text-2xl">
						<RiYoutubeFill />
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/" target="blank" className="text-2xl">
						<RiInstagramLine />
					</a>
				</li>
				<li>
					<a href="https://www.twitter.com/" target="blank" className="text-2xl">
						<RiTwitterFill />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Contend;
