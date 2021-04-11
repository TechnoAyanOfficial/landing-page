import Image from "next/image";

const Hero = () => {
	return (
		<div className="hero">
			<div className="horseman">
        <Image src="/images/horseman.svg" alt="horseman on the left" width={560} height={700}/>
      </div>
			<div className="fog">
				<Image src="/images/top_bg.png" alt="top background" width={1000} height={1000}/>
			</div>
			<div className="container">
				<h1 className="hero__text">
					it's time to <span className="inversed">go to war</span>
				</h1>
			</div>
		</div>
	);
};

export default Hero;
