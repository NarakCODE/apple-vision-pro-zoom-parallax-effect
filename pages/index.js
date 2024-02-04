'use client';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Product from '@/components/Product/Product';
import ZoomParallax from '@/components/ZoomParallax';
import Lenis from '@studio-freight/lenis';
import React, { useEffect } from 'react';

const Home = () => {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	return (
		<>
			<Navbar />
			<Header />
			<ZoomParallax />
			<Product />
		</>
	);
};

export default Home;
