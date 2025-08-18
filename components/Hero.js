import Image from "next/image";
import logoipsum from "../public/logoipsum.svg";

export default function Hero() {
	return (
		<div className="flex flex-col bg-gray-100">
			<div className="relative py-3 sm:max-w-xl sm:mx-auto">
				<div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-cyan-400 to-violet-500 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
				<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
					<div className="max-w-md mx-auto">
						<div className="relative w-48 sm:w-52">
							<Image src={logoipsum} alt="Hero logo placeholder" />
						</div>
						<div className="divide-y divide-gray-200">
							<div className="py-6 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
								<div className="pt-4 text-base font-bold leading-6 sm:text-lg sm:leading-7">
									<p>Don&apos;t have an account yet?</p>
									<p>
										<a
											href="#"
											className="text-cyan-600 hover:text-cyan-700 focus:text-cyan-700"
										>
											{" "}
											Signup &rarr;{" "}
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
