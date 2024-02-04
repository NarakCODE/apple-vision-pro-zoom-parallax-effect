import Image from 'next/image';
import React from 'react';

const Header = () => {
	return (
		<div className="w-full h-screen bg-[#cfcfcf] relative flex items-center justify-center">
			<picture>
				<img
					src="https://www.apple.com/v/home/takeover/k/images/overview/hero/hero_startframe__db11rsyn9dyu_large.png"
					alt="Header Image"
					width={1920}
					height={1080}
					className="object-contain  h-screen"
				/>
			</picture>

			<div className="absolute bottom-20 w-full mx-auto max-w-2xl px-4 text-center flex flex-col gap-6 items-center">
				<h2 className="text-3xl font-semibold">Vision Pro</h2>
				<h1 className="text-6xl font-bold">
					Welcome to the era of spatial computing.
				</h1>
				<span className="flex items-center gap-6">
					<button className="border border-black rounded-full px-6 py-2 text-lg">
						Learn more
					</button>
					<button className="text-white border border-blue-600 bg-blue-600 rounded-full px-6 py-2 text-lg">
						Buy
					</button>
				</span>
			</div>
		</div>
	);
};

export default Header;
