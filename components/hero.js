import Image from "next/image";

const Hero = () => {
	const chars = "it`s time to go to war";

	return (
		<div className="hero">
			<div className="horseman">
				<Image
					src="/images/horseman.svg"
					alt="horseman on the left"
					width={560}
					height={700}
				/>
			</div>
			<div className="fog">
				<Image
					src="/images/top_bg.png"
					alt="top background"
					width={1280}
					height={1080}
				/>
			</div>
			<div className="container">
				<h1 className="hero__text">
					{[...chars].map((l, i) => (
						<span
							key={i}
							className={`
							${l == " " ? "space" : ''} ${i > 12 ? "inversed" : ''}
						`}
							style={{animationDelay: `${10 + (i/10)}s`}}
						>
							{l}
						</span>
					))}
				</h1>
			</div>
		</div>
	);
};

export default Hero;
