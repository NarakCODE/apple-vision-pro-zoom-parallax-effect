'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const imageUrls = [
	'https://www.apple.com/newsroom/images/media/Apple-WWCD23-Vision-Pro-glass-230605_big.jpg.large.jpg',

	'https://www.apple.com/v/apple-vision-pro/c/images/overview/visionos/around_you__bfdlxkwczahe_large.jpg',

	'https://www.apple.com/v/apple-vision-pro/c/images/overview/routers/ar_tile__que64jqs2t2e_large.jpg',

	'https://www.apple.com/newsroom/images/2024/02/apple-announces-more-than-600-new-apps-built-for-apple-vision-pro/article/Apple-Vision-Pro-app-experiences-Barbie_big.jpg.large.jpg',

	'https://www.apple.com/v/apple-vision-pro/c/images/overview/experiences/connection/drawer/shareplay__fqxq1g3bbfmi_large.jpg',

	'https://www.apple.com/newsroom/images/2024/02/apple-announces-more-than-600-new-apps-built-for-apple-vision-pro/article/Apple-Vision-Pro-app-experiences-real-time-lyrics_big.jpg.large.jpg',

	'https://www.apple.com/v/apple-vision-pro/c/images/overview/design/drawer/dual_loop_band__fsr7fnz5926a_large.jpg',
];

const ZoomParallax = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const pictures = [
		{ src: imageUrls[0], scale: scale4 },
		{ src: imageUrls[1], scale: scale5 },
		{ src: imageUrls[2], scale: scale6 },
		{ src: imageUrls[3], scale: scale5 },
		{ src: imageUrls[4], scale: scale6 },
		{ src: imageUrls[5], scale: scale8 },
		{ src: imageUrls[6], scale: scale9 },
	];

	return (
		<div ref={container} className="h-[300vh] relative">
			<div className="sticky top-0 h-screen bg-[#eee] overflow-hidden">
				{pictures.map(({ src, scale }, index) => {
					return (
						<motion.div
							style={{ scale: scale }}
							className="w-full h-full absolute top-0 flex items-center justify-center"
							key={index}
						>
							{/* Image container */}
							<div
								className={`relative ${
									index === 0
										? 'w-[25vw] h-[25vh]'
										: index === 1
										? 'top-[-30vh] left-[5vw] w-[35vw] h-[30vh]'
										: index === 2
										? 'top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]'
										: index === 3
										? 'left-[27.5vw] w-[25vw] h-[25vh]'
										: index === 4
										? 'top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]'
										: index === 5
										? 'top-[27.5vh] left-[-22.5vw] w-[25vw] h-[25vh]'
										: index === 6
										? 'top-[28vh] left-[27vw] w-[20vw] h-[25vh]'
										: ''
								}`}
							>
								<picture>
									<img
										src={src}
										alt="image"
										className="object-top object-cover shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full h-full rounded-lg"
										width={1920}
										height={1080}
									/>
								</picture>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default ZoomParallax;
