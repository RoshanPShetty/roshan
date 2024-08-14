import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
    return (
			<footer className="w-full pt-20 pb-10" id="contact">
				<div className="flex flex-col items-center">
					<h1 className="heading lg:max-w-[45vw]">
						Want to <span className="text-purple">collaborate</span> and build
						something?
					</h1>
					<p className="text-white-200 md:mt-10 my-5 text-center">
						Reach out to me today and let&apos;s connect to build something
						great.
					</p>
					<a href="mailto:roshanshetty2000@gmail.com">
						<MagicButton
							title="Let's get in touch"
							icon={<FaLocationArrow />}
							position="right"
						/>
					</a>
				</div>

				<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
					<p className="md:text-base text-sm md:font-normal font-light">
						Copyright © 2024 Roshan Praveen Shetty
					</p>
					<div className="flex items-center md:gap-3 gap-6 mt-5">
						{socialMedia.map((profile) => (
							<a href={profile.link} key={profile.id}>
								<div
									key={profile.id}
									className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
								>
									<Image
										src={profile.img}
										alt={profile.id.toString()}
										width={20}
										height={20}
									/>
								</div>
							</a>
						))}
					</div>
				</div>
			</footer>
		);
};

export default Footer;
