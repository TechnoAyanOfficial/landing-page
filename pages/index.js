import { useEffect } from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import TextBlock from "../components/text-block";
import isColliding from "../utils/isColliding";

export default function Home() {
	useEffect(() => {
		
		function collideCheck() {
			var fog = document.querySelector('.fog');
			var heroText = document.querySelector(".hero__text")
			var navigation = document.querySelector(".navigation__links")
		
			var isTextInTheFog = isColliding(fog, heroText, 400)
			var isNavInTheFog = isColliding(fog, navigation, 200)
		
			if (isTextInTheFog) {
				heroText.querySelector("span").classList.add("inversed")
			} else {
				heroText.querySelector("span").classList.remove("inversed")
			}
		
			if (isNavInTheFog) {
				navigation.classList.add("inversed")
			} else {
				navigation.classList.remove("inversed")
			}
		}

		collideCheck();
		window.addEventListener('resize',collideCheck);
	}, [])

	return (
		<>
			<Navbar />
			<Hero />
			<div className="rows container">
				<div className="row">
					<TextBlock>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
						ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
						accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
						gravida. Risus commodo viverra maecenas accumsan lacus vel
						facilisis.
					</TextBlock>
				</div>
				<div className="row">
					<TextBlock>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
						ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
						accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
						gravida. Risus commodo viverra maecenas accumsan lacus vel
						facilisis.
					</TextBlock>
				</div>
			</div>
      <Footer />
		</>
	);
}