import React from 'react';

const Product = () => {
	return (
		<div className="mt-20 max-w-[1500px] mx-auto px-6 flex flex-col gap-20 h-screen items-center justify-center">
			<picture>
				<span className="w-full max-w-lg">
					<h2 className="font-bold text-black text-4xl">Product</h2>
					<p>
						The Dual Loop Band features a pair of adjustable upper and lower
						straps for a personalized fit.
					</p>
				</span>
				<img
					src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/vision-pro-gallery-measure-dual-loop-202401?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1702327482077"
					alt="Vision Pro Gallery"
					className="object-contain w-full h-[80%] mt-10"
				/>
			</picture>
		</div>
	);
};

export default Product;
