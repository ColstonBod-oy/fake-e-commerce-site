import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";

const menuFadeIn = () => {
	document.querySelector(".mobile-menu").classList.toggle("hidden");
	document
		.querySelector(".mobile-menu")
		.classList.remove("animate-fadeout-to-t");
	document.querySelector(".mobile-menu").classList.add("animate-fadein-to-b");
};

const menuFadeOut = () => {
	setTimeout(() => {
		document.querySelector(".mobile-menu").classList.toggle("hidden");
	}, 210);
	document
		.querySelector(".mobile-menu")
		.classList.remove("animate-fadein-to-b");
	document.querySelector(".mobile-menu").classList.add("animate-fadeout-to-t");
};

export default function Navbar() {
	return (
		<nav className={"fixed inset-x-0 z-20 bg-violet-400"}>
			<div className="relative max-w-xs mx-auto lg:pr-2 md:max-w-6xl">
				<div className="flex justify-between font-medium md:justify-center lg:justify-end">
					<Link href="/" className="flex items-center py-5 md:px-2">
						<Image src={logo} alt="Navbar logo placeholder" />
					</Link>
					<div className="items-center hidden space-x-1 md:flex">
						<Link
							href="/"
							className="px-3 py-5 ml-5 text-white hover:text-gray-300"
						>
							Home
						</Link>
						<Link
							href="/products"
							className="px-3 py-5 text-white hover:text-gray-300"
						>
							Products
						</Link>
					</div>
					<div className="items-center hidden space-x-1 md:flex">
						<a
							href="#"
							className="px-3 py-5 ml-20 text-white hover:text-gray-300"
						>
							Login
						</a>
						<a
							href="#"
							className="px-3 py-2 text-white transition duration-300 bg-gray-200 bg-opacity-25 signup-link animate-pulse rounded-3xl hover:bg-opacity-50"
							onMouseEnter={() => {
								document
									.querySelector(".signup-link")
									.classList.toggle("animate-pulse");
							}}
							onMouseLeave={() => {
								document
									.querySelector(".signup-link")
									.classList.toggle("animate-pulse");
							}}
						>
							Signup
						</a>
					</div>
					{/* mobile menu button */}
					<div className="flex items-center md:hidden">
						<button
							className="px-3 py-2 text-gray-900 bg-white rounded-3xl hover:text-violet-500 focus:text-violet-500"
							onClick={menuFadeIn}
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
				{/* mobile menu */}
				<div className="hidden mobile-menu md:hidden">
					<div className="absolute flex flex-col items-start w-full pt-6 pb-10 pl-10 pr-6 text-lg font-semibold bg-white rounded-md shadow-lg top-5">
						<div className="flex self-end">
							<button
								className="hover:text-violet-500 focus:text-violet-500"
								onClick={menuFadeOut}
							>
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<Link
							href="/"
							className="pb-1.5 hover:text-violet-500 focus:text-violet-500"
							onClick={menuFadeOut}
						>
							Home
						</Link>
						<Link
							href="/products"
							className="py-1.5 hover:text-violet-500 focus:text-violet-500"
							onClick={menuFadeOut}
						>
							Products
						</Link>
						<a
							href="#"
							className="py-1.5 hover:text-violet-500 focus:text-violet-500"
						>
							Login
						</a>
						<a
							href="#"
							className="pt-1.5 hover:text-violet-500 focus:text-violet-500"
						>
							Signup
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
