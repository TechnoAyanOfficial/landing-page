import Image from "next/image";

const Footer = () => {
	return (
		<div className="footer container">
			<div className="socials">
				<div className="socials__item">
					<a href="#">
						<Image
							src="/images/twitter_icon.svg"
							alt="twitter"
              width={40}
              height={40}
						/>
					</a>
				</div>
				<div className="socials__item">
					<a href="#">
						<Image
							src="/images/telegram_icon.svg"
							alt="telegram"
              width={40}
              height={40}
						/>
					</a>
				</div>
				<div className="socials__item">
					<a href="#">
						<Image
							src="/images/marketplace_icon.svg"
							alt="marketplace"
              width={40}
              height={40}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
