import Hero from "../components/Hero";

export default function Home() {
	return (
		<div className="relative flex flex-col justify-center min-h-screen align-center">
			{/* background color grid */}
			<div className="absolute inset-0 origin-top-left transform -skew-y-12">
				<div className="grid grid-cols-6 grid-rows-4 bg-violet-100 min-h-45vw bg-gradient-to-br from-cyan-400 via-violet-400 to-cyan-400 animate-gradient-to-br">
					<div className="col-span-1 opacity-50 bg-cyan-300"></div>
					<div className="col-span-2 opacity-50 bg-violet-300"></div>
					<div className="col-span-2 opacity-50 bg-cyan-400"></div>
					<div className="col-span-1 col-start-6 row-start-3 opacity-50 bg-violet-400"></div>
					<div className="col-span-2 row-start-4 opacity-50 bg-cyan-200"></div>
				</div>
			</div>

			<Hero />
		</div>
	);
}
