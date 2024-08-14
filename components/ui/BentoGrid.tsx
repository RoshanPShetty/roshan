"use client";
import animationData from "@/data/confetti.json";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GlobeDemo } from "./GridGlobe";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				// change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
				"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	id,
	title,
	description,
	//   remove unecessary things here
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	id: number;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}) => {
	const leftLists = ["Express", "ReactJS", "Typescript"];
	const rightLists = ["NodeJS", "SQL", "TailwindCSS"];

	const [download, setDownload] = useState(false);

	const defaultOptions = {
		loop: download,
		autoplay: download,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const handleDownload = (e: any) => {
		// const text = "roshanshetty2000@gmail.com";
		// navigator.clipboard.writeText(text);

		e.preventDefault();
		const url = "/Shetty_Roshan_Praveen_Resume.pdf";
		const filename = "Shetty_Roshan_Praveen_Resume.pdf";
		const link = document.createElement("a");
		link.href = url;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		setDownload(true);
		setTimeout(() => {
			setDownload(false);
		}, 5000);
	};

	return (
		<div
			className={cn(
				"row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
				className
			)}
			style={{
				background: "rgb(4,7,29)",
				backgroundColor:
					"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
			}}
		>
			{/* add img divs */}
			<div className={`${id === 6 && "flex justify-center"} h-full`}>
				<div className="w-full h-full absolute">
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(imgClassName, "object-cover object-center ")}
						/>
					)}
				</div>
				<div
					className={`absolute right-0 -bottom-5 ${
						id === 5 && "w-full opacity-80"
					} `}
				>
					{spareImg && (
						<img
							src={spareImg}
							alt={spareImg}
							//   width={220}
							className="object-cover object-center w-full h-full"
						/>
					)}
				</div>
				{id === 6 && (
					// add background animation , remove the p tag
					<BackgroundGradientAnimation>
						<div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
					</BackgroundGradientAnimation>
				)}

				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
					)}
				>
					{/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
					<div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
						{description}
					</div>
					{/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
					{/* remove mb-2 mt-2 */}
					<div
						className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
					>
						{title}
					</div>

					{/* for the github 3d globe */}
					{id === 2 && <GlobeDemo />}

					{/* Tech stack list div */}
					{id === 3 && (
						<div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
							{/* tech stack lists */}
							<div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
								{leftLists.map((item, i) => (
									<span
										key={i}
										className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
									>
										{item}
									</span>
								))}
								<span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
							</div>
							<div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
								<span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
								{rightLists.map((item, i) => (
									<span
										key={i}
										className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					)}
					{id === 6 && (
						<div className="mt-5 relative">
							<div
								className={`absolute -bottom-5 right-0 ${
									download ? "block" : "block"
								}`}
							>
								{download && (
									<Image
										src="/confetti.gif"
										alt="confetti"
										height={200}
										width={400}
									/>
								)}
								{/* <Lottie options={defaultOptions} height={200} width={400} /> */}
							</div>

							<MagicButton
								title={download ? "Resume downloaded!" : "Download Resume"}
								icon={<FaDownload />}
								position="right"
								handleClick={() => handleDownload}
								otherClasses="!bg-[#161A31]"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
