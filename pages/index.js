import { useEffect } from "react";
import Counter from "../components/counter";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import TextBlock from "../components/text-block";
import isColliding from "../utils/isColliding";

export default function Home() {
	useEffect(() => {
		function collideCheck() {
			const fog = document.querySelector(".fog");
			const heroText = document.querySelector(".hero__text");
			const navigation = document.querySelector(".navigation__links");
			const spanOffsetX = window.screen.width >= 980 ? 200 : 200;
			const spanOffsetY = window.screen.width >= 980 ? 0 : 100;

			const isNavInTheFog = isColliding(fog, navigation, 200);

			heroText.querySelectorAll("span").forEach((span) => {
				const isSpanInTheFog = isColliding(
					fog.querySelector("img"),
					span,
					spanOffsetX,
					spanOffsetY
				);

				if (isSpanInTheFog) {
					span.classList.add("inversed");
				} else {
					span.classList.remove("inversed");
				}
			});

			if (isNavInTheFog) {
				navigation.classList.add("inversed");
			} else {
				navigation.classList.remove("inversed");
			}
		}

		collideCheck();
		window.addEventListener("resize", collideCheck);
	}, []);

	return (
		<>
			<Navbar />
			<Hero />
			<Counter eventDate="May 20, 2021 17:00:00" />
			<div className="container">
				<TextBlock>
					Game of DeFi protocol is gamified DeFi protocol inspired by Game Of
					Thrones HBO series. It will be deployed on Binance Smart Chain.
					Basically GoD combines traditional world of DeFi yield farming with
					gaming one. Our end goal product will offer our customers to use our
					yield farming opportunities, boost their APR If they decide to be
					engaged with our NFT games, many deflationary mechanisms and much
					more. Our games will be based on play to earn game model and will
					combine NFT ownership with gaming. Our goals and vision are to bring
					constant utility to the token and the platform.
				</TextBlock>
			</div>
			<Footer />
		</>
	);
}
