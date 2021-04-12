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
			const spanOffsetX = window.screen.width >= 980 ? 400 : 200;
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
			<Counter eventDate="April 17, 2021 03:24:00" />
			<div className="container">
				<TextBlock>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
					suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
					lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
					viverra maecenas accumsan lacus vel facilisis.
				</TextBlock>
			</div>
			<Footer />
		</>
	);
}
