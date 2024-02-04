import { Search, ShoppingCart } from 'lucide-react';
import React from 'react';

const navLinks = [
	{ name: 'Store', href: '/store' },
	{ name: 'Store', href: '/store' },
	{ name: 'Store', href: '/store' },
	{ name: 'Store', href: '/store' },
	{ name: 'Store', href: '/store' },
];

const Navbar = () => {
	return (
		<nav className="fixed top-0 w-full bg-white/50 backdrop-blur-sm z-[100]">
			<div className="max-w-[1200px] mx-auto py-2 px-4 flex items-center justify-between gap-10">
				<picture>
					<img
						src="https://narakcode.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.008a933f.png&w=640&q=75"
						alt="Logo"
						className="w-10 rounded-full bg-black"
					/>
				</picture>

				<ul className="flex flex-1 space-x-10">
					{navLinks.map(({ name, href }, index) => (
						<li key={index}>
							<a href={href}>{name}</a>
						</li>
					))}
				</ul>

				<span className="flex items-center space-x-8">
					<Search size={20} />
					<ShoppingCart size={20} />
				</span>
			</div>
		</nav>
	);
};

export default Navbar;
