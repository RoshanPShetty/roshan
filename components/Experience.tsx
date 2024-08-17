import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
	return (
		<div className="pb-20" id="experience">
			<h1 className="heading">
				My <span className="text-purple">Work Experience</span>
			</h1>
			<div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
				{workExperience.map((card) => (
					<Button
						key={card.id}
						duration={Math.floor(Math.random() * 10000) + 10000}
						borderRadius="1.75rem"
						className="flex-1 text-white border-neutral-200 dark:border-slate-800"
					>
						<div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 lg:gap-10 gap-2">
							<img
								src={card.thumbnail}
								className="lg:w-32 md:w-20 w-16 rounded-xl"
								alt={card.thumbnail}
							/>

							<div className="lg:ms-5">
								<h1 className="text-start text-lg md:text-xl font-bold">
									{card.company}
								</h1>
								<h4 className="text-start text-xs md:text-sm font-normal wide uppercase mt-1 text-purple">
									{card.title}
								</h4>
								<p className="text-start text-white-100 mt-3 font-light">
									{card.desc}
								</p>
								<p className="uppercase text-start text-xs text-white mt-3 font-semibold">
									{card.dateStart} - {card.dateEnd}
								</p>
							</div>
						</div>
					</Button>
				))}
			</div>
		</div>
	);
};

export default Experience;
