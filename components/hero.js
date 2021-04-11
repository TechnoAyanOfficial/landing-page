import Image from "next/image";

const Hero = () => {
	return (
		<div className="hero">
			<div className="horseman">
        <Image src="/images/horseman.svg" alt="horseman on the left" width={560} height={700}/>
      </div>
			<div className="fog">
				<Image src="/images/top_bg.png" alt="top background" width={1280} height={1080}/>
			</div>
			<div className="container">
				<h1 className="hero__text">
					<span>it's</span> <span>time</span> <span>to</span> <span className="inversed">go</span> <span className="inversed">to</span> <span className="inversed">war</span>
				</h1>
			</div>
		</div>
	);
};

export default Hero;
