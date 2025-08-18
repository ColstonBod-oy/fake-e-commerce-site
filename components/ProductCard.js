import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ id, title, image }) {
	return (
		<Link
			href={`/products/${id}`}
			className="z-10 w-full max-w-sm pt-4 mx-auto overflow-hidden bg-white rounded-md shadow-lg"
		>
			<div className="relative flex justify-end w-full h-56">
				<Image src={image} layout="fill" objectFit="contain" alt={title} />
				<button className="absolute p-2 mx-5 -mb-4 rounded-full bg-cyan-400 text-violet-500 hover:bg-cyan-200 focus:outline-none focus:bg-cyan-200">
					<svg
						className="relative w-5 h-5"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
				</button>
			</div>
			<div className="px-5 py-3 bg-gradient-to-r from-cyan-400 to-violet-500">
				<h3 className="text-gray-800 uppercase truncate">{title}</h3>
			</div>
		</Link>
	);
}
