import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
	return (
		<section id="about">
			<h1 className="heading mt-2">
				An insight to{" "}
				<span className="text-purple">who I am</span>
			</h1>
			<BentoGrid className="w-full py-20">
				{gridItems.map(
					({
						id,
						title,
						description,
						className,
						img,
						spareImg,
						imgClassName,
						titleClassName,
					}: {
						id: number;
						title: string;
						description: string;
						className: string;
						img: string;
						spareImg: string;
						imgClassName: string;
						titleClassName: string;
					}) => (
						<BentoGridItem
							id={id}
							key={id}
							title={title}
							description={description}
							className={className}
							img={img}
							spareImg={spareImg}
							imgClassName={imgClassName}
							titleClassName={titleClassName}
						/>
					)
				)}
			</BentoGrid>
		</section>
	);
};

export default Grid;
